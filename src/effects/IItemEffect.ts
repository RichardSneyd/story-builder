import { IItem, ItemState } from "../entities/IItem";
import { IEffect } from "./IEffect";

export interface IItemEffect extends IEffect {
    get subject(): IItem;
    get addState(): Set<ItemState>;
    get removeState(): Set<ItemState>;
}
