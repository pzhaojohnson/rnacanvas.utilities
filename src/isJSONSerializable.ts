/**
 * Returns true if the provided value can be serialized using the `JSON.stringify()` method
 * without the `JSON.stringify()` method throwing.
 *
 * Returns false otherwise.
 */
export function isJSONSerializable(value: unknown): boolean {
  try {
    JSON.stringify(value);
    return true;
  } catch {
    return false;
  }
}
