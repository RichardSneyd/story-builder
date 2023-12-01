import { IAction, SubjectObject } from "../actions/IAction";
import { IVerb } from "../actions/IVerb";
import IntransitiveAction from "../actions/IntransitiveAction";
import Verb from "../actions/Verb";
import Actor from "../entities/Actor";
import { ISpecies } from "../entities/ISpecies";
import Species from "../entities/Species";
import EventFactory from "./EventFactory";
import Event from "./Event";

describe('EventFactory', () => {
    let mockVerb: IVerb;
    let mockSpecies: ISpecies;
    let mockSubject: SubjectObject;
    let mockAction: IAction;

    beforeEach(() => {
        mockVerb =  new Verb('walk', 'walking', 'walked', 'walked');
        mockSpecies = new Species('mockSpecies');
        mockSubject = new Actor({ name: 'mockActor 1', position: {horizontal: 'center', vertical: 'top'}, species: mockSpecies});
        mockAction = new IntransitiveAction(mockVerb, mockSubject);
    })

    test('should create an event', () => {
        const event = EventFactory.new({ action: mockAction });
        expect(event).toBeInstanceOf(Event);
        expect(event.action).toBe(mockAction);
        expect(event.cause).toBeNull();
    })
})