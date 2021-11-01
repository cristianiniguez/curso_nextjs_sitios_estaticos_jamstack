import { Layout } from '@components/Layout'
import { Button } from '@ui/Button'
import { Typography } from '@ui/Typography'

const ServerErrorPage = ({ statusCode }: { statusCode: number }) => {
  return (
    <Layout>
      <div className="text-center">
        <Typography variant="h2" className="mb-6">
          🍄 Something went wrong
        </Typography>
        <Typography variant="body1" className="mb-6">
          It's not you, it's us. Please try it again in a few minutes.
        </Typography>
        <Typography variant="body1" className="mb-6">
          <span className="bg-gray-300 inline-block">
            ERRORCODE: {statusCode}
          </span>
        </Typography>
        <Button
          color="primary"
          variant="contained"
          href="/"
          title="Go back home"
        >
          Go back home
        </Button>
      </div>
    </Layout>
  )
}

export default ServerErrorPage
