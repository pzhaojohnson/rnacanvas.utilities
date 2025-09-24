import { last } from './last';

test('`function last()`', () => {
  // an empty array
  expect(() => last([])).toThrow();

  // arrays of size 1
  expect(last([3])).toBe(3);
  expect(last(['b'])).toBe('b');

  // arrays with multiple items
  expect(last([5, 4, 3, 2])).toBe(2);
  expect(last([...'AGCT'])).toBe('T');
});
