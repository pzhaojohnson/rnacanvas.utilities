import { userIsTyping } from './userIsTyping';

import { isBeingInteractedWith } from './isBeingInteractedWith';

export class KeyBinding {
  #scope: Element | undefined = undefined;

  constructor(readonly key: string, callbackFn: () => void) {
    window.addEventListener('keydown', event => {
      let allConditionsAreMet = (
        event.key.toUpperCase() === key.toUpperCase()
        && !userIsTyping()
        && isBeingInteractedWith(this.scope)
      );

      allConditionsAreMet ? callbackFn() : {};
    });
  }

  /**
   * Must be currently being interacted with by the user
   * for the key binding to be triggered.
   *
   * Is the document body by default (i.e., key bindings apply to the whole webpage by default).
   */
  get scope(): Element {
    return this.#scope ?? document.body;
  }

  set scope(scope) {
    this.#scope = scope;
  }
}
