import Entity from "./Entity";
import ItemCategory from "./ItemCategory";
import { Material } from "./Material";
import { IPosition } from "./IPosition";

type ItemState = "clean" | "dirthy" | "broken" | "fixed";

interface IItem {
    get category(): ItemCategory;
    get material(): Material;
    get state(): ItemState[];
}

class Item extends Entity implements IItem {
    private _category: ItemCategory;
    private _material: Material;
    private _state: ItemState[];

    constructor({name, position = {horizontal: "left", vertical: "bottom"}, category, material, state = []}:{name: string, position?: IPosition, category: ItemCategory, material: Material, state?: ItemState[]}) {
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

    get material(): Material {
        return this._material;
    }
}

export default Item;
export type {IItem, Item, ItemState}