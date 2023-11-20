import { IActor } from "../entities/Actor";
import Item from "../entities/Item";

class Location {
    private _name: string;
    private _associatedItems: Item[];
    private _associatedActors: IActor[];

    constructor({name, associatedActors, associatedItems}:{name: string, associatedActors: IActor[], associatedItems: Item[]}){
        this._name = name;
        this._associatedActors = associatedActors;
        this._associatedItems = associatedItems;
    }

    get name(): string { return this._name;}
    get associatedActors(): IActor[] { return this._associatedActors;}
    get associatedItems(): Item[] { return this._associatedItems;}
}

export default Location;