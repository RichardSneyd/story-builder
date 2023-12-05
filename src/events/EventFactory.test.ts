import { IAction } from "../actions/IAction";
import IntransitiveAction from "../actions/IntransitiveAction";
import EventFactory from "./EventFactory";
import Event from "./Event";
import { IEvent } from "./IEvent";
import ActorEffect from "../effects/ActorEffect";
jest.mock('../actions/IntransitiveAction');
jest.mock('../effects/ActorEffect');


describe('EventFactory', () => {
    let mockAction: IAction;
    let event: IEvent;


    beforeEach(() => {
        mockAction = new (IntransitiveAction as any)();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should create an event', () => {
        event = EventFactory.new({ action: mockAction });
        expect(event).toBeInstanceOf(Event);
        expect(event.action).toBe(mockAction);
        expect(event.cause).toBeNull();
        expect(event.effects).toEqual([]);
    });

    test('should create an event with cause', () => {
        const cause = new Event({ action: mockAction });
        event = EventFactory.new({ action: mockAction, cause });
        expect(event).toBeInstanceOf(Event);
        expect(event.action).toBe(mockAction);
        expect(event.cause).toBe(cause);
        expect(event.effects).toEqual([]);
    });

    test('should create an event with effects', () => {
        const effects = [new (ActorEffect as any)()];
        event = EventFactory.new({ action: mockAction, effects });
        expect(event).toBeInstanceOf(Event);
        expect(event.action).toBe(mockAction);
        expect(event.cause).toBeNull();
        expect(event.effects).toEqual(effects);
    })
})