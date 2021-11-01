import { NextApiHandler } from 'next'
import { getPlant } from '@api'

const enablePreview: NextApiHandler = async (request, response) => {
  const slug = request.query.slug
  // Check the secret and next parameters
  // This secret should only bo known to this API route and the CMS
  if (
    request.query.secret !== process.env.PREVIEW_SECRET ||
    typeof slug !== 'string' ||
    slug === ''
  ) {
    return response.status(400).json({ message: 'Invalid token' })
  }

  try {
    // Fetch the headless CMS to check if the provided `slug` exists
    const plant = await getPlant(slug, true)

    // Enable Preview Mode by setting the cookies
    response.setPreviewData({})

    // Redirect to the path from the fetched plant
    // We don't need to request.query as that might ...
    response.redirect(`/entry/${plant.slug}`)
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(e)
    }
    return response.status(401).json({ message: 'Invalid slug' })
  }
}

export default enablePreview
