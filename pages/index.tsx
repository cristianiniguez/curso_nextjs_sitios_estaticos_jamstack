import { GetStaticProps, InferGetServerSidePropsType } from 'next'
import { Layout } from '@components/Layout'
import { Hero } from '@components/Hero'
import { Authors } from '@components/Authors'
import { PlantCollection } from '@components/PlantCollection'
import { getPlantList } from '@api'

type HomeProps = { plants: Plant[] }

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const plants = await getPlantList({ limit: 10 })

  return {
    props: { plants },
    revalidate: 5 * 60,
  }
}

export default function Home({
  plants,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Hero {...plants[0]} className="mb-20" />
      <Authors className="mb-10" />
      <PlantCollection
        plants={plants.slice(1, 3)}
        variant="vertical"
        className="mb-24"
      />
      <PlantCollection
        plants={plants.length > 8 ? plants.slice(3, 9) : plants.slice(3)}
        variant="square"
      />
    </Layout>
  )
}
