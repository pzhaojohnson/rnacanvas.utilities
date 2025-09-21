import { detectWindows } from './detectWindows';

test('`function detectWindows()`', () => {
  // Windows 10 Chrome
  Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    writable: true,
  });

  expect(detectWindows()).toBe(true);

  // Windows 11 Edge
  Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
    writable: true,
  });

  expect(detectWindows()).toBe(true);

  // Windows 10 Firefox
  Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
    writable: true,
  });

  expect(detectWindows()).toBe(true);

  // Windows 8
  Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
    writable: true,
  });

  expect(detectWindows()).toBe(true);

  // macOS Chrome
  Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    writable: true,
  });

  expect(detectWindows()).toBe(false);

  // macOS Safari
  Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
    writable: true,
  });

  expect(detectWindows()).toBe(false);

  // macOS Firefox
  Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 12.7; rv:121.0) Gecko/20100101 Firefox/121.0',
    writable: true,
  });

  expect(detectWindows()).toBe(false);

  // Ubuntu Chrome
  Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    writable: true,
  });

  expect(detectWindows()).toBe(false);

  // Fedora Linux Firefox
  Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0',
    writable: true,
  });

  expect(detectWindows()).toBe(false);
});
