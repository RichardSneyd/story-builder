import Actor from "../entities/Actor";
import { IItem } from "../entities/IItem";
import Item from "../entities/Item";
import { IEvent } from "../events/IEvent";
import Location from "./Location";
import { IActor } from "../entities/IActor";
import SceneFactory from "./SceneFactory";
import Event from "../events/Event";
jest.mock('../actions/ActionFactory');
jest.mock('../events/Event');
jest.mock('../entities/Actor');
jest.mock('../entities/Item');
jest.mock('./Location');

describe('SceneFactory', () => {
    let mockLocation: Location;
    let mockEvents: IEvent[];
    let mockActors: IActor[];
    let mockItems: IItem[];

    beforeEach(() => {
        mockLocation = new (Location as any)();
        mockActors = [new (Actor as any)(), new (Actor as any)()];
        mockEvents = [new (Event as any)(), new (Event as any)()];
        mockItems = [new (Item as any)(), new (Item as any)()];   
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('new method creates a Scene with default actors, events, and items', () => {
        const scene = SceneFactory.new({location: mockLocation});
        expect(scene.actors).toEqual([]);
        expect(scene.events).toEqual([]);
        expect(scene.items).toEqual([]);
    });

    test('new method creates a Scene with specified actors, events, and items', () => {
       
        const scene = SceneFactory.new({location: mockLocation, actors: mockActors, events: mockEvents, items: mockItems});
        expect(scene.actors).toEqual(mockActors);
        expect(scene.events).toEqual(mockEvents);
        expect(scene.items).toEqual(mockItems);
    })
})