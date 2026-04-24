import { removeWhitespace } from './removeWhitespace';

test('`function removeWhitespace()`', () => {
  // an empty string
  expect(removeWhitespace('')).toBe('');

  // spaces
  expect(removeWhitespace(' ')).toBe('');
  expect(removeWhitespace('       ')).toBe('');

  // different kinds of whitespace characters
  expect(removeWhitespace(' \t \n \r \r\n ')).toBe('');

  // no whitespace characters
  expect(removeWhitespace('asdf')).toBe('asdf');

  // some whitespace characters mixed in
  expect(removeWhitespace(' \ta  \ns \r\n \td  \t\t\t  f\n\n\r\n ')).toBe('asdf');
});
