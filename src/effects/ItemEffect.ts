import { IItem, ItemState } from "../entities/IItem";
import { IItemEffect } from "./IItemEffect";

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

export default ItemEffect
