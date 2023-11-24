import { IItem } from "./IItem";
import { IProfile, Trait } from "./IProfile";

class Profile implements IProfile {
    private _traits: Set<Trait>;
    private _likedItems: Set<IItem>;
    private _dislikedItems: Set<IItem>;
    private _likedTraits: Set<Trait>;
    private _dislikedTraits: Set<Trait>;

    constructor({traits = ["nice"], likedItems = [], dislikedItems = [], likedTraits = [], dislikedTraits = []}: {traits?: Trait[], likedItems?: IItem[], dislikedItems?: IItem[], likedTraits?: Trait[], dislikedTraits?: Trait[]}) {
        this._traits = new Set(traits);
        this._likedItems = new Set(likedItems);
        this._dislikedItems = new Set(dislikedItems);
        this._likedTraits = new Set(likedTraits);
        this._dislikedTraits = new Set(dislikedTraits);
    }

    get traits(): Set<Trait> {
        return this._traits;
    }

    get likedItems(): Set<IItem> {
        return this._likedItems;
    }

    get dislikedItems(): Set<IItem> {
        return this._dislikedItems;
    }

    get likedTraits(): Set<Trait> {
        return this._likedTraits;
    }

    get dislikedTraits(): Set<Trait> {
        return this._dislikedTraits;
    }
}

export default Profile;
export type {Trait, IProfile}
