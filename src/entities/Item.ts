import Entity from "./Entity";
import ItemCategory from "./ItemCategory";
import { Material } from "./Material";
import { IPosition } from "./IPosition";


class Item extends Entity {
    private _category: ItemCategory;
    private _material: Material;

    constructor({name, position, category, material}:{name: string, position: IPosition, category: ItemCategory, material: Material}) {
        super(name, position)
        this._category = category;
        this._material = material;
    }

    get category(): ItemCategory {
        return this._category;
    }

    get material(): Material {
        return this._material;
    }
}

export default Item;