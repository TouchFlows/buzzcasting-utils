/**
 * Convert string containing hyphens to camelCase
 * @param str
 * @returns camilized string
 */
export function camelize(str: string) {
  return str
    .replace(/^\w|[A-Z]|\b\w/g, (word: string, index: number) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}
/**
 * Convert string containing hyphens to camelCase
 * @param str
 * @returns string
 */
export function camelCase(str: string) {
  return str
    .toLowerCase()
    .split('-')
    .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)))
}
