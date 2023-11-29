import { IActor } from "../entities/IActor";
import { IItem } from "../entities/IItem";
import { IEvent } from "../events/Event";
import Location from "./Location";

export interface IScene {
    get location(): Location;
    get events(): IEvent[];
    get actors(): IActor[];
    get items(): IItem[];
}
