import { shuffled } from './shuffled';

describe('shuffled function', () => {
  it('changes the order of the values', () => {
    let values = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

    // will loop infinitely if the order of the values never changes
    while (JSON.stringify(shuffled(values)) == JSON.stringify(values)) {}
  });

  it('does not forget any values', () => {
    let values = [10, 20, 30, 40, 50, 60, 70];

    let shuffledValues = shuffled(values);

    expect(shuffledValues.length).toBe(7);

    [10, 20, 30, 40, 50, 60, 70].forEach(v => {
      expect(shuffledValues.includes(v)).toBeTruthy();
    });
  });

  it('returns a new array', () => {
    let values = [1, 2, 3, 4, 5];

    let shuffledValues = shuffled(values);

    expect(shuffledValues).not.toBe(values);
  });

  it('does not modify the input array', () => {
    let values = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    shuffled(values);

    expect(values).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
  });

  test('an empty array of values', () => {
    let values = [];

    expect(shuffled(values)).toStrictEqual([]);
  });

  test('an array containing just one value', () => {
    let values = [972.371];

    expect(shuffled(values)).toStrictEqual([972.371]);
  });
});
