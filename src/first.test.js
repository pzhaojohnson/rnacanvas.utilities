import { first } from './first';

test('`function first()`', () => {
  // an empty array
  expect(() => first([])).toThrow();

  // arrays of size 1
  expect(first([5])).toBe(5);
  expect(first(['GCC'])).toBe('GCC');

  // arrays with multiple items
  expect(first([4, 3, 2, 1])).toBe(4);
  expect(first(['C', 'P', 'B'])).toBe('C');
});
