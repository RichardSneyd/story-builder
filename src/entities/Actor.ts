import Entity from "./Entity";
import { IPosition } from "./IPosition";

type Mood = "very sad" | "sad" | "happy" | "very happy" | "excited" | "scared" | "confused" | "bored" | "curious" | null;
type Gender = "male" | "female" | null;

class Actor extends Entity {
    private species: string;
    private mood: Mood;
    private gender: Gender;

    constructor({name, position, mood = "happy", species = "human", gender = "male"}:{name: string, position: IPosition, mood: Mood, species: string, gender: Gender}) {
        super(name, position);
        this.mood = mood;
        this.species = species;
        this.gender = gender;
    }
}