/**
 * A stack with a finite size.
 */
export class FiniteStack<T> {
  #stack: T[] = [];

  constructor(readonly maxSize: number) {}

  /**
   * The number of items in the stack.
   */
  get size(): number {
    return this.#stack.length;
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

    return this.#stack.pop() as T;
  }
}
