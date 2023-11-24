import { IActor } from "../entities/IActor";
import { IScene } from "../scenes/IScene";

export interface IStory {
    get scenes(): IScene[];
    get protagonist(): IActor;
}
