import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  theme: { colorScheme: 'light' },
  debug: true,
  session: {},
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
  ],
}

export default NextAuth(options)
