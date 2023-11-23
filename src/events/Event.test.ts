import Event from './Event';
import { IAction, SubjectObject } from './Action';
import { IEffect } from './Effect';
import { IVerb } from './Verb';
import Actor from '../entities/Actor';
import Species from '../entities/Species';
import Item from '../entities/Item';


describe('Event', () => {

    // Mock IVerb implementation
    const mockVerb: IVerb = {
        // Mock implementations of IVerb methods and getters
        get base() { return 'run'; },
        get infinitive() { return 'to run'; },
        get presentParticiple() { return 'running'; },
        conjugatePresent: () => 'runs', // Simplified mock implementation
        get pastTense() { return 'ran'; },
        get pastParticiple() { return 'run'; },
        get futureTense() { return 'will run'; }
    };

    // Mock SubjectObject, which can be either an Actor or an Item
    const mockSubject: SubjectObject = new Actor({ name: "Jake", position: { horizontal: "center", vertical: "bottom" }, species: new Species("human") });
    // or, if an Item is more appropriate:
    // const mockSubject: SubjectObject = new Item(/* ... Item properties ... */);

    // Creating the mock IAction object
    const mockAction: IAction = {
        get verb() { return mockVerb; },
        get subject() { return mockSubject; }
    };

    const mockEffect: IEffect = {
        get subject() { return new Item({ name: "bar", category: { name: "toy", pre: "a" }, material: { hardness: "hard", wetness: "wet", name: "stone", temperature: "cold" } })
    }
};

const prevMockEvent = new Event({ action: mockAction, effects: [mockEffect] });
const nextMockEvent = new Event({ action: mockAction, effects: [mockEffect] });
const causeMockEvent = new Event({ action: mockAction, effects: [mockEffect] });
const event = new Event({ prevEvent: prevMockEvent, nextEvent: nextMockEvent, action: mockAction, cause: causeMockEvent, effects: [mockEffect] });

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
