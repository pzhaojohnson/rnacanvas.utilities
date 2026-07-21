/**
 * Returns all consecutive pairs (i.e., neighboring pairs) in the input array.
 */
export function consecutivePairs<T>(items: T[]): [T, T][] {
  if (items.length < 2) {
    return [];
  }

  return items.slice(0, -1).map((_, i) => [items[i], items[i + 1]]);
}
