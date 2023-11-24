import { IActor } from "../entities/IActor";
import { IScene } from "../scenes/IScene";
import { IStory } from "./IStory";

class Story implements IStory {
    private _scenes: IScene[];
    private _protagonist: IActor;
    // goal/conflit/resolution??

    constructor({protagonist, scenes = []}:{protagonist: IActor, scenes?: IScene[]}) {
        this._scenes = scenes;
        this._protagonist = protagonist;
    }

    get scenes(): IScene[] {
        return this._scenes;
    }

    get protagonist(): IActor {
        return this._protagonist;
    }
}

export default Story;