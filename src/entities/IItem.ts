import ItemCategory from "./ItemCategory";
import { IMaterial } from "./IMaterial";
import IEntity from "./IEntity";

export type ItemState = "clean" | "dirthy" | "broken" | "fixed";

export interface IItem extends IEntity {
    get category(): ItemCategory;
    get material(): IMaterial;
    get state(): ItemState[];
}
