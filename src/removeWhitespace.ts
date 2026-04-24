import { isWhitespace } from '@rnacanvas/value-check';

/**
 * Returns a new string with all whitespace characters having been removed from the input string.
 */
export function removeWhitespace(text: string): string {
  return (
    [...text]
      .filter(character => !isWhitespace(character))
      .join('')
  );
}
