import { isURL } from './isURL';

test('`function isURL()`', () => {
  expect(isURL('https://developer.mozilla.org')).toBe(true);
  expect(isURL('https://rnacanvas.app')).toBe(true);
  expect(isURL('https://rnacentral.org/r2dt?jobid=r2dt-R20241027-004247-0145-14999975-p1m')).toBe(true);

  expect(isURL('')).toBe(false);
  expect(isURL('asdf')).toBe(false);

  // missing scheme
  expect(isURL('rnacanvas.app')).toBe(false);

  // missing domain
  expect(isURL('https://')).toBe(false);
});
