import { IActor } from "../entities/IActor";
import Item from "../entities/Item";
import { IEvent } from "../events/Event";
import Location from "./Location";

export interface IScene {
    get location(): Location;
    get events(): IEvent[];
    get actors(): IActor[];
    get items(): Item[];
}
