function isTextArea(ele: Element): boolean {
  return ele.tagName.toLowerCase() === 'textarea';
}

function isTextInput(ele: Element): boolean {
  return (
    ele.tagName.toLowerCase() === 'input'
    && ele.getAttribute('type')?.toLowerCase() === 'text'
  );
}

/**
 * Returns true when the user is currently typing
 * (e.g., when the active element of the document is a text area).
 *
 * Returns false otherwise.
 */
export function userIsTyping(): boolean {
  if (!document.activeElement) { return false; }

  if (isTextArea(document.activeElement)) { return true; }
  if (isTextInput(document.activeElement)) { return true; }

  return false;
}
