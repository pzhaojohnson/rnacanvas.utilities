/**
 * @jest-environment jsdom
 */

import { hasFocus } from './hasFocus';

test('`function hasFocus()`', () => {
  let ele1 = document.createElement('div');
  let ele2 = document.createElement('p');

  Object.defineProperty(document, 'activeElement', { value: null, writable: true });

  document.activeElement = null;
  expect(hasFocus(ele1)).toBe(false);

  document.activeElement = ele1;
  expect(hasFocus(ele1)).toBe(true);

  document.activeElement = ele2;
  expect(hasFocus(ele1)).toBe(false);
});
