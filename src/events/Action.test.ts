import ComplexTransitiveAction from "./ComplexTransitiveAction";
import { ActorState, Gender } from '../entities/Actor';
import { IActor } from "../entities/IActor";
import { IItem, ItemState } from "../entities/IItem";
import { IVerb } from "./IVerb";
import { ISpecies } from "../entities/ISpecies";
import { IProfile, Trait } from "../entities/IProfile";
import ItemCategory from '../entities/ItemCategory';
import { IMaterial } from "../entities/IMaterial";
import { IPosition } from '../entities/IPosition';
import IntransitiveAction from "./IntransitiveAction";
import TransitiveAction from "./TransitiveAction";


// Mock implementation for IVerb
const mockVerb: IVerb = {
    get base() { return 'run'; },
    get infinitive() { return 'to run'; },
    get presentParticiple() { return 'running'; },
    conjugatePresent: () => 'runs', // Simplified implementation
    get pastTense() { return 'ran'; },
    get pastParticiple() { return 'run'; },
    get futureTense() { return 'will run'; }
  };
  
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
    get material(): IMaterial { return { name: 'Iron', hardness: 'hard', wetness: 'dry', temperature: 'cold' }; },
    get state(): ItemState[] { return ['clean']; },
    get name(): string { return 'Hammer'; },
    set name(newName: string) { newName },
    get position(): IPosition { return { horizontal: 'left', vertical: 'top' }; }
  };
describe('Action Classes', () => {
  // IntransitiveAction Tests
  describe('IntransitiveAction', () => {
    const intransitiveAction = new IntransitiveAction(mockVerb, mockActor);

    test('constructor initializes verb and subject correctly', () => {
      expect(intransitiveAction.verb).toBe(mockVerb);
      expect(intransitiveAction.subject).toBe(mockActor);
    });
  });

  // TransitiveAction Tests
  describe('TransitiveAction', () => {
    const baseAction = new IntransitiveAction(mockVerb, mockActor);
    const transitiveAction = new TransitiveAction(baseAction, mockItem);

    test('constructor initializes baseAction and object correctly', () => {
      expect(transitiveAction.verb).toBe(mockVerb);
      expect(transitiveAction.subject).toBe(mockActor);
      expect(transitiveAction.object).toBe(mockItem);
    });
  });

  // ComplexTransitiveAction Tests
  describe('ComplexTransitiveAction', () => {
    const baseAction = new IntransitiveAction(mockVerb, mockActor);
    const complexTransitiveAction = new ComplexTransitiveAction(baseAction, mockItem, mockActor);

    test('constructor initializes baseAction, object, and prepositionalObject correctly', () => {
      expect(complexTransitiveAction.verb).toBe(mockVerb);
      expect(complexTransitiveAction.subject).toBe(mockActor);
      expect(complexTransitiveAction.object).toBe(mockItem);
      expect(complexTransitiveAction.prepositionalObject).toBe(mockActor);
    });
  });
});
