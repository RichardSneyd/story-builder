import Entity from "./Entity";
import ItemCategory from "./ItemCategory";
import { Material } from "./Material";
import { IPosition } from "./IPosition";


class Item extends Entity {
    private category: ItemCategory;
    private material: Material;

    constructor({name, position, category, material}:{name: string, position: IPosition, category: ItemCategory, material: Material}) {
        super(name, position)
        this.category = category;
        this.material = material;
    }
}

export default Item;