import { describe, expect, it } from 'vitest'
import { IMessage } from '../src/interfaces/IMessages'
import { formatContent } from '../src/utils/format-content'

/**
 * A payload does not always carry a title, and a card body is not allowed to
 * print the absence as a word.
 *
 * The title was printed whenever it was `!== null`, which `undefined` passes, so
 * a message without one rendered the literal word "undefined" into the body. On
 * a report that word is worse than a blank body: it is text, so the print
 * readiness checks counted a card that had nothing to show as painted.
 */
const message = (fields: Partial<IMessage> = {}): IMessage => ({ id: 'm1', channel: 'tw', region: 'is', media: [], ...fields } as unknown as IMessage)

describe('formatContent', () => {
  it('renders nothing when the payload carries neither a title nor content', () => {
    expect(formatContent(message())).toBe('')
  })

  it('never prints the word undefined for a missing title', () => {
    const html = formatContent(message({ content: 'Body only' }))

    expect(html).toBe('Body only')
    expect(html).not.toContain('undefined')
  })

  it('renders the title when there is one, with the heading class', () => {
    expect(formatContent(message({ title: 'A title' }), 'font-bold')).toContain('<div title="heading" class="font-bold">A title</div>')
  })

  it('turns a newline into a break and collapses a blank line', () => {
    expect(formatContent(message({ content: 'one\n\ntwo\nthree' }))).toBe('one<br/>two<br/>three')
  })
})
