import { ActorState } from "../entities/IActor";
import { IActor } from "../entities/IActor";
import { IActorEffect } from "./IActorEffect";

class ActorEffect implements IActorEffect {
    private _subject: IActor;
    private _addState: Set<ActorState>;
    private _removeState: Set<ActorState>;

    constructor({ subject, addState, removeState }: { subject: IActor; addState: ActorState[]; removeState: ActorState[]; }) {
        this._subject = subject;
        this._addState = new Set(addState);
        this._removeState = new Set(removeState);
    }

    get subject(): IActor {
        return this._subject;
    }

    get addState(): Set<ActorState> {
        return this._addState;
    }

    get removeState(): Set<ActorState> {
        return this._removeState;
    }
}

export default ActorEffect;