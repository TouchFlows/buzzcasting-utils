import { describe, expect, it } from 'vitest'
import { STORAGE } from '../src/constants'

describe('sTORAGE_DEXIE', () => {
  it('the constant STORAGE_DEXIE should equal "dexie"', () => {
    expect(STORAGE.DEXIE).toEqual('dexie')
  })
})

describe('sTORAGE_KEYVAL', () => {
  it('the constant STORAGE_KEYVAL should equal "keyval"', () => {
    expect(STORAGE.KEYVAL).toEqual('keyval')
  })
})
