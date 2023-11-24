import { IActor } from "../entities/IActor";
import { IItem } from "../entities/IItem";
import Location from "../scenes/Location";
import { IBiome } from "./IBiome";

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