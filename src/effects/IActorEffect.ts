import { ActorState } from "../entities/IActor";
import { IActor } from "../entities/IActor";
import { IEffect } from "./IEffect";

export interface IActorEffect extends IEffect {
    get subject(): IActor;
    get addState(): Set<ActorState>;
    get removeState(): Set<ActorState>;
}
