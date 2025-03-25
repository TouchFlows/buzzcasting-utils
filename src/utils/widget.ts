import type { IQuery, IStorageOptions } from '..'
import { MODERATION } from '../constants'

export function getKey(query: IQuery): string {
  let key = `${query.type}.${query.topics}`
  if (query.order) {
    key += `.${query.order}`
  }
  if (query.period) {
    key += `.${query.period}`
  }
  return key
}

export function widgetParams(query: IQuery): IQuery {
  if (query.widget === undefined) {
    const topics = query.topics?.split('-')
    if (topics && topics.length > 1) {
      query.dashboard = topics ? topics[0] : ''
      query.widget = topics ? topics[1] : ''
    } else {
      // @ts-ignore
      query.widget = query.topics
      query.dashboard = query.slide
    }
  }
  // if (query.topics === undefined) {
  //   query.topics = `${query.dashboard}-${query.widget}`
  // }
  return query
}

export function moderation(options: IStorageOptions, query: IQuery): IQuery {
  let date: Date, Hms: string[] | undefined, H: number, m: number, s: number
  switch (options.moderation) {
    case MODERATION.BEFORE:
      date = new Date()
      Hms = options.beforeTime?.split(':') // default = '00:00:00'
      H = Number.parseInt(Hms ? Hms[0] : '00')
      m = Number.parseInt(Hms ? Hms[1] : '00')
      s = Number.parseInt(Hms ? Hms[2] : '00')
      query.before = date.setHours(H, m, s, 0) / 1000
      if (!query.period) {
        query.period = date.getDay() === 1 ? 72 : 24 // take the weekend or just yesterday
      }
      break
    case MODERATION.DELAYED:
      if (options.delay && options.delay > 0) {
        query.delay = `${options.delay}`
      }
      break
    case MODERATION.APPROVED:
      query.approved = '1'
      break
    default:
      if (options.period !== 0) {
        query.period = options.period
      }
  }
  return query
}

function awaitTimeout(delay: number, reason: string) {
  return new Promise((resolve, reject) =>
    setTimeout(
      () => (reason === undefined ? resolve('ok') : reject(reason)),
      delay,
    ),
  )
}

export function wrapPromise(promise: any, delay: number, reason: string) {
  return Promise.race([promise, awaitTimeout(delay, reason)])
}

export function getParameterByName(key: string) {
  const match = new RegExp(`[?&]${key}=([^&]*)`).exec(window.location.search)
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}
