import ActorEffect from "./ActorEffect";
import { ActorState, IActor } from "../entities/IActor";
import ItemEffect from './ItemEffect';
import { IItem, ItemState } from "../entities/IItem";
import Actor from "../entities/Actor";
import Item from "../entities/Item";
jest.mock('../entities/Actor');
jest.mock('../entities/Item');

describe('ActorEffect', () => {
  let mockActor: IActor;
  let addStates: Set<ActorState>; 
  let removeStates: Set<ActorState>;
  let actorEffect: ActorEffect;

  beforeEach(() => {
    mockActor = new (Actor as any)();
    addStates = new Set<ActorState>(['happy', 'excited']);
    removeStates = new Set<ActorState>(['sad', 'tired']);
    actorEffect = new ActorEffect({ subject: mockActor, addState: Array.from(addStates), removeState: Array.from(removeStates) });
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('constructor initializes properties correctly for ActorEffect', () => {
    expect(actorEffect.subject).toBe(mockActor);
    expect(actorEffect.addState).toEqual(addStates);
    expect(actorEffect.removeState).toEqual(removeStates);
  });
});

describe('ItemEffect', () => {
  let mockItem: IItem;
  let addStates: Set<ItemState>;
  let removeStates: Set<ItemState>;
  let itemEffect: ItemEffect;

  beforeEach(() => {
    mockItem = new (Item as any)();
    addStates = new Set<ItemState>(['clean', 'fixed']);
    removeStates = new Set<ItemState>(['broken']);
    itemEffect = new ItemEffect({ subject: mockItem, addState: Array.from(addStates), removeState: Array.from(removeStates) });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('constructor initializes properties correctly for ItemEffect', () => {
    expect(itemEffect.subject).toBe(mockItem);
    expect(itemEffect.addState).toEqual(addStates);
    expect(itemEffect.removeState).toEqual(removeStates);
  });
});
