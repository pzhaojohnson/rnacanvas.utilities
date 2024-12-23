/**
 * Returns true if and only if the provided string is a valid URL.
 *
 * This function uses the `URL` class constructor
 * to determine if a string is a valid URL.
 */
export function isURL(s: string): boolean {
  try {
    new URL(s);
    return true;
  } catch {
    return false;
  }
}
