// must cache the nodes being interacted with at the time of mouse down
// (in case nodes being interacted with were to be removed from the DOM tree)
let nodesBeingInteractedWith: Set<Node> = new Set();

window.addEventListener('mousedown', event => {
  if (!(event.target instanceof Node)) {
    nodesBeingInteractedWith = new Set();
    return;
  }

  nodesBeingInteractedWith = new Set();

  let node = event.target;
  nodesBeingInteractedWith.add(node);

  // check for circular node hierarchies (just in case)
  while (node.parentNode && !nodesBeingInteractedWith.has(node.parentNode)) {
    nodesBeingInteractedWith.add(node.parentNode);
    node = node.parentNode;
  }
});

/**
 * Returns true if and only if the provided element (or any of its child elements)
 * are currently being interacted with by the user.
 *
 * Note that this function may not work properly with lazy loading or dynamic imports
 * (since it only begins tracking which elements are being interacted with after being imported).
 */
export function isBeingInteractedWith(ele: Element): boolean {
  return (
    ele === document.body
    || nodesBeingInteractedWith.has(ele)
  )
}
