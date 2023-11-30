import { IActor } from "../entities/IActor";
import { IItem } from "../entities/IItem";
import { IEvent } from "../events/IEvent";
import { IScene } from "./IScene";
import Location from "./Location";

class Scene implements IScene {
    private _events: IEvent[];
    private _actors: IActor[]; // order could represent temporal appearance in generated text??
    private _location: Location;
    private _items: IItem[];

    constructor({events = [], actors = [], location, items = []}: {events?: IEvent[], actors?: IActor[], location: Location, items?: IItem[]}) {
        this._events = events;
        this._actors = actors;
        this._items = items;
        this._location = location;
    }

    get events(): IEvent[] {
        return this._events;
    }

    get actors(): IActor[] {
        return this._actors;
    }

    get items(): IItem[] {
        return this._items;
    }

    get location(): Location {
        return this._location;
    }

    addEvent(event: IEvent): void {
        this._events.push(event);
    }

    addActor(actor: IActor): void {
        this._actors.push(actor);
    }

    addItem(item: IItem): void {
        this._items.push(item);
    }

    removeEvent(event: IEvent): void {
        const index = this._events.indexOf(event);
        if (index !== -1) {
            this._events.splice(index, 1);
        }
    }

    removeActor(actor: IActor): void {
        const index = this._actors.indexOf(actor);
        if (index !== -1) {
            this._actors.splice(index, 1);
        }
    }

    removeItem(item: IItem): void {
        const index = this._items.indexOf(item);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }

    clearEvents(): void {
        this._events = [];
    }

    clearActors(): void {
        this._actors = [];
    }

    clearItems(): void {
        this._items = [];
    }
}

export default Scene;