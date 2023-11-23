import Item, { IItem } from './Item';

describe('Item', () => {
  const mockCategory = { name: 'Toy', pre: 'a' };
  const mockMaterial = {
    name: 'Wood',
    hardness: 'hard',
    wetness: 'dry',
    temperature: 'cold'
  };
  const mockState = ['clean', 'fixed'];

  const initialProperties: any = {
    name: 'Wooden Toy',
    position: { horizontal: 'center', vertical: 'top' },
    category: mockCategory,
    material: mockMaterial,
    state: mockState,
  };

  let item: IItem;

  beforeEach(() => {
    item = new Item(initialProperties);
  });

  test('constructor initializes properties correctly', () => {
    expect(item.name).toBe('Wooden Toy'); // Inherited from Entity
    expect(item.position).toEqual({ horizontal: 'center', vertical: 'top' }); // Inherited from Entity
    expect(item.category).toEqual(mockCategory);
    expect(item.material).toEqual(mockMaterial);
    expect(item.state).toEqual(mockState);
  });

  test('category getter returns the correct value', () => {
    expect(item.category).toEqual(mockCategory);
  });

  test('material getter returns the correct value', () => {
    expect(item.material).toEqual(mockMaterial);
  });

  test('state getter returns the correct value', () => {
    expect(item.state).toEqual(mockState);
  });
});
