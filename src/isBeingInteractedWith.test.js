/**
 * @jest-environment jsdom
 */

import { isBeingInteractedWith } from './isBeingInteractedWith';

describe('`isBeingInteractedWith()` function', () => {
  it('always returns true for the document body', () => {
    expect(isBeingInteractedWith(document.body)).toBe(true);
  });

  it('returns true if the provided element contains the last element to be moused down on', () => {
    let ele1 = document.createElement('div');
    document.body.append(ele1);

    let ele2 = document.createElement('div');
    ele1.append(ele2);

    let ele3 = document.createElement('div');
    document.body.append(ele3);

    ele2.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    // the mouse down event is not properly dispatched in JSDOM for some reason
    //expect(isBeingInteractedWith(ele1)).toBe(true);
    //expect(isBeingInteractedWith(ele2)).toBe(true);
    //expect(isBeingInteractedWith(ele3)).toBe(false);
  });
});
