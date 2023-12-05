import Scene from './Scene';
import { IEvent } from "../events/IEvent";
import { IActor } from "../entities/IActor";
import Item from '../entities/Item';
import Location from './Location';
import Actor from '../entities/Actor';
import { IScene } from './IScene';
import Event from '../events/Event';
jest.mock('../entities/Item');
jest.mock('./Location');
jest.mock('../entities/Actor');
jest.mock('../events/Event');

describe('Scene', () => {
  // Mock implementations for IEvent, IActor, Item, and Location
  let mockEvents: IEvent[];
  let mockActors: IActor[];
  let mockItems: Item[];
  let mockLocation: Location;
  let scene: IScene;

  beforeEach(() => {
    mockEvents = [new (Event as any)(), new (Event as any)()];
    mockItems = [new (Item as any)(), new (Item as any)()];
    mockActors = [new (Actor as any)(), new (Actor as any)()];
    mockLocation = new (Location as any)();
    scene = new Scene({ events: mockEvents, actors: mockActors, location: mockLocation, items: mockItems });
  })

  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('constructor initializes properties correctly', () => {
    expect(scene.events).toEqual(mockEvents);
    expect(scene.actors).toEqual(mockActors);
    expect(scene.items).toEqual(mockItems);
    expect(scene.location).toBe(mockLocation);
  });

  test('events getter returns the correct values', () => {
    expect(scene.events).toEqual(mockEvents);
  });

  test('actors getter returns the correct values', () => {
    expect(scene.actors).toEqual(mockActors);
  });

  test('items getter returns the correct values', () => {
    expect(scene.items).toEqual(mockItems);
  });

  test('location getter returns the correct value', () => {
    expect(scene.location).toBe(mockLocation);
  });

});
