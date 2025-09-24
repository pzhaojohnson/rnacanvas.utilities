/**
 * Returns the last item in an array.
 *
 * Throws for empty arrays.
 */
export function last<T>(items: T[]): T | never {
  if (items.length > 0) {
    return items[items.length - 1];
  } else {
    throw new Error('Array is empty.');
  }
}
