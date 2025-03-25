import type { IMessage } from '..'

interface IAttachedMedia {
  image?: string
  background: { backgroundimage?: string } | null
  video?: string
}

export function attachedMedia(message: IMessage): IAttachedMedia {
  let videoUrl: string = ''
  let imageUrl: string = ''
  let bgImage: { [key: string]: string } = {
    backgroundImage: '',
  } // , blurredImage: { [key: string]: string }
  if (typeof message.media !== 'undefined') {
    message.media.forEach((media) => {
      if (media.type === 'photo' || media.type === 'image') {
        bgImage = {
          backgroundImage: `url(${media.url})`,
        }
        imageUrl = media.url
        // blurredImage = {
        // 	backdropFilter: 'blur(4px)',
        // 	backgroundImage: `url(${media.url})`,
        // }
      }

      if (media.type === 'video') {
        videoUrl = media.url
      }
    })
  }

  return {
    image: imageUrl,
    background: bgImage || null,
    video: videoUrl,
  }
}
