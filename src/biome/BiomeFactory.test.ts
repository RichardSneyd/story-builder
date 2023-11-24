import BiomeFactory from './BiomeFactory';
import Biome from './Biome';
import Location from '../scenes/Location';

describe('BiomeFactory', () => {
  const factory = new BiomeFactory();
  const location1 = new Location({name: "the beach"});
  const location2 = new Location({name: "the kitchen"});
  const location3 = new Location({name: "the backyard"});
  const location4 = new Location({name: "the garage"});

  test('new method creates a Biome with specified locations', () => {
    const mockLocations = [location1, location2];
    const biome = factory.new({ locations: mockLocations });
    
    expect(biome).toBeInstanceOf(Biome);
    expect(biome.locations).toEqual(new Set(mockLocations));
  });

  test('merge method combines locations from multiple Biomes', () => {
    const locationSet1 = [location1, location2];
    const locationSet2 = [location3, location4];
    const biome1 = new Biome({ locations: locationSet1 });
    const biome2 = new Biome({ locations: locationSet2 });

    const mergedBiome = factory.merge(biome1, biome2);

    expect(mergedBiome).toBeInstanceOf(Biome);
    expect(mergedBiome.locations).toEqual(new Set([...locationSet1, ...locationSet2]));
  });
});