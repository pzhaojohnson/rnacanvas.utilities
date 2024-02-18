/**
 * Returns a new randomly shuffled copy of the input array of values.
 *
 * (Does not modify the input array of values.)
 */
export function shuffled<T>(values: T[]): T[] {
  return values
    .map(v => ({ v, priority: Math.random() }))
    .sort((v1, v2) => v1.priority - v2.priority)
    .map(({ v }) => v);
}
