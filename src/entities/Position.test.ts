import { IPosition } from './IPosition';
import Position from './Position';

describe('Position', () => {
  const initialHorizontal = 'left';
  const initialVertical = 'top';

  let position: IPosition;

  beforeEach(() => {
    position = new Position(initialHorizontal, initialVertical);
  });

  test('constructor initializes horizontal and vertical positions correctly', () => {
    expect(position.horizontal).toBe(initialHorizontal);
    expect(position.vertical).toBe(initialVertical);
  });

  test('horizontal getter returns the correct value', () => {
    expect(position.horizontal).toBe(initialHorizontal);
  });

  test('vertical getter returns the correct value', () => {
    expect(position.vertical).toBe(initialVertical);
  });

  test('horizontal setter updates the horizontal position correctly', () => {
    const newHorizontal = 'right';
    position.horizontal = newHorizontal;
    expect(position.horizontal).toBe(newHorizontal);
  });

  test('vertical setter updates the vertical position correctly', () => {
    const newVertical = 'bottom';
    position.vertical = newVertical;
    expect(position.vertical).toBe(newVertical);
  });
});
