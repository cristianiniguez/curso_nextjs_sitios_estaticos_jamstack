import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubCredentials from 'next-auth/providers/github'

const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  theme: { colorScheme: 'light' },
  debug: true,
  session: {
    maxAge: 60 * 15,
    strategy: 'jwt',
  },
  jwt: {},
  providers: [
    CredentialsProvider({
      name: 'Platzi',
      credentials: {
        password: {
          type: 'password',
          label: 'Nunca pares de ...',
        },
      },
      authorize: async (credentials) => {
        const response = await fetch(
          `${process.env.NEXTAUTH_URL}/api/auth/platzi`,
          {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
          }
        )

        const user = await response.json()

        if (response.ok && user) return user

        return null
      },
    }),
    GitHubCredentials({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
}

export default NextAuth(options)
