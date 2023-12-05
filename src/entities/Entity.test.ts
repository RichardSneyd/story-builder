import Entity from './Entity';
import IEntity from './IEntity';
import { IPosition } from './IPosition';

describe('Entity', () => {
  let initialName: string;
  let initialPosition: IPosition;
  let entity: IEntity;

  beforeEach(() => {
    initialName = 'TestEntity';
    initialPosition = {
      horizontal: 'center',
      vertical: 'top',
    };
    entity = new Entity(initialName, initialPosition);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('constructor initializes name and position correctly', () => {
    expect(entity.name).toBe(initialName);
    expect(entity.position.horizontal).toBe('center');
    expect(entity.position.vertical).toBe('top');
  });

  test('name getter returns the correct value', () => {
    expect(entity.name).toBe(initialName);
  });

  test('position getters return the correct values', () => {
    expect(entity.position.horizontal).toBe('center');
    expect(entity.position.vertical).toBe('top');
  });

  test('name setter updates the name correctly', () => {
    const newName = 'UpdatedEntity';
    entity.name = newName;
    expect(entity.name).toBe(newName);
  });

  test('position setters update the position correctly', () => {
    entity.position.horizontal = 'right';
    entity.position.vertical = 'bottom';
    expect(entity.position.horizontal).toBe('right');
    expect(entity.position.vertical).toBe('bottom');
  });
});
