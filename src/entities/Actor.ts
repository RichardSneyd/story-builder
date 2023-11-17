import Entity from "./Entity";
import { IPosition } from "./IPosition";
import Item from "./Item";
import Profile from "./Profile";
import Species, { ISpecies } from "./Species";

type Mood = "very sad" | "sad" | "happy" | "very happy" | "excited" | "scared" | "confused" | "bored" | "curious" | "tired" | "sorry" | "angry" | "lonely" | null;
type Gender = "male" | "female" | null;

class Actor extends Entity {
    private _species: ISpecies;
    private _mood: Mood;
    private _gender: Gender;
    private _age: number;
    private _profile: Profile;
    private _items: Item[];

    constructor({name, position, mood = "happy", gender = "male", age = 9, profile = new Profile({}), items = [], species = new Species("dog")}:{name: string, position: IPosition, mood: Mood, species: ISpecies, gender: Gender, age: number, profile: Profile, items: Item[]}) {
        super(name, position);
        this._mood = mood;
        this._species = species;
        this._gender = gender;
        this._age = age;
        this._profile = profile;
        this._items = items;
    }

    get species(): ISpecies {
        return this._species;
    }

    get mood(): Mood {
        return this._mood;
    }

    get gender(): Gender {
        return this._gender;
    }

    get age(): number {
        return this._age;
    }

    get profile(): Profile {
        return this._profile;
    }

    get items(): Item[] {
        return this._items;
    }
  }

  export default Actor;
  export type {Actor, Mood, Gender}