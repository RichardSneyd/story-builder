import Actor from './Actor';
import Profile from './Profile';
import Species from './Species';
import Item, { IItem, ItemState } from './Item';
import ItemCategory from './ItemCategory';
import { Material } from './Material';


// Mock data for Item constructor
const mockCategory: ItemCategory = { name: 'Toy', pre: 'a' };
const mockMaterial: Material = { name: 'Plastic', hardness: 'hard', wetness: 'dry', temperature: 'cold' };
const mockState: ItemState[] = ['clean'];

// Creating mock items with the above data
const mockItem1 = new Item({
  name: 'Toy Car',
  position: { horizontal: 'center', vertical: 'top' },
  category: mockCategory,
  material: mockMaterial,
  state: mockState,
});

const mockItem2 = new Item({
  name: 'Doll',
  position: { horizontal: 'left', vertical: 'bottom' },
  category: mockCategory,
  material: mockMaterial,
  state: mockState,
});

describe('Actor', () => {
  const mockProfile = new Profile({});
  const mockSpecies = new Species('dog');
  const mockItems: IItem[] = [mockItem1, mockItem2];
  const initialProperties: any = {
    name: 'TestActor',
    position: { x: 0, y: 0 },
    state: ['happy', 'curious'],
    species: mockSpecies,
    gender: 'female',
    age: 5,
    profile: mockProfile,
    items: mockItems,
  };

  let actor: Actor;

  beforeEach(() => {
    actor = new Actor(initialProperties);
  });

  test('constructor initializes properties correctly', () => {
    expect(actor.name).toBe('TestActor'); // Assuming Entity has a name property
    expect(actor.position).toEqual({ x: 0, y: 0 }); // Assuming Entity has a position property
    expect(actor.state).toEqual(['happy', 'curious']);
    expect(actor.species).toBe(mockSpecies);
    expect(actor.gender).toBe('female');
    expect(actor.age).toBe(5);
    expect(actor.profile).toBe(mockProfile);
    expect(actor.items).toEqual(mockItems);
  });

  test('species getter returns correct value', () => {
    expect(actor.species).toBe(mockSpecies);
  });

  test('state getter returns correct value', () => {
    expect(actor.state).toEqual(['happy', 'curious']);
  });

  test('gender getter returns correct value', () => {
    expect(actor.gender).toBe('female');
  });

  test('age getter returns correct value', () => {
    expect(actor.age).toBe(5);
  });

  test('profile getter returns correct value', () => {
    expect(actor.profile).toBe(mockProfile);
  });

  test('items getter returns correct value', () => {
    expect(actor.items).toEqual(mockItems);
  });
});
