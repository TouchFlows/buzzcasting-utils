import type { IMessage } from '..'

export function shuffleMessages(messages: IMessage[]) {
  const clone = [...messages]
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]]
  }
  return clone
}
