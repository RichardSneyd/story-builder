import Scene from './Scene';
import { IEvent } from '../events/Event';
import { IActor } from '../entities/Actor';
import Item from '../entities/Item';
import Location from './Location';

describe('Scene', () => {
  // Mock implementations for IEvent, IActor, Item, and Location
  const mockEvents: IEvent[] = [];
  const mockActors: IActor[] = [];
  const mockItems: Item[] = [];
  const mockLocation = new Location({name: 'Test Location', associatedActors: [], associatedItems: []});
  const scene = new Scene({ events: mockEvents, actors: mockActors, location: mockLocation, items: mockItems });

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
