import { FiniteStack } from './FiniteStack';

describe('`class FiniteStack`', () => {
  test('`get size()`', () => {
    let stack = new FiniteStack(11);
    expect(stack.size).toBe(0);

    [1, 2, 3].forEach(n => stack.push(n));
    expect(stack.size).toBe(3);

    for (let i = 0; i < 100; i++) { stack.push(i); }
    expect(stack.size).toBe(11);

    [1, 2, 3, 4, 5].forEach(() => stack.pop());
    expect(stack.size).toBe(6);
  });

  test('`isEmpty()`', () => {
    let stack = new FiniteStack();
    expect(stack.isEmpty()).toBe(true);

    [1, 2, 3].forEach(n => stack.push(n));
    expect(stack.isEmpty()).toBe(false);

    stack.pop();
    expect(stack.isEmpty()).toBe(false);

    stack.pop();
    expect(stack.isEmpty()).toBe(false);

    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test('`push()`', () => {
    let stack = new FiniteStack(10);

    [...'1234567890'].forEach(n => stack.push(n));
    expect(stack.size).toBe(10);

    // does not let the size of the stack exceed the max size
    [...'abc'].forEach(c => stack.push(c));
    expect(stack.size).toBe(10);

    // threw away items that were pushed earlier
    let cs = [...'1234567890'].map(() => stack.pop());
    expect(cs).toStrictEqual([...'cba0987654']);
  });

  test('`pop()`', () => {
    let stack = new FiniteStack(6);
    expect(() => stack.pop()).toThrow();

    [...'abc'].forEach(c => stack.push(c));
    expect(stack.pop()).toBe('c');

    [1, 2, 3, 4].forEach(n => stack.push(n));

    let items = [...'123456'].map(() => stack.pop());
    expect(items).toStrictEqual([4, 3, 2, 1, 'b', 'a']);

    expect(() => stack.pop()).toThrow();
  });
});
