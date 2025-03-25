/**
 * Clear Container range contents of template code when the web component is connected to the DOM
 * @param myNode
 */
export function clearContents(myNode: HTMLElement): void {
  // using range as mostly we use the Host tag to encapsulate HTMLElements
  const range = document.createRange()
  range.selectNodeContents(myNode)
  range.deleteContents()
}
