import { IActor, ActorState } from "../entities/Actor";
import Item, { ItemState } from "../entities/Item";

interface IEffect {
    get subject(): IActor | Item;
}

interface IActorEffect extends IEffect {
    get subject(): IActor;
    get addState(): ActorState[];
    get removeState(): ActorState[];
}

interface IItemEffect extends IEffect {
    get subject(): Item;
    get addState(): ItemState[];
    get removeState(): ItemState[];
}

class ActorEffect implements IActorEffect {
    private _subject: IActor;
    private _addState: ActorState[];
    private _removeState: ActorState[];

    constructor({ subject, addState, removeState }: { subject: IActor, addState: ActorState[], removeState: ActorState[] }) {
        this._subject = subject;
        this._addState = addState;
        this._removeState = removeState;
    }

    get subject(): IActor {
        return this._subject;
    }

    get addState(): ActorState[] {
        return this._addState;
    }

    get removeState(): ActorState[] {
        return this._removeState;
    }
}

class ItemEffect implements IItemEffect {
    private _subject: Item;
    private _addState: ItemState[];
    private _removeState: ItemState[];

    constructor({ subject, addState, removeState }: { subject: Item, addState: ItemState[], removeState: ItemState[] }) {
        this._subject = subject;
        this._addState = addState;
        this._removeState = removeState;
    }

    get subject(): Item {
        return this._subject;
    }
    get addState(): ItemState[] {
        return this._addState;
    }
    get removeState(): ItemState[] {
        return this._removeState;
    }
}


export type { IEffect, IActorEffect, IItemEffect, ActorEffect, ItemEffect }
