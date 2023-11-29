import { IActor } from "../entities/IActor";
import { IItem } from "../entities/IItem";
import Location from "../scenes/Location";
import IBiome  from "./IBiome";


class Biome implements IBiome {
    private _locations: Set<Location>;

    constructor({ locations }: { locations: Location[] }) {
        this._locations = new Set(locations);
    }

    get locations(): Set<Location> {
        return this._locations;
    }

    get actors(): Set<IActor> {
        return new Set([...this._locations].flatMap(location => [...location.associatedActors]));
    }

    get items(): Set<IItem> {
        return new Set([...this._locations].flatMap(location => [...location.associatedItems]));
    }

    // a method that selects and returns a random actor from a biome
    public selectRandomActor(): IActor {
        const actors = [...this.actors];
        return actors[Math.floor(Math.random() * actors.length)];
    }

    // a method that selects and returns a random item from a biome
    public selectRandomItem(): IItem {
        const items = [...this.items];
        return items[Math.floor(Math.random() * items.length)];
    }

    public selectRandomLocation(): Location {
        const locations = [...this.locations];
        return locations[Math.floor(Math.random() * locations.length)];
    }

}

export default Biome;