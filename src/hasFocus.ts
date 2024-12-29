/**
 * Returns true if and only if the passed in node is the active element of the document.
 */
export function hasFocus(node: Node): boolean {
  return node === document.activeElement;
}
