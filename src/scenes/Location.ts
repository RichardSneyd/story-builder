import { IActor } from "../entities/Actor";
import { IItem } from "../entities/Item";

class Location {
    private _name: string;
    private _associatedItems: Set<IItem>;
    private _associatedActors: Set<IActor>;

    constructor({name, associatedActors, associatedItems}:{name: string, associatedActors: IActor[], associatedItems: IItem[]}){
        this._name = name;
        this._associatedActors = new Set(associatedActors);
        this._associatedItems = new Set(associatedItems);
    }

    get name(): string { return this._name;}
    get associatedActors(): Set<IActor> { return this._associatedActors;}
    get associatedItems(): Set<IItem> { return this._associatedItems;}
}

export default Location;