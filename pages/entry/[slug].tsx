import fs from 'fs'
import path from 'path'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { getPlant, getPlantList, getCategoryList } from '@api'

import Link from 'next/link'
import { Layout } from '@components/Layout'
import { Typography } from '@ui/Typography'
import { Grid } from '@ui/Grid'

import { RichText } from '@components/RichText'
import { AuthorCard } from '@components/AuthorCard'
import { PlantEntryInline } from '@components/PlantCollection'
import Image from '@components/Image'

type PlantEntryPageProps = {
  plant: Plant
  otherEntries: Plant[]
  categories: Category[]
}

type PathType = {
  params: {
    slug: string
  }
  locale: string
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  if (locales === undefined) {
    throw new Error(
      'Uh, did you forget to configure locales in your Next.js config?'
    )
  }
  const slugs = fs
    .readFileSync(path.join(process.cwd(), 'paths.txt'), 'utf-8')
    .toString()
    .split('\n')
    .filter(Boolean)

  const paths: PathType[] = slugs
    .map((slug) => ({ params: { slug } }))
    .flatMap((path) => locales.map((locale) => ({ locale, ...path })))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PlantEntryPageProps> = async ({
  params,
  preview,
  locale,
}) => {
  const slug = params?.slug

  if (typeof slug !== 'string') {
    return { notFound: true }
  }

  try {
    const plant = await getPlant(slug, preview, locale)
    const otherEntries = await getPlantList({ limit: 5 })
    const categories = await getCategoryList({ limit: 10 })

    return {
      props: { plant, otherEntries, categories },
      revalidate: 5 * 60,
    }
  } catch (error) {
    return { notFound: true }
  }
}

const PlantEntryPage: NextPage<PlantEntryPageProps> = ({
  plant,
  otherEntries,
  categories,
}) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Layout>Loading ...</Layout>
  }

  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} component="article">
          <figure>
            <Image
              width={952}
              src={plant.image.url}
              alt={plant.image.title}
              layout="intrinsic"
              aspectRatio="16:9"
            />
          </figure>
          <div className="px-12 pt-8">
            <Typography variant="h2">{plant.plantName}</Typography>
          </div>
          <div className="p-10">
            <RichText richText={plant.description} />
          </div>
        </Grid>
        <Grid item xs={12} md={4} component="aside">
          <section>
            <Typography variant="h5" component="h3" className="mb-4">
              Recent Posts
            </Typography>
            {otherEntries.map((plantEntry) => (
              <article className="mb-4" key={plantEntry.id}>
                <PlantEntryInline {...plantEntry} />
              </article>
            ))}
          </section>
          <section className="mt-10">
            <Typography variant="h5" component="h3" className="mb-4">
              Categories
            </Typography>
            <ul className="list">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link passHref href={`/category/${category.slug}`}>
                    <Typography component="a" variant="h6">
                      {category.title}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </Grid>
      </Grid>
      <section className="my-4 border-t-2 border-b-2 border-gray-200 pt-12 pb-7">
        <AuthorCard {...plant.author} />
      </section>
    </Layout>
  )
}

export default PlantEntryPage
