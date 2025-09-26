/**
 * Returns the middle four items in an array.
 *
 * Throws for arrays with less than four items
 * and arrays with odd numbers of items.
 */
export function middleFour<T>(items: T[]): [T, T, T, T] {
  if (items.length < 4) {
    throw new Error('Array has less than 4 items.');
  } else if (items.length % 2 != 0) {
    throw new Error('Array has an odd number of items.');
  }

  let i = Math.floor(items.length / 2);

  return [items[i - 2], items[i - 1], items[i], items[i + 1]];
}
