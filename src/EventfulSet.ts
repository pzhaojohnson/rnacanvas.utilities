/**
 * Change events are defined as occurring whenever the composition of items in a set changes.
 */
type ChangeEventName = 'change';

type EventName = (
  ChangeEventName
);

type EventListener = () => void;

type EventListeners = {
  'change': EventListener[];
};

/**
 * A set of items with events that can be listened to
 * (such as whenever the set changes).
 */
export class EventfulSet<T> {
  private underlyingSet: Set<T>;

  private eventListeners: EventListeners = {
    'change': [],
  };

  constructor() {
    this.underlyingSet = new Set();
  }

  [Symbol.iterator]() {
    return this.underlyingSet.values();
  }

  /**
   * Returns true if the set possesses the given item and returns false otherwise.
   */
  includes(item: T): boolean {
    return this.underlyingSet.has(item);
  }

  /**
   * An alias for the `includes` method.
   *
   * Often reads more nicely if a variable referencing a set has a plural name.
   */
  include(item: T): boolean {
    return this.includes(item);
  }

  /**
   * Adds all of the specified items to the set.
   *
   * If some items were already present in the set, they are not duplicated.
   *
   * Calls change event listeners if items were added to the set.
   *
   * Does not call change event listeners if all of the specified items were already present in the set
   * or for an empty iterable of specified items.
   */
  addAll(items: Iterable<T>): void {
    let itemsArray = [...items];

    if (itemsArray.length == 0) {
      return;
    } else if (itemsArray.every(item => this.includes(item))) {
      return;
    }

    itemsArray.forEach(item => this.underlyingSet.add(item));
    this.callEventListeners('change');
  }

  /**
   * Removes all of the specified items from the set.
   *
   * Calls change event listeners.
   *
   * (Does not call change event listeners if none of the specified items were in the set to begin with
   * or for an empty iterable of specified items.)
   */
  removeAll(items: Iterable<T>): void {
    let itemsArray = [...items];

    if (itemsArray.length == 0) {
      return;
    } else if (itemsArray.every(item => !this.includes(item))) {
      return;
    }

    itemsArray.forEach(item => this.underlyingSet.delete(item));
    this.callEventListeners('change');
  }

  /**
   * Removes all items from the set.
   *
   * Calls change event listeners.
   *
   * (Does not call change event listeners if there were no items in the set to begin with.)
   */
  clear(): void {
    if (this.underlyingSet.size == 0) {
      return;
    }

    this.underlyingSet.clear();
    this.callEventListeners('change');
  }

  addEventListener(name: EventName, listener: EventListener): void {
    this.eventListeners[name].push(listener);
  }

  private callEventListeners(name: EventName): void {
    this.eventListeners[name].forEach(listener => listener());
  }

  removeEventListener(name: EventName, listener: EventListener): void {
    this.eventListeners[name] = this.eventListeners[name].filter(li => li !== listener);
  }
}
