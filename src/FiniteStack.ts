/**
 * A stack with a finite size.
 */
export class FiniteStack<T> {
  #stack: T[] = [];

  #eventListeners: EventListeners = {
    'change': [],
  };

  constructor(readonly maxSize: number) {}

  /**
   * The number of items in the stack.
   */
  get size(): number {
    return this.#stack.length;
  }

  isEmpty(): boolean {
    return this.size == 0;
  }

  /**
   * Pushes the item to the top of the stack.
   *
   * Removes the item at the bottom of the stack
   * if the maximum stack size is exceeded.
   */
  push(item: T): void {
    this.#stack.push(item);

    if (this.size > this.maxSize) {
      this.#stack.shift();
    }

    this.#callEventListeners('change');
  }

  /**
   * Pops off and returns the item at the top of the stack.
   *
   * Throws if the stack is empty.
   */
  pop(): T | never {
    if (this.size == 0) {
      throw new Error('The stack is empty.');
    }

    let poppedItem = this.#stack.pop() as T;

    this.#callEventListeners('change');

    return poppedItem;
  }

  addEventListener(name: EventName, listener: EventListener): void {
    this.#eventListeners[name].push(listener);
  }

  removeEventListener(name: EventName, listener: EventListener): void {
    this.#eventListeners[name] = this.#eventListeners[name].filter(li => li !== listener);
  }

  #callEventListeners(name: EventName): void {
    this.#eventListeners[name].forEach(listener => listener());
  }
}

type EventName = (
  'change'
);

type EventListener = () => void;

type EventListeners = {
  'change': EventListener[],
};
