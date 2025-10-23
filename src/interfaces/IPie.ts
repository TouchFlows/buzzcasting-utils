export interface IPie {
  radius: IPieRadius;
  animation: IPieAnimation;
}

/**
 * inner and outer radius in px
 */
export interface IPieRadius {
  inner: number;
  outer: number;
}

/**
 * Animation Duration
 */
export interface IPieAnimation {
  duration: number;
}
