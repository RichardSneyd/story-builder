import Biome from './Biome';
import Location from '../scenes/Location';
import Actor from '../entities/Actor'; // Assuming Actor is a concrete class
import Item from '../entities/Item'; // Assuming Item is a concrete class
import Species from '../entities/Species';
import Position from '../entities/Position';
import ItemCategory from '../entities/ItemCategory';
import Material, { IMaterial } from '../entities/Material';

describe('Biome', () => {
  // Create mock Locations with Actors and Items
  const human = new Species("human");
//   const dog = new Species("dog");

  const bottomLeft = new Position("left", "bottom");
  const bottomRight = new Position("right", "bottom");

  const richard = new Actor({name: "Person 1", species: human, position: bottomLeft});
  const jen = new Actor({name: "Person 2", species: human, position: bottomRight});
  const dar = new Actor({name: "Person 3", species: human, position: bottomRight});
  const scar = new Actor({name: "Person 4", species: human, position: bottomRight});

  const toy: ItemCategory = {name: "toy", pre: "a"}; 
  const appliance: ItemCategory = {name: "appliance", pre: "an"}

  const plastic: IMaterial = new Material({name: "plastic", hardness: "soft"})

  const ball = new Item({category: toy, name: "ball", material: plastic});
  const cooker = new Item({name: "cooker", category: appliance, material: plastic})

  const beach = new Location({name: 'the beach', associatedActors: [richard, jen], associatedItems: [ball]});
  const kitchen = new Location({name: 'the kitchen', associatedActors: [dar, scar], associatedItems: [cooker]});
  const locations = [beach, kitchen];
  
  const biome = new Biome({ locations });

  test('locations getter returns the correct values', () => {
    expect(biome.locations).toEqual(new Set(locations));
  });

  test('actors getter returns a merged set of actors from all locations', () => {
    const expectedActors = new Set([...beach.associatedActors, ...kitchen.associatedActors]);
    expect(biome.actors).toEqual(expectedActors);
  });

  test('items getter returns a merged set of items from all locations', () => {
    const expectedItems = new Set([...beach.associatedItems, ...kitchen.associatedItems]);
    expect(biome.items).toEqual(expectedItems);
  });
});
