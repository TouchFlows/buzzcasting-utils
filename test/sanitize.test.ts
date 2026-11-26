import { afterEach, describe, expect, it } from 'vitest'
import { IMessage } from '../src/interfaces/IMessages'
import { sanitize } from '../src/utils/sanitize'

/**
 * sanitize() runs on every card payload, inside cards-widget's render, so a throw
 * here is not one bad card: Stencil swallows it and the whole widget disappears.
 *
 * Three reads used to throw on payloads that are ordinary in practice - a message
 * with no sender field at all, a message with no link (or a link that is not a
 * URL), and a page with no `window.__bc` yet. Each is pinned below, along with the
 * behaviour that has to survive the guards.
 */
const message = (fields: Partial<IMessage> = {}): IMessage =>
  ({
    id: 'm1',
    title: 'A title',
    content: 'Body text',
    channel: 'tw',
    link: 'https://example.test/post',
    sender: { title: 'Ada', name: 'ada' },
    ...fields,
  }) as unknown as IMessage

const sanitizeOne = (fields: Partial<IMessage>) => sanitize([structuredClone(message(fields))])[0]

afterEach(() => {
  delete (globalThis as { window?: unknown }).window
})

describe('sanitize and a payload with no sender', () => {
  it('builds an empty sender for a message with no sender field', () => {
    const result = sanitizeOne({ sender: undefined, link: '' })

    expect(result.sender).toMatchObject({ title: '', name: '', id: '' })
  })

  it('keeps the null-sender behaviour and takes the domain from the link', () => {
    const result = sanitizeOne({ sender: null as unknown as IMessage['sender'] })

    expect(result.sender?.title).toBe('example.test')
  })

  it('does not throw for a sender object without a title', () => {
    expect(() => sanitizeOne({ sender: {} as IMessage['sender'], link: '' })).not.toThrow()
  })
})

describe('sanitize and a payload that has no usable link', () => {
  it.each([
    ['no link field', undefined],
    ['a null link', null],
    ['an empty link', ''],
    ['a link that is not a URL', 'not a url'],
    ['a link with no host', 'mailto:ada@example.test'],
  ])('leaves an empty sender title for %s', (_label, link) => {
    const result = sanitizeOne({ link: link as unknown as string, sender: { title: '', name: '' } as IMessage['sender'] })

    expect(result.sender?.title).toBe('')
  })
})

describe('sanitize without the app global', () => {
  it('runs with no window at all', () => {
    expect(() => sanitize([structuredClone(message())])).not.toThrow()
  })

  it('runs with a window that has no __bc', () => {
    ;(globalThis as { window?: unknown }).window = {}

    expect(() => sanitize([structuredClone(message())])).not.toThrow()
  })

  it('runs with a __bc that has no opts', () => {
    ;(globalThis as { window?: unknown }).window = { __bc: {} }

    expect(() => sanitize([structuredClone(message())])).not.toThrow()
  })
})

describe('sanitize and what it still does', () => {
  it('strips links out of the content', () => {
    expect(sanitizeOne({ content: 'see https://example.test/x now' }).content).not.toContain('example.test')
  })

  it('replaces the content when the licence is suspended', () => {
    ;(globalThis as { window?: unknown }).window = { __bc: { opts: { suspended: true } } }

    expect(sanitizeOne({}).content).toBe('License suspended, please contact your Sales Representative to restore service')
  })

  it('drops undefined entries instead of throwing', () => {
    expect(sanitize([undefined as unknown as IMessage]).length).toBe(0)
  })
})
