import { userIsTyping } from './userIsTyping';

import { isBeingInteractedWith } from './isBeingInteractedWith';

export class KeyBinding {
  #scope: Element | undefined = undefined;

  #options;

  constructor(readonly key: string, callbackFn: () => void, options?: Options) {
    this.#options = options;

    window.addEventListener('keydown', event => {
      let allConditionsAreMet = (
        event.key.toUpperCase() === key.toUpperCase()
        && (this.#options?.shiftKey === undefined || this.#options.shiftKey == event.shiftKey)
        && (this.#options?.ctrlKey === undefined || this.#options.ctrlKey == event.ctrlKey)
        && (this.#options?.metaKey === undefined || this.#options.metaKey == event.metaKey)
        && !userIsTyping()
        && isBeingInteractedWith(this.scope)
      );

      if (allConditionsAreMet) {
        event.preventDefault();
        callbackFn();
      }
    }, { passive: false });
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

type Options = {
  shiftKey?: boolean;
  ctrlKey?: boolean;
  metaKey?: boolean;
};
