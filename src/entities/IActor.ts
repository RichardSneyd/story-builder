import { IItem } from "./IItem";
import { IProfile } from "./IProfile";
import { ISpecies } from "./ISpecies";
import { ActorState, Gender } from "./Actor";

export interface IActor {
    get species(): ISpecies;
    get state(): ActorState[];
    get gender(): Gender;
    get age(): number;
    get profile(): IProfile;
    get items(): IItem[];
}
