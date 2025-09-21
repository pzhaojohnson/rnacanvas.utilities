/**
 * Returns true if it is detected that the user is using Windows.
 *
 * Returns false otherwise.
 */
export function detectWindows(): boolean {
  return navigator.userAgent.indexOf('Windows') !== -1;
}
