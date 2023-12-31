import Entity from "./Entity";
import { ActorState, Gender, IActor } from "./IActor";
import { IPosition } from "./IPosition";
import Item from "./Item";
import Profile from "./Profile";
import { IProfile } from "./IProfile";
import { ISpecies } from "./ISpecies";



class Actor extends Entity implements IActor {
    private _species: ISpecies;
    private _state: ActorState[];
    private _gender: Gender;
    private _age: number;
    private _profile: IProfile;
    private _items: Item[];

    constructor({name, position, state = ["happy"], gender = "male", age = 9, profile = new Profile({}), items = [], species}:{name: string, position: IPosition, state?: ActorState[], species: ISpecies, gender?: Gender, age?: number, profile?: IProfile, items?: Item[]}) {
        super(name, position);
        this._state = state;
        this._species = species;
        this._gender = gender;
        this._age = age;
        this._profile = profile;
        this._items = items;
    }

    get species(): ISpecies {
        return this._species;
    }

    get state(): ActorState[] {
        return this._state;
    }

    get gender(): Gender {
        return this._gender;
    }

    get age(): number {
        return this._age;
    }

    get profile(): IProfile {
        return this._profile;
    }

    get items(): Item[] {
        return this._items;
    }
  }

  export default Actor;