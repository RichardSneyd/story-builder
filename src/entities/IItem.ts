import ItemCategory from "./ItemCategory";
import { IMaterial } from "./IMaterial";
import { IPosition } from "./IPosition";

export type ItemState = "clean" | "dirthy" | "broken" | "fixed";

export interface IItem {
    get category(): ItemCategory;
    get material(): IMaterial;
    get state(): ItemState[];
    get name(): string;
    set name(name: string);
    get position(): IPosition;
}
