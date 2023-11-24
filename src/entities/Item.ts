import Entity from "./Entity";
import ItemCategory from "./ItemCategory";
import { IMaterial } from "./Material";
import { IPosition } from "./IPosition";

type ItemState = "clean" | "dirthy" | "broken" | "fixed";

interface IItem {
    get category(): ItemCategory;
    get material(): IMaterial;
    get state(): ItemState[];
    get name(): string;
    set name(name: string);
    get position(): IPosition;
}

class Item extends Entity implements IItem {
    private _category: ItemCategory;
    private _material: IMaterial;
    private _state: ItemState[];

    constructor({name, position = {horizontal: "left", vertical: "bottom"}, category, material, state = []}:{name: string, position?: IPosition, category: ItemCategory, material: IMaterial, state?: ItemState[]}) {
        super(name, position)
        this._category = category;
        this._material = material;
        this._state = state;
    }

    get state(): ItemState[] {
        return this._state;
    }

    get category(): ItemCategory {
        return this._category;
    }

    get material(): IMaterial {
        return this._material;
    }
}

export default Item;
export type {IItem, Item, ItemState}