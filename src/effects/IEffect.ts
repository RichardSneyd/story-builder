import { IActor } from "../entities/IActor";
import { IItem } from "../entities/IItem";

export interface IEffect {
    get subject(): IActor | IItem;
}
