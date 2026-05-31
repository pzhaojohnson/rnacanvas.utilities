/**
 * Returns `true` if this function is able to detect that the user is using a Mac device.
 *
 * Returns `false` otherwise.
 */
export function detectMac(): boolean {
  // enclose in a try...catch block just in case of future deprecation
  try {
    return window.navigator.platform.toLowerCase().includes('mac');
  } catch {
    return false;
  }
}
