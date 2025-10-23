export interface IAnimation {
  items?: number;
  interval: number;
  animation: number;
  speed?: "" | "slow" | "slower" | "fast" | "faster";
  delay?: number;
  parentTag?: string;
}
