import { FC } from 'react'
import NextImage, { ImageLoader } from 'next/image'

type AspectRatio = '1:1' | '4:3' | '16:9'

const aspectRatioToRatio: { [key in AspectRatio]: number } = {
  '1:1': 1,
  '4:3': 3 / 4,
  '16:9': 9 / 16,
}

function calcAspectRatio(aspectRatio: AspectRatio, width: number): number {
  const ratio = aspectRatioToRatio[aspectRatio]
  return Math.floor(width * ratio)
}

type ImageProps = {
  layout: 'fill' | 'fixed' | 'intrinsic' | 'responsive' | undefined
  src: string
  width: number
  height?: never
  aspectRatio: AspectRatio
  fit?: 'pad' | 'fill' | 'crop' | 'scale'
}

const Image: FC<ImageProps> = ({
  layout,
  src,
  width,
  aspectRatio,
  fit = 'scale',
}) => {
  const height = calcAspectRatio(aspectRatio, width)

  const loader: ImageLoader = (args) => {
    const loaderHeight = calcAspectRatio(aspectRatio, args.width)
    return `${args.src}?w=${width}&h=${loaderHeight}&fit=${fit}`
  }

  return <NextImage {...{ layout, src, width, height, loader }} unoptimized />
}

export default Image
