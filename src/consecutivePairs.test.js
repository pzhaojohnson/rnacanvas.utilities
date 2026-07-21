import { consecutivePairs } from './consecutivePairs';

test('`function consecutivePairs()`', () => {
  // an empty array
  expect(consecutivePairs([])).toStrictEqual([]);

  // an array with one item
  expect(consecutivePairs([2])).toStrictEqual([]);

  // an array with two items
  expect(consecutivePairs(['a', -1])).toStrictEqual([['a', -1]]);

  // an array with three items
  expect(consecutivePairs(['g', 'h', 'i'])).toStrictEqual([['g', 'h'], ['h', 'i']]);

  // an array with more than three items
  expect(
    consecutivePairs([3, 2, 1, 'f', 'h', 'i', 'l', 'd'])
  ).toStrictEqual([
    [3, 2], [2, 1], [1, 'f'], ['f', 'h'], ['h', 'i'], ['i', 'l'], ['l', 'd']
  ]);
});
