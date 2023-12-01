import Actor from "../entities/Actor";
import { IItem } from "../entities/IItem";
import Item from "../entities/Item";
import Species from "../entities/Species";
import { IEvent } from "../events/IEvent";
import SceneFactory from "./SceneFactory";
import Location from "./Location";
import { IAction } from "../actions/IAction";
import { IVerb, NumberOf, Person } from "../actions/IVerb";

describe('SceneFactory', () => {
    let mockSpecies1: Species;
    let mockActor1: Actor;
    let mockActor2: Actor;
    let mockEvent1: IEvent;
    let mockEvent2: IEvent;
    let mockItem1: IItem;
    let mockItem2: IItem;
    let mockLocation: Location;
    // use jest to create a mock Event

    beforeEach(() => {
        mockSpecies1 = new Species("human");
        mockActor1 = new Actor({name: "Person 1", position: {horizontal:'center', vertical:'bottom'},
        species: mockSpecies1});
        mockActor2 = new Actor({name: "Person 2", position: {horizontal:'center', vertical:'bottom'},
        species: mockSpecies1});
        mockItem1 = new Item({name: "item 1", position: {horizontal:'center', vertical:'bottom'}, category: {name: "toy", pre: "a"}, material: {hardness: "hard", wetness: "wet", name: "stone", temperature: "cold"}, state: ["clean"]});
        mockItem2 = {name: "item 2", position: {horizontal:'left', vertical:'top'}, category: {name: "toy", pre: "a"}, material: {hardness: "hard", wetness: "wet", name: "stone", temperature: "cold"}, state: ["clean"]};
        mockLocation = new Location({name: "Test Location", associatedActors: [mockActor1, mockActor2], associatedItems: [mockItem1, mockItem2]});

        let verb: IVerb = {
            base: "walk",
            infinitive: "",
            presentParticiple: "",
            conjugatePresent: function (person: Person, number: NumberOf): string {
                return `conjugated ${this.presentParticiple} ${person} ${number}`;
            },
            pastTense: "",
            pastParticiple: "",
            futureTense: ""
        }

        let action: IAction = {
            verb: verb,
            subject: null
        }
        
        mockEvent1 = {
            prevEvent: null,
            nextEvent: null,
            action: action,
            cause: null,
            effects: []
        }

        mockEvent2 = {
            prevEvent: mockEvent1,
            nextEvent: null,
            action: action,
            cause: null,
            effects: []
        }
    })

    test('new method creates a Scene with default actors, events, and items', () => {
        const scene = SceneFactory.new({location: mockLocation});
        expect(scene.actors).toEqual([]);
        expect(scene.events).toEqual([]);
        expect(scene.items).toEqual([]);
    });

    test('new method creates a Scene with specified actors, events, and items', () => {
        const mockActors = [mockActor1, mockActor2];
        const mockEvents = [mockEvent1, mockEvent2];
        const mockItems = [mockItem1, mockItem2];   
        const scene = SceneFactory.new({location: mockLocation, actors: mockActors, events: mockEvents, items: mockItems});
        expect(scene.actors).toEqual(mockActors);
        expect(scene.events).toEqual(mockEvents);
        expect(scene.items).toEqual(mockItems);
    })
})