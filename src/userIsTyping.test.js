/**
 * @jest-environment jsdom
 */

import { userIsTyping } from './userIsTyping';

describe('userIsTyping function', () => {
  test('when there is no active element', () => {
    Object.defineProperty(document, 'activeElement', { value: null, writable: true });

    expect(userIsTyping()).toBe(false);
  });

  test('when the active element is a text area', () => {
    Object.defineProperty(document, 'activeElement', {
      value: document.createElement('textarea'),
      writable: true,
    });

    expect(userIsTyping()).toBe(true);
  });

  test('when the active element is an input element', () => {
    let inputElement = document.createElement('input');
    Object.defineProperty(document, 'activeElement', { value: inputElement, writable: true });

    inputElement.type = 'text';
    expect(userIsTyping()).toBe(true);

    inputElement.type = 'select';
    expect(userIsTyping()).toBe(false);
  });

  test('when the active element cannot be typed into', () => {
    Object.defineProperty(document, 'activeElement', {
      value: document.createElement('div'),
      writable: true,
    });

    expect(userIsTyping()).toBe(false);
  });
});
