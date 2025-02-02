/**
 * Splits the string into its constituent lines
 * regardless of newline encoding (e.g., CRLF).
 */
export function splitLines(s: string): string[] {
  return s.split(/\r\n|\r|\n/);
}
