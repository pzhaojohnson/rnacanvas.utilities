/**
 * Returns the middle three items in an array.
 *
 * Throws if the array has less than three items
 * or has an even number of items.
 */
export function middleThree<T>(items: T[]): [T, T, T] {
  if (items.length < 3) {
    throw new Error('Array has less than 3 items.');
  } else if (items.length % 2 == 0) {
    throw new Error('Array has an even number of items.');
  }

  let i = Math.floor(items.length / 2);

  return [items[i - 1], items[i], items[i + 1]];
}
