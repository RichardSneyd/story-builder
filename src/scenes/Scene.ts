import { IActor } from "../entities/IActor";
import { IItem } from "../entities/IItem";
import { IEvent } from "../events/Event";
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
}

export default Scene;