import ComplexTransitiveAction from "./ComplexTransitiveAction";
import { IActor } from "../entities/IActor";
import { IItem } from "../entities/IItem";
import { IVerb } from "./IVerb";
import IntransitiveAction from "./IntransitiveAction";
import TransitiveAction from "./TransitiveAction";
import Verb from "./Verb";
import Actor from "../entities/Actor";
import Item from "../entities/Item";
jest.mock('./Verb', () => {
  return {
    __esmodule: true,
    default: jest.fn().mockImplementation(() => ({
      infinitive: 'to go',
      presentParticiple: 'going',
      pastTense: 'went',
      pastParticiple: 'gone',
      conjugatePresent: jest.fn((person: string, number: string) => {
        return `${person} ${number}`;
      }),
    }))
  }
});
jest.mock('../entities/Actor');
jest.mock('../entities/Item');


describe('Action Classes', () => {
  let mockVerb: IVerb;
  let mockActor: IActor;
  let mockItem: IItem;
  
  beforeEach(() => {
    mockVerb = new (Verb as any)();
    mockActor = new (Actor as any)();
    mockItem = new (Item as any)();
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  // IntransitiveAction Tests
  describe('IntransitiveAction', () => {
    
    test('constructor initializes verb and subject correctly', () => {
      const intransitiveAction = new IntransitiveAction(mockVerb, mockActor);
      expect(intransitiveAction.verb).toBe(mockVerb);
      expect(intransitiveAction.subject).toBe(mockActor);
    });
  });

  // TransitiveAction Tests
  describe('TransitiveAction', () => {
    
    test('constructor initializes baseAction and object correctly', () => {
      const transitiveAction = new TransitiveAction(mockVerb, mockActor, mockItem);
      expect(transitiveAction.verb).toBe(mockVerb);
      expect(transitiveAction.subject).toBe(mockActor);
      expect(transitiveAction.object).toBe(mockItem);
    });
  });

  // ComplexTransitiveAction Tests
  describe('ComplexTransitiveAction', () => {
    
    test('constructor initializes baseAction, object, and prepositionalObject correctly', () => {
      const complexTransitiveAction = new ComplexTransitiveAction(mockVerb, mockActor, mockItem, mockActor);
      expect(complexTransitiveAction.verb).toBe(mockVerb);
      expect(complexTransitiveAction.subject).toBe(mockActor);
      expect(complexTransitiveAction.object).toBe(mockItem);
      expect(complexTransitiveAction.prepositionalObject).toBe(mockActor);
    });
  });
});
