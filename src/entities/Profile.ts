import Item from "./Item";

type Trait = "confident" | "outgoing" | "chatty" | "quiet" | "playful" | "serious" | "cheeky" | "nice" | "sweet" | "nasty" | "strong" | "brave" | "smart" | "stupid";

class Profile {
    private _traits: Trait[];
    private _likedItems: Item[];
    private _dislikedItems: Item[];
    private _likedTraits: Trait[];
    private _dislikedTraits: Trait[];

    constructor({traits = ["nice"], likedItems = [], dislikedItems = [], likedTraits = [], dislikedTraits = []}: {traits?: Trait[], likedItems?: Item[], dislikedItems?: Item[], likedTraits?: Trait[], dislikedTraits?: Trait[]}) {
        this._traits = traits;
        this._likedItems = likedItems;
        this._dislikedItems = dislikedItems;
        this._likedTraits = likedTraits;
        this._dislikedTraits = dislikedTraits;
    }

    get traits(): Trait[] {
        return this._traits;
    }

    get likedItems(): Item[] {
        return this._likedItems;
    }

    get dislikedItems(): Item[] {
        return this._dislikedItems;
    }

    get likedTraits(): Trait[] {
        return this._likedTraits;
    }

    get dislikedTraits(): Trait[] {
        return this._dislikedTraits;
    }
 
  }

export default Profile;