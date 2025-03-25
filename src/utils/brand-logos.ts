export function brandLogo(channel: string, size: string): string {
  switch (channel) {
    case 'ax':
      return '<div class="axa-switch-small bg-center bg-cover w-6 h-6"></div>'
    case 'bl':
      return `<li class="text-blue fa-solid fa-rss fa-${size}"/>`

    case 'co': // unknown
      return `<li class="fa-solid fa-comment fa-${size}"/>`

    case 'da':
      return `<li class="fa-brands fa-dailymotion fa-${size}"/>`

    case 'fb':
      return `<li class="text-blue-900 fa-brands fa-facebook fa-${size}"/>`

    case 'fo':
      return `<li class="fa-solid fa-messages fa-${size}"/>`

    case 'ig':
      return `<li class="fa-brands fa-instagram fa-${size}"/>`

    case 'lb': // unknown
      return `<li class="fa-solid fa-comment fa-${size}"/>`

    case 'li':
      return `<li class="fa-brands fa-linkedin fa-${size}"/>`

    case 'me': // news ?
      return `<li class="fa-solid fa-rss fa-${size}"/>`

    case 'pi':
      return `<li class="fa-brands fa-pinterest fa-${size}"/>`

    case 'qq':
      return `<li class="fa-brands fa-weibo fa-${size}"/>`

    case 'rd':
      return `<li class="fa-brands fa-reddit fa-${size}"/>`

    case 're': // reviews
      return `<li class="fa-solid fa-star-sharp-half-stroke fa-${size}"/>`

    case 'ti':
      return `<li class="fa-brands fa-tiktok fa-${size}"/>`

    case 'tw':
      return `<li class="fa-brands fa-x-twitter fa-${size}"/>`

    case 'vk':
      return `<li class="fa-brands fa-vk fa-${size}"/>`

    case 'ws': // website
      return `<li class="fa-solid fa-rss fa-${size}"/>`

    case 'yt':
      return `<li class="text-red fa-brands fa-youtube fa-${size}"/>`

    default:
      return ''
  }
}
