import type { NextApiHandler } from 'next'

const platziAuthHandler: NextApiHandler<User> = (request, response) => {
  // checking if request has POST method
  if (request.method !== 'POST') return response.status(405).end()

  // validating credentials
  if (request.body.password === process.env.AUTH_PLATZI_SECRET) {
    const platziUser: User = {
      name: 'Platzi Student',
      email: 'student@platzi.com',
      image: '',
    }

    return response.status(200).json(platziUser)
  }

  response.status(401).end()
}

export default platziAuthHandler
