/**
 * @jest-environment jsdom
 */

import { detectMac } from './detectMac';

describe('detectMac function', () => {
  test('when the user is using an Intel Mac device', () => {
    Object.defineProperty(window, 'navigator', {
      value: { platform: 'MacIntel' },
      writable: true,
    });

    expect(detectMac()).toBe(true);
  });

  test('when the user is using an ARM Mac device', () => {
    Object.defineProperty(window, 'navigator', {
      value: { platform: 'MacARM' },
      writable: true,
    });

    expect(detectMac()).toBe(true);
  });

  test('when the user is using a Windows device', () => {
    Object.defineProperty(window, 'navigator', {
      value: { platform: 'Windows' },
      writable: true,
    });

    expect(detectMac()).toBe(false);
  });

  test('when the user is using a Linux device', () => {
    Object.defineProperty(window, 'navigator', {
      value: { platform: 'Linux' },
      writable: true,
    });

    expect(detectMac()).toBe(false);
  });

  test('when navigator platform is undefined', () => {
    Object.defineProperty(window, 'navigator', {
      value: { platform: undefined },
      writable: true,
    });

    expect(detectMac()).toBe(false);
  });

  test('when navigator is undefined', () => {
    Object.defineProperty(window, 'navigator', {
      value: undefined,
      writable: true,
    });

    expect(detectMac()).toBe(false);
  });
});
