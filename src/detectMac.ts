/**
 * Returns true if this function detects that the user is using a Mac device.
 *
 * Returns false otherwise.
 */
export function detectMac(): boolean {
  // enclose in a try block in case this method of detection gets deprecated in the future
  try {
    return window.navigator.platform.toLowerCase().includes('mac');
  } catch {
    return false;
  }
}
