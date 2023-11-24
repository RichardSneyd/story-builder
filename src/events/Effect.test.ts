import { ActorEffect } from './Effect';
import { IActor, ActorState, Gender } from '../entities/Actor';
import { ItemEffect } from './Effect';
import { IItem, ItemState } from '../entities/Item';
import { ISpecies } from '../entities/Species';
import { IProfile, Trait } from '../entities/Profile';
import ItemCategory from '../entities/ItemCategory';
import { IMaterial } from '../entities/Material';
import { IPosition } from '../entities/IPosition';


describe('ActorEffect', () => {
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
  const addStates = new Set<ActorState>(['happy', 'excited']);
  const removeStates = new Set<ActorState>(['sad', 'tired']);
  const actorEffect = new ActorEffect({ subject: mockActor, addState: Array.from(addStates), removeState: Array.from(removeStates) });

  test('constructor initializes properties correctly for ActorEffect', () => {
    expect(actorEffect.subject).toBe(mockActor);
    expect(actorEffect.addState).toEqual(addStates);
    expect(actorEffect.removeState).toEqual(removeStates);
  });
});

describe('ItemEffect', () => {
    const mockItem: IItem = {
        get category(): ItemCategory { return { name: 'Tool', pre: 'a' }; },
        get material(): IMaterial { return { name: 'Iron', hardness: 'hard', wetness: 'dry', temperature: 'cold' }; },
        get state(): ItemState[] { return ['clean']; },
        get name(): string { return 'Hammer'; },
        set name(newName: string) { newName },
        get position(): IPosition { return { horizontal: 'left', vertical: 'top' }; }
      };
    const addStates = new Set<ItemState>(['clean', 'fixed']);
    const removeStates = new Set<ItemState>(['broken']);
    const itemEffect = new ItemEffect({ subject: mockItem, addState: Array.from(addStates), removeState: Array.from(removeStates) });
  
    test('constructor initializes properties correctly for ItemEffect', () => {
      expect(itemEffect.subject).toBe(mockItem);
      expect(itemEffect.addState).toEqual(addStates);
      expect(itemEffect.removeState).toEqual(removeStates);
    });
  });
