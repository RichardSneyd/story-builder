import Location from './Location';
import { IActor } from "../entities/IActor";
import { IItem } from "../entities/IItem";
import Actor from '../entities/Actor';
import Item from '../entities/Item';

jest.mock('../entities/Item');
jest.mock('../entities/Actor');

describe('Location', () => {
  // Mock implementation for IActor
  const mockActor: IActor = new (Actor as any)();
  
  // Mock implementation for IItem
  const mockItem: IItem = new (Item as any)();

  const mockActors: IActor[] = [mockActor];
  const mockItems: IItem[] = [mockItem];
  const locationName = 'Test Location';
  const location = new Location({ name: locationName, associatedActors: mockActors, associatedItems: mockItems });

  test('constructor initializes properties correctly', () => {
    expect(location.name).toBe(locationName);
    expect(location.associatedActors).toEqual(new Set(mockActors));
    expect(location.associatedItems).toEqual(new Set(mockItems));
  });

  test('name getter returns the correct value', () => {
    expect(location.name).toBe(locationName);
  });

  test('associatedActors getter returns the correct values', () => {
    expect(location.associatedActors).toEqual(new Set(mockActors));
  });

  test('associatedItems getter returns the correct values', () => {
    expect(location.associatedItems).toEqual(new Set(mockItems));
  });
});
