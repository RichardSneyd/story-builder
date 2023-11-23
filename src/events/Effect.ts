import { IActor, ActorState } from "../entities/Actor";
import { IItem, ItemState } from "../entities/Item";

interface IEffect {
    get subject(): IActor | IItem;
}

interface IActorEffect extends IEffect {
    get subject(): IActor;
    get addState(): Set<ActorState>;
    get removeState(): Set<ActorState>;
}

interface IItemEffect extends IEffect {
    get subject(): IItem;
    get addState(): Set<ItemState>;
    get removeState(): Set<ItemState>;
}

class ActorEffect implements IActorEffect {
    private _subject: IActor;
    private _addState: Set<ActorState>;
    private _removeState: Set<ActorState>;

    constructor({ subject, addState, removeState }: { subject: IActor, addState: ActorState[], removeState: ActorState[] }) {
        this._subject = subject;
        this._addState = new Set(addState);
        this._removeState = new Set(removeState);
    }

    get subject(): IActor {
        return this._subject;
    }

    get addState(): Set<ActorState> {
        return this._addState;
    }

    get removeState(): Set<ActorState> {
        return this._removeState;
    }
}

class ItemEffect implements IItemEffect {
    private _subject: IItem;
    private _addState: Set<ItemState>;
    private _removeState: Set<ItemState>;

    constructor({ subject, addState, removeState }: { subject: IItem, addState: ItemState[], removeState: ItemState[] }) {
        this._subject = subject;
        this._addState = new Set(addState);
        this._removeState = new Set(removeState);
    }

    get subject(): IItem {
        return this._subject;
    }
    get addState(): Set<ItemState> {
        return this._addState;
    }
    get removeState(): Set<ItemState> {
        return this._removeState;
    }
}

export {ActorEffect, ItemEffect}
export type { IEffect, IActorEffect, IItemEffect}
