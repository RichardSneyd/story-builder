import { IActor } from "../entities/Actor";
import { IItem } from "../entities/Item";

class Location {
    private _name: string;
    private _associatedItems: IItem[];
    private _associatedActors: IActor[];

    constructor({name, associatedActors, associatedItems}:{name: string, associatedActors: IActor[], associatedItems: IItem[]}){
        this._name = name;
        this._associatedActors = associatedActors;
        this._associatedItems = associatedItems;
    }

    get name(): string { return this._name;}
    get associatedActors(): IActor[] { return this._associatedActors;}
    get associatedItems(): IItem[] { return this._associatedItems;}
}

export default Location;