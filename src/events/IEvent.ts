import { IComplexTransitiveAction } from "../actions/IComplexTransitiveAction";
import { ITransitiveAction } from "../actions/ITransitiveAction";
import { IAction } from "../actions/IAction";
import { IItemEffect } from "../effects/IItemEffect";
import { IActorEffect } from "../effects/IActorEffect";
import { IEffect } from "../effects/IEffect";

export type AnyAction = IAction | ITransitiveAction | IComplexTransitiveAction;
export type AnyEffect = IEffect | IActorEffect | IItemEffect;
export interface IEvent {
    get prevEvent(): IEvent | null;
    get nextEvent(): IEvent | null;
    get action(): AnyAction;
    get cause(): IEvent | null;
    get effects(): AnyEffect[];
}
