import Biome from "./Biome";
import Location from "../scenes/Location";
import { IBiome } from "./IBiome";

class BiomeFactory {

    new({locations = []}: {locations?: Location[]}): Biome {
        return new Biome({locations: locations})
    }

    merge(...biomes: IBiome[]) : Biome {
        let allLocations: Location[] = [...biomes].flatMap(biome => [...biome.locations]);
        return new Biome({locations: allLocations});
    }
}

export default BiomeFactory;