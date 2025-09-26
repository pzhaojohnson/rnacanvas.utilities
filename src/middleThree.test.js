import { middleThree } from './middleThree';

test('`function middleThree()`', () => {
  // arrays with less than 3 items
  expect(() => middleThree([])).toThrow();
  expect(() => middleThree([1])).toThrow();
  expect(() => middleThree([1, 2])).toThrow();

  // an array with 3 items
  expect(middleThree(['O', 'W', '1'])).toStrictEqual(['O', 'W', '1']);

  // arrays with odd numbers of items
  expect(middleThree([1, 7, 2, 6, 3, 5, 4])).toStrictEqual([2, 6, 3]);
  expect(middleThree(['a', 'e', 'b', 'd', 'c'])).toStrictEqual(['e', 'b', 'd']);

  // arrays with even numbers of items
  expect(() => middleThree([1, 2, 3, 4, 5, 6])).toThrow();
  expect(() => middleThree([...'ATGC'])).toThrow();
});
