import { EventfulSet } from './EventfulSet';

describe('EventfulSet class', () => {
  it('is iterable', () => {
    let set = new EventfulSet();

    set.addAll([5, 24, '82', 'zxcv', '88.29']);

    expect([...set]).toStrictEqual([5, 24, '82', 'zxcv', '88.29']);
  });

  test('includes method', () => {
    let set = new EventfulSet();

    set.addAll(['b', 'e', 55, 88.921, '54']);

    expect(set.includes('b')).toBe(true);
    expect(set.includes('e')).toBe(true);
    expect(set.includes(55)).toBe(true);
    expect(set.includes(88.921)).toBe(true);
    expect(set.includes('54')).toBe(true);

    expect(set.includes('a')).toBe(false);
    expect(set.includes(54)).toBe(false);
  });

  test('include method', () => {
    let set = new EventfulSet();

    set.addAll([1, 'a', 'qwer', 57]);

    expect(set.include(1)).toBe(true);
    expect(set.include('a')).toBe(true);
    expect(set.include('qwer')).toBe(true);
    expect(set.include(57)).toBe(true);

    expect(set.include(2)).toBe(false);
    expect(set.include('qwEr')).toBe(false);
  });

  describe('addAll method', () => {
    it('adds all of the specified items', () => {
      let set = new EventfulSet();

      set.addAll(['7', 'aaa', 84.01, 'weiojf', -81]);

      expect([...set]).toStrictEqual(['7', 'aaa', 84.01, 'weiojf', -81]);
    });

    it('calls change event listeners', () => {
      let set = new EventfulSet();

      let listeners = [1, 2, 3].map(() => jest.fn());
      listeners.forEach(li => set.addEventListener('change', li));

      listeners.forEach(li => expect(li).not.toHaveBeenCalled());

      set.addAll(['a', 'b', 'c', 'd']);

      listeners.forEach(li => expect(li).toHaveBeenCalledTimes(1));
    });

    it('does not call change event listeners when all of the specified items were already in the set', () => {
      let set = new EventfulSet();
      set.addAll(['b', 29.3, 'yyii', 85]);

      let listener = jest.fn();
      set.addEventListener('change', listener);

      set.addAll(['yyii', 'b', 29.3, 85]);

      expect(listener).not.toHaveBeenCalled();
    });

    it('does not call change event listeners for an empty iterable of specified items', () => {
      let set = new EventfulSet();

      let listener = jest.fn();
      set.addEventListener('change', listener);

      set.addAll([]);

      expect(listener).not.toHaveBeenCalled();
    });
  });

  describe('removeAll method', () => {
    it('removes the specified items and no other items', () => {
      let set = new EventfulSet();
      set.addAll(['b', 'n', 88.223, 55, 8881, 'zxcv']);

      expect(set.includes('b')).toBe(true);
      expect(set.includes('n')).toBe(true);
      expect(set.includes(88.223)).toBe(true);
      expect(set.includes(55)).toBe(true);
      expect(set.includes(8881)).toBe(true);
      expect(set.includes('zxcv')).toBe(true);

      set.removeAll([88.223, 'b', 8881]);

      expect(set.includes('b')).toBe(false);
      expect(set.includes('n')).toBe(true);
      expect(set.includes(88.223)).toBe(false);
      expect(set.includes(55)).toBe(true);
      expect(set.includes(8881)).toBe(false);
      expect(set.includes('zxcv')).toBe(true);
    });

    it('calls change event listeners', () => {
      let set = new EventfulSet();
      set.addAll(['b', 'd', 66, 84, 'asdf', 82]);

      let listeners = [1, 2, 3, 4].map(() => jest.fn());
      listeners.forEach(li => set.addEventListener('change', li));

      listeners.forEach(li => expect(li).not.toHaveBeenCalled());

      set.removeAll(['d', 84, 66]);

      listeners.forEach(li => expect(li).toHaveBeenCalledTimes(1));
    });

    it('does not call change event listeners when none of the specified items were in the set to begin with', () => {
      let set = new EventfulSet();
      set.addAll([1, 2, 3, 4, 5]);

      let listener = jest.fn();
      set.addEventListener('change', listener);

      set.removeAll([6, -1, 7]);

      expect(listener).not.toHaveBeenCalled();
    });

    it('does not call change event listeners for an empty iterable of specified items', () => {
      let set = new EventfulSet();
      set.addAll(['a', 'b', 'c', 'd', 'e', 'f']);

      let listener = jest.fn();
      set.addEventListener('change', listener);

      set.removeAll([]);

      expect(listener).not.toHaveBeenCalled();
    });
  });

  describe('clear method', () => {
    it('clears the set', () => {
      let set = new EventfulSet();
      set.addAll([5, 2, 'asdf', 24, '87.1']);

      expect([...set].length).toBe(5);

      set.clear();

      expect([...set].length).toBe(0);
    });

    it('calls change event listeners', () => {
      let set = new EventfulSet();
      set.addAll([1, 2, 3, 4, 5]);

      let listeners = [1, 2, 3].map(() => jest.fn());
      listeners.forEach(li => set.addEventListener('change', li));

      listeners.forEach(li => expect(li).not.toHaveBeenCalled());

      set.clear();

      listeners.forEach(li => expect(li).toHaveBeenCalledTimes(1));
    });

    it('does not call change event listeners when the set was already empty', () => {
      let set = new EventfulSet();
      expect([...set].length).toBe(0);

      let listeners = [1, 2, 3, 4].map(() => jest.fn());
      listeners.forEach(li => set.addEventListener('change', li));

      set.clear();

      listeners.forEach(li => expect(li).not.toHaveBeenCalled());
    });
  });

  test('removeEventListener method', () => {
    let set = new EventfulSet();
    set.addAll(['57', 84, -21, 222]);

    let listener = jest.fn();
    set.addEventListener('change', listener);

    expect(listener).not.toHaveBeenCalled();

    set.removeAll([84]);

    expect(listener).toHaveBeenCalledTimes(1);

    set.removeEventListener('change', listener);

    set.removeAll([-21]);

    expect(listener).toHaveBeenCalledTimes(1);
  });
});
