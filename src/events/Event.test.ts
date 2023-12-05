import Event from './Event';
import { IAction } from "../actions/IAction";
import { IEffect } from "../effects/IEffect";
import ActorEffect from '../effects/ActorEffect';
import IntransitiveAction from '../actions/IntransitiveAction';
import { IEvent } from './IEvent';
jest.mock('../actions/IntransitiveAction');
jest.mock('../effects/ActorEffect');


describe('Event', () => {
    let mockAction: IAction;
    let mockEffect: IEffect;
    let prevMockEvent: IEvent;
    let nextMockEvent: IEvent;
    let causeMockEvent: IEvent;
    let event: IEvent;

    beforeEach(() => {
        mockAction = new (IntransitiveAction as any)();
        mockEffect = new (ActorEffect as any)();

        prevMockEvent = new Event({ action: mockAction, effects: [mockEffect] });
        nextMockEvent = new Event({ action: mockAction, effects: [mockEffect] });
        causeMockEvent = new Event({ action: mockAction, effects: [mockEffect] });
        event = new Event({ prevEvent: prevMockEvent, nextEvent: nextMockEvent, action: mockAction, cause: causeMockEvent, effects: [mockEffect] });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('constructor initializes properties correctly', () => {
        expect(event.prevEvent).toBe(prevMockEvent);
        expect(event.nextEvent).toBe(nextMockEvent);
        expect(event.action).toBe(mockAction);
        expect(event.cause).toBe(causeMockEvent);
        expect(event.effects).toEqual([mockEffect]);
    });

    // Additional tests for getter methods
    test('prevEvent getter returns the correct value', () => {
        expect(event.prevEvent).toBe(prevMockEvent);
    });

    test('nextEvent getter returns the correct value', () => {
        expect(event.nextEvent).toBe(nextMockEvent);
    });

    test('action getter returns the correct value', () => {
        expect(event.action).toBe(mockAction);
    });

    test('cause getter returns the correct value', () => {
        expect(event.cause).toBe(causeMockEvent);
    });

    test('effects getter returns the correct value', () => {
        expect(event.effects).toEqual([mockEffect]);
    });

});
