import { NextApiHandler } from 'next'

const ExitPreview: NextApiHandler = (_, response) => {
  // Exit the current user from "Preview Mode"
  response.clearPreviewData()

  // 307 (temporary) redirect to homepage
  response.redirect('/')
  response.end()
}

export default ExitPreview
