import { middleFour } from './middleFour';

test('`function middleFour()`', () => {
  // arrays with less than 4 items
  expect(() => middleFour([])).toThrow();
  expect(() => middleFour([1])).toThrow();
  expect(() => middleFour([1, 2])).toThrow();
  expect(() => middleFour([1, 2, 3])).toThrow();

  // an array with 4 items
  expect(middleFour([...'JY30'])).toStrictEqual(['J', 'Y', '3', '0']);

  // arrays with even numbers of items
  expect(middleFour([...'87654321'])).toStrictEqual(['6', '5', '4', '3']);
  expect(middleFour([...'ABCDEF'])).toStrictEqual(['B', 'C', 'D', 'E']);

  // arrays with odd numbers of items
  expect(() => middleFour([...'abcde'])).toThrow();
  expect(() => middleFour([...'123456789'])).toThrow();
});
