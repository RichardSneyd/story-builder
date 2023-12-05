import Biome from './Biome';
import Location from '../scenes/Location';
import Actor from '../entities/Actor'; // Assuming Actor is a concrete class
import Item from '../entities/Item'; // Assuming Item is a concrete class
jest.mock('../entities/Actor');
jest.mock('../entities/Item');

describe('Biome', () => {

  const mockActor1 = new (Actor as any)();
  const mockActor2 = new (Actor as any)();
  const mockActor3 = new (Actor as any)();
  const mockActor4 = new (Actor as any)();

  const mockItem1 = new (Item as any)();
  const mockItem2 = new (Item as any)()

  const mockLocation1 = new Location({name: 'mock location 1', associatedActors: [mockActor1, mockActor2], associatedItems: [mockItem1]});
  const mockLocation2 = new Location({name: 'mock location 2', associatedActors: [mockActor3, mockActor4], associatedItems: [mockItem2]});
  const locations = [mockLocation1, mockLocation2];

  const biome = new Biome({ locations });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('locations getter returns the correct values', () => {
    expect(biome.locations).toEqual(new Set(locations));
  });

  test('actors getter returns a merged set of actors from all locations', () => {
    const expectedActors = new Set([...mockLocation1.associatedActors, ...mockLocation2.associatedActors]);
    expect(biome.actors).toEqual(expectedActors);
  });

  test('items getter returns a merged set of items from all locations', () => {
    const expectedItems = new Set([...mockLocation1.associatedItems, ...mockLocation2.associatedItems]);
    expect(biome.items).toEqual(expectedItems);
  });

  test('selectRandomActor returns an actor from a biome', () => {
    const actor = biome.selectRandomActor();
    expect(actor).toBeInstanceOf(Actor);
  });

  test('selectRandomActor does not return the same actor when run several 10 times', () => {
    const actors = new Set();
    for (let i = 0; i < 10; i++) {
      const actor = biome.selectRandomActor();
      actors.add(actor);

    }
    expect(actors.size).toBeGreaterThan(1)
  });

  test('selectRandomItem returns an item from a biome', () => {
    const item = biome.selectRandomItem();
    expect(item).toBeInstanceOf(Item);
  });

  test('selectRandomItem does not return the same item when run several 10 times', () => {
    const items = new Set();
    for (let i = 0; i < 10; i++) {
      const item = biome.selectRandomItem();
      items.add(item);
    }
    expect(items.size).toBeGreaterThan(1);
  })



});
