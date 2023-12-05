import Actor from './Actor';
import Profile from './Profile';
import Species from './Species';
import Item from './Item';
import { IItem } from "./IItem";

jest.mock('./Material');
jest.mock('./Item');
jest.mock('./Profile');
jest.mock('./Species');

describe('Actor', () => {

  let mockItem1: IItem;
  let mockItem2: IItem;
  let mockProfile: Profile;
  let mockSpecies: Species;
  let mockItems: IItem[];
  let initialProperties: any;
  let actor: Actor;

  beforeEach(() => {
    mockItem1 = new (Item as any)();
    mockItem2 = new (Item as any)();
    mockProfile = new (Profile as any)();
    mockSpecies = new (Species as any)();
    mockItems = [mockItem1, mockItem2];
    initialProperties = {
      name: 'TestActor',
      position: { x: 0, y: 0 },
      state: ['happy', 'curious'],
      species: mockSpecies,
      gender: 'female',
      age: 5,
      profile: mockProfile,
      items: mockItems,
    };
    actor = new Actor(initialProperties);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('constructor initializes properties correctly', () => {
    expect(actor.name).toBe('TestActor'); 
    expect(actor.position).toEqual({ x: 0, y: 0 }); 
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
