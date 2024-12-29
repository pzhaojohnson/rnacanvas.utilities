/**
 * @jest-environment jsdom
 */

import { containsFocus } from './containsFocus';

test('`function containsFocus()`', () => {
  let ele1 = document.createElement('div');
  let ele2 = document.createElement('div');
  let ele3 = document.createElement('div');

  // element 1 contains element 2
  ele1.append(ele2);

  // element 2 contains element 3
  ele2.append(ele3);

  Object.defineProperty(document, 'activeElement', { value: null, writable: true });

  document.activeElement = null;
  expect(containsFocus(ele1)).toBe(false);
  expect(containsFocus(ele2)).toBe(false);
  expect(containsFocus(ele3)).toBe(false);

  document.activeElement = ele1;
  expect(containsFocus(ele1)).toBe(true);
  expect(containsFocus(ele2)).toBe(false);
  expect(containsFocus(ele3)).toBe(false);

  document.activeElement = ele2;
  expect(containsFocus(ele1)).toBe(true);
  expect(containsFocus(ele2)).toBe(true);
  expect(containsFocus(ele3)).toBe(false);
});
