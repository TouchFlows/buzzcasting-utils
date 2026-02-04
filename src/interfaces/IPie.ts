export interface IPie {
  radius: IPieRadius;
  animation: IPieAnimation;
  boder: IPieBorder;
}

/**
 * inner and outer radius in px
 */
export interface IPieRadius {
  inside: number;
  outside: number;
  inner: number;
  outer: number;
}

/**
 * Animation Duration
 */
export interface IPieAnimation {
  duration: number;
}

export interface IPieBorder {
  radius: number;
  width: number;
  color: string;
}
