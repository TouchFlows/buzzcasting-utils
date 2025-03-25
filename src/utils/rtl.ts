import type { IMessage } from '..'

export function rtl(message: IMessage): { [key: string]: string } {
  switch (message.language) {
    case 'ar':
      return {
        direction: 'rtl',
        textAlign: 'right',
      }
    default:
      return {}
  }
}
