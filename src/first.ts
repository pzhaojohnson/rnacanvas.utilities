/**
 * Returns the first item in the array.
 *
 * Throws for empty arrays.
 */
export function first<T>(items: T[]): T | never {
  if (items.length > 0) {
    return items[0];
  } else {
    throw new Error('Array is empty.');
  }
}
