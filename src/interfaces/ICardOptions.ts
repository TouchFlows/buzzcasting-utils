export interface ICardOptions {
  animation?: IAnimation
  brand?: IBrand
  css?: ICss 
  d3?: ID3
  dateformat?: IDateFormat
  show?: IShow
}

export interface IAnimation {
  items?: number
  interval: number
  animation: number
  speed?: '' | 'slow' | 'slower' | 'fast' |'faster' 
  delay?: number
  parentTag?: string
}

export interface ICss {
  avatar?: string
  backdrop?: string
  body?: string
  brand?: string
  card?: string
  container?: string
  date?: string
  dynamics?: string
  handle?: string
  host?: string
  image?: string
  kpi?: string
  label?: string
  name?: string
  sender?: string
  title?: string
  video?: string
  widget?: string
  dark?: boolean
}

export interface IDateFormat {
  time?: string  
  date?: string
}

export interface IShow {
  approve?: boolean
  avatar?: boolean
  brand?: boolean
  date?: boolean
  dynamics?: boolean
  kpi?: boolean
  sender?:boolean
  star?: boolean
  visible?: boolean
}

export interface ID3 {
    globe: {
      colors: {
        arc: string					
        border: string
        country: string
        land: string
        sphere: string
      },
      settings?: {
        canvas?: string
        card?: string 
        width?: number
        height?: number
      }
    }
}

export interface IBrand {
  show?: boolean
  size?: string
}