import Location from './Location';
import { ActorState, Gender, IActor } from '../entities/Actor';
import { IItem, ItemState } from '../entities/Item';
import { ISpecies } from '../entities/Species';
import { IProfile, Trait } from '../entities/Profile';
import ItemCategory from '../entities/ItemCategory';
import { Material } from '../entities/Material';
import { IPosition } from '../entities/IPosition';


  // Mock implementation for IActor
  const mockActor: IActor = {
    get species(): ISpecies { return { base: 'human', plural: 'humans' }; },
    get state(): ActorState[] { return ['happy', 'curious']; },
    get gender(): Gender { return 'male'; },
    get age(): number { return 30; },
    get profile(): IProfile { return {
        traits: new Set<Trait>(['confident', 'playful']),
        likedItems: new Set<IItem>([]),
        dislikedItems: new Set<IItem>([/* ... other IItem instances ... */]),
        likedTraits: new Set<Trait>(['brave', 'smart']),
        dislikedTraits: new Set<Trait>(['nasty', 'stupid'])
      };},
    get items(): IItem[] { return []; }
  };
  
  // Mock implementation for IItem
  const mockItem: IItem = {
    get category(): ItemCategory { return { name: 'Tool', pre: 'a' }; },
    get material(): Material { return { name: 'Iron', hardness: 'hard', wetness: 'dry', temperature: 'cold' }; },
    get state(): ItemState[] { return ['clean']; },
    get name(): string { return 'Hammer'; },
    set name(newName: string) { newName },
    get position(): IPosition { return { horizontal: 'left', vertical: 'top' }; }
  };
  
describe('Location', () => {
  // Mock implementations for IActor and Item
  const mockActors: IActor[] = [mockActor];
  const mockItems: IItem[] = [mockItem];
  const locationName = 'Test Location';
  const location = new Location({ name: locationName, associatedActors: mockActors, associatedItems: mockItems });

  test('constructor initializes properties correctly', () => {
    expect(location.name).toBe(locationName);
    expect(location.associatedActors).toEqual(mockActors);
    expect(location.associatedItems).toEqual(mockItems);
  });

  test('name getter returns the correct value', () => {
    expect(location.name).toBe(locationName);
  });

  test('associatedActors getter returns the correct values', () => {
    expect(location.associatedActors).toEqual(mockActors);
  });

  test('associatedItems getter returns the correct values', () => {
    expect(location.associatedItems).toEqual(mockItems);
  });
});
