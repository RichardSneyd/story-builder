import { IItem } from "./IItem";
import { IProfile } from "./IProfile";
import { ISpecies } from "./ISpecies";

export type ActorState = "very sad" | "sad" | "happy" | "very happy" | "excited" | "scared" | "confused" | "bored" | "curious" | "tired" | "sorry" | "angry" | "lonely";
export type Gender = "male" | "female" | null;

export interface IActor {
    get species(): ISpecies;
    get state(): ActorState[];
    get gender(): Gender;
    get age(): number;
    get profile(): IProfile;
    get items(): IItem[];
}
