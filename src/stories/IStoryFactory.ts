import { IBiome } from "../biome/IBiome";
import { IStory } from "./IStory";

interface IStoryFactory {
    fromBiome(biome: IBiome): IStory;
}

export type {IStoryFactory};