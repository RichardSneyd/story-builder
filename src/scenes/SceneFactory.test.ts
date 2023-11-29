import Actor from "../entities/Actor";
import { IItem } from "../entities/IItem";
import Item from "../entities/Item";
import Species from "../entities/Species";
import { IEvent } from "../events/Event";
import SceneFactory from "./SceneFactory";
import Location from "./Location";

describe('SceneFactory', () => {
    let mockSpecies1: Species;
    let mockActor1: Actor;
    let mockActor2: Actor;
    let mockEvent1: IEvent;
    let mockEvent2: IEvent;
    let mockItem1: IItem;
    let mockItem2: IItem;
    let mockLocation: Location;

    beforeEach(() => {
        mockSpecies1 = new Species("human");
        mockActor1 = new Actor({name: "Person 1", position: {horizontal:'center', vertical:'bottom'},
        species: mockSpecies1});
        mockActor2 = new Actor({name: "Person 2", position: {horizontal:'center', vertical:'bottom'},
        species: mockSpecies1});
        mockItem1 = new Item({name: "item 1", position: {horizontal:'center', vertical:'bottom'}, category: {name: "toy", pre: "a"}, material: {hardness: "hard", wetness: "wet", name: "stone", temperature: "cold"}, state: ["clean"]});
        mockItem2 = {name: "item 2", position: {horizontal:'left', vertical:'top'}, category: {name: "toy", pre: "a"}, material: {hardness: "hard", wetness: "wet", name: "stone", temperature: "cold"}, state: ["clean"]};
        mockLocation = new Location({name: "Test Location", associatedActors: [mockActor1, mockActor2], associatedItems: [mockItem1, mockItem2]});
    })

    test('new method creates a Scene with specified actors, events, and items', () => {
        const mockActors = [mockActor1, mockActor2];
        const mockEvents = [mockEvent1, mockEvent2];
        const mockItems = [mockItem1, mockItem2];   
        const scene = SceneFactory.new({location: mockLocation, actors: mockActors, events: mockEvents, items: mockItems});
        expect(scene.actors).toEqual(mockActors);
    })
})