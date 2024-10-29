import { userIsTyping } from './userIsTyping';

import { isBeingInteractedWith } from './isBeingInteractedWith';

export class KeyBinding {
  /**
   * Must be currently being interacted with by the user
   * for the key binding to be triggered
   * (and must be set to an element for the key binding to become active).
   *
   * Set to the document body for the key binding to apply to the whole webpage.
   */
  public scope: Element | undefined = undefined;

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
        && this.scope
        && isBeingInteractedWith(this.scope)
      );

      if (allConditionsAreMet) {
        event.preventDefault();
        callbackFn();
      }
    }, { passive: false });
  }
}

type Options = {
  shiftKey?: boolean;
  ctrlKey?: boolean;
  metaKey?: boolean;
};
