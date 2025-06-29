import { useLottie } from 'lottie-react'

interface ImageAnimationProps<T> {
  src: T
}

export const ImageAnimation = <T,>({ src }: ImageAnimationProps<T>) => {
  const options = {
    animationData: src,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options)

  return <div className='flex h-full w-full flex-col'>{View}</div>
}
