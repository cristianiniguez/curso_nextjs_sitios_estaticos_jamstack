import { Alert } from '@ui/Alert'
import { Button } from '@ui/Button'
import { useRouter } from 'next/router'

const PreviewModeBanner = () => {
  const router = useRouter()
  if (!router.isPreview) return null

  return (
    <div className="fixed right-0 bottom-16 w-md transform translate-x-2/3 hover:translate-x-0 z-10 transition-transform duration-300">
      <Alert
        variant="filled"
        severity="warning"
        action={
          <Button variant="text" color="inherit" href="/api/preview/exit">
            Disable preview mode
          </Button>
        }
      >
        <div className="max-w-md">Preview mode is enabled</div>
      </Alert>
    </div>
  )
}

export default PreviewModeBanner
