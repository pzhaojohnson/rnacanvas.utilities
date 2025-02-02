import { splitLines } from './splitLines';

test('`function splitLines()`', () => {
  expect(splitLines('')).toStrictEqual(['']);

  expect(splitLines('asdf')).toStrictEqual(['asdf']);

  expect(splitLines('asdf\nqwer')).toStrictEqual(['asdf', 'qwer']);
  expect(splitLines('asdf\rqwer')).toStrictEqual(['asdf', 'qwer']);
  expect(splitLines('asdf\r\nqwer')).toStrictEqual(['asdf', 'qwer']);

  expect(splitLines('1\n2\r3\r\n4\n5')).toStrictEqual(['1', '2', '3', '4', '5']);

  // a newline character at the beginning
  expect(splitLines('asdf\r')).toStrictEqual(['asdf', '']);

  // a newline character at the end
  expect(splitLines('\nasdf')).toStrictEqual(['', 'asdf']);

  // consecutive newline characters
  expect(splitLines('asdf\n\r\r\n\nqwer')).toStrictEqual(['asdf', '', '', '', 'qwer']);
});
