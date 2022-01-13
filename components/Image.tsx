import { FC, useCallback } from 'react'
import NextImage, {
  ImageLoader,
  ImageProps as NextImageProps,
} from 'next/image'

type AspectRatio = '1:1' | '4:3' | '16:9' | '3:2' | '9:12'
type ImageLayout = 'fill' | 'fixed' | 'intrinsic' | 'responsive' | undefined
type ImageFit = 'pad' | 'fill' | 'crop' | 'scale' | 'thumb'

const aspectRatioToRatio: { [key in AspectRatio]: number } = {
  '1:1': 1,
  '4:3': 3 / 4,
  '16:9': 9 / 16,
  '3:2': 2 / 3,
  '9:12': 12 / 9,
}

function calcAspectRatio(aspectRatio: AspectRatio, width: number): number {
  const ratio = aspectRatioToRatio[aspectRatio]
  return Math.floor(width * ratio)
}

type ImageProps = {
  width: number
  height?: never
  layout: ImageLayout
  aspectRatio: AspectRatio
  fit?: ImageFit
  src: string
} & Omit<NextImageProps, 'height'>

const Image: FC<ImageProps> = ({
  width,
  fit = 'fill',
  aspectRatio,
  ...nextImageProps
}) => {
  const height = calcAspectRatio(aspectRatio, width)

  const imageLoader = useCallback<ImageLoader>(
    (loaderArgs) => {
      const h = calcAspectRatio(aspectRatio, loaderArgs.width)
      return `${loaderArgs.src}?w=${loaderArgs.width}&h=${h}&fit=${fit}`
    },
    [aspectRatio, fit]
  )

  return (
    <NextImage
      {...nextImageProps}
      {...{ width, height }}
      loader={imageLoader}
    />
  )
}

export default Image
