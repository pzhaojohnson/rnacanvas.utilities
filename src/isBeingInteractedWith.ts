let prevMouseDown: MouseEvent | null = null;

window.addEventListener('mousedown', event => prevMouseDown = event);

/**
 * Returns true if and only if the provided element (or any of its child elements)
 * are currently being interacted with by the user.
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
