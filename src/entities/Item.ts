import Entity from "./Entity";
import ItemCategory from "./ItemCategory";
import { IMaterial } from "./IMaterial";
import { IPosition } from "./IPosition";
import { IItem, ItemState } from "./IItem";

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