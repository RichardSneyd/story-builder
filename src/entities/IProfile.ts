import { IItem } from "./IItem";

export type Trait = "confident" | "outgoing" | "chatty" | "quiet" | "playful" | "serious" | "cheeky" | "nice" | "sweet" | "nasty" | "strong" | "brave" | "smart" | "stupid";

export interface IProfile {
    traits: Set<Trait>;
    likedItems: Set<IItem>;
    dislikedItems: Set<IItem>;
    likedTraits: Set<Trait>;
    dislikedTraits: Set<Trait>;
}
