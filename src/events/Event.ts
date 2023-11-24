import { IComplexTransitiveAction } from "./IComplexTransitiveAction";
import { ITransitiveAction } from "./ITransitiveAction";
import { IAction } from "./IAction";
import { IActorEffect, IEffect, IItemEffect } from "./Effect";

type AnyAction = IAction | ITransitiveAction | IComplexTransitiveAction;
type AnyEffect = IEffect | IActorEffect | IItemEffect;

interface IEvent {
    get prevEvent(): IEvent | null;
    get nextEvent(): IEvent | null;
    get action(): AnyAction;
    get cause(): IEvent | null;
    get effects(): AnyEffect[];
}

class Event implements IEvent {
    private _prevEvent: IEvent | null;
    private _nextEvent: IEvent | null;
    private _action: AnyAction;
    private _cause: IEvent | null;
    private _effects: AnyEffect[];

    constructor({ prevEvent = null, nextEvent = null, action, cause = null, effects = [] }: { prevEvent?: IEvent | null, nextEvent?: IEvent | null, action: AnyAction, cause?: IEvent | null, effects?: AnyEffect[] }) {
        this._prevEvent = prevEvent;
        this._nextEvent = nextEvent;
        this._action = action;
        this._cause = cause;
        this._effects = effects;
    }

    get effects(): IEffect[] {
        return this._effects;
    }

    get prevEvent(): IEvent | null {
        return this._prevEvent;
    }

    get nextEvent(): IEvent | null {
        return this._nextEvent;
    }

    get action(): AnyAction {
        return this._action;
    }

    get cause(): IEvent | null {
        return this._cause;
    }

}

export default Event;
export type { IEvent, Event }