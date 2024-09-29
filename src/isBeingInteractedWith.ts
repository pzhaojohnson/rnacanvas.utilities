let prevMouseDown: MouseEvent | null = null;

window.addEventListener('mousedown', event => prevMouseDown = event);

/**
 * Returns true if and only if the provided element (or any of its child elements)
 * are currently being interacted with by the user.
 *
 * Note that this function may not work properly with lazy loading or dynamic imports
 * (since it only begins tracking which element is being interacted with after being imported).
 */
export function isBeingInteractedWith(ele: Element): boolean {
  if (ele === document.body) { return true; }

  if (document.activeElement) {
    return ele.contains(document.activeElement);
  }

  return (
    !!prevMouseDown
    && prevMouseDown.target instanceof Node
    && ele.contains(prevMouseDown.target)
  );
}
