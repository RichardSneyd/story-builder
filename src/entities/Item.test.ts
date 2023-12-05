import Item from './Item';
import { IItem, ItemState } from "./IItem";
import Material from './Material';
import Position from './Position';
import ItemCategory from './ItemCategory';
jest.mock('./Position');
jest.mock('./Material');

describe('Item', () => {
  let mockCategory: ItemCategory;
  let mockMaterial: Material;
  let mockState: ItemState[];
  let mockPosition: Position;
  let initialProperties: any;
  let item: IItem;

  beforeEach(() => {
    mockPosition = new (Position as any)();
    mockMaterial = new (Material as any)();
    mockState = ['clean', 'fixed'];
    mockCategory = { name: 'Toy', pre: 'a' };
    initialProperties = {
      name: 'Wooden Toy',
      position: new (Position as any)(),
      category: mockCategory,
      material: mockMaterial,
      state: mockState,
    };
    item = new Item(initialProperties);

  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('constructor initializes properties correctly', () => {
    expect(item.name).toBe('Wooden Toy'); // Inherited from Entity
    expect(item.position).toEqual(mockPosition); // Inherited from Entity
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
