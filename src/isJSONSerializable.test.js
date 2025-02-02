import { isJSONSerializable } from './isJSONSerializable';

test('`function isJSONSerializable()`', () => {
  expect(isJSONSerializable({ 'asdf': 'qwer', 'ASDF': 'QWER' })).toBe(true);

  let obj = {};

  // a circular reference
  obj.obj = obj;

  expect(isJSONSerializable(obj)).toBe(false);
});
