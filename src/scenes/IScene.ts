import { IActor } from "../entities/IActor";
import { IItem } from "../entities/IItem";
import { IEvent } from "../events/IEvent";
import Location from "./Location";

export interface IScene {
    get location(): Location;
    get events(): IEvent[];
    get actors(): IActor[];
    get items(): IItem[];
    addEvent(event: IEvent): void;
    addActor(actor: IActor): void;
    addItem(item: IItem): void;
    removeEvent(event: IEvent): void;
    removeActor(actor: IActor): void;
    removeItem(item: IItem): void;
    clearEvents(): void;
    clearActors(): void;
    clearItems(): void;
}
