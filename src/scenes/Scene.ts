import { IActor } from "../entities/Actor";
import Item from "../entities/Item";
import { IEvent } from "../events/Event";
import Location from "./Location";

interface IScene {
    get location(): Location;
    get events(): IEvent[];
    get actors(): IActor[];
    get items(): Item[];
}

class Scene implements IScene {
    private _events: IEvent[];
    private _actors: IActor[];
    private _location: Location;
    private _items: Item[];

    constructor({events, actors, location, items}: {events: IEvent[], actors: IActor[], location: Location, items: Item[]}) {
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

    get items(): Item[] {
        return this._items;
    }

    get location(): Location {
        return this._location;
    }
}

export default Scene;
export type {IScene, Scene}