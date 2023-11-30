import Actor from "../entities/Actor";
import ActorFactory from "./ActorFactory";
import Position from "../entities/Position";
import Species from "../entities/Species";

describe('ActorFactory', () => {
    test('create', () => {
        const actor = ActorFactory.create({name: "test", position: new Position('center', 'bottom'), species: new Species('dog')});
        expect(actor).toBeInstanceOf(Actor);
        expect(actor.name).toBe("test");
        expect(actor.position.horizontal).toBe('center');
        expect(actor.position.vertical).toBe('bottom');
    })
})