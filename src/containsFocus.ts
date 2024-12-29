/**
 * Returns true if and only if the passed in node
 * contains the active element of the document
 * (or is the active element of the document).
 */
export function containsFocus(node: Node): boolean {
  if (document.activeElement) {
    return node.contains(document.activeElement);
  } else {
    return false;
  }
}
