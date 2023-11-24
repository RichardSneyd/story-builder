import { IActor } from "../entities/Actor";
import { IItem } from "../entities/Item";
import Location from "../scenes/Location";

interface IBiome {
    get actors(): Set<IActor>;
    get items(): Set<IItem>;
    get locations(): Set<Location>;
}

class Biome implements IBiome {
    private _locations: Set<Location>;

    constructor({locations}: {locations: Location[]}){
        this._locations = new Set (locations);
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
}

export default Biome;
export type {IBiome}