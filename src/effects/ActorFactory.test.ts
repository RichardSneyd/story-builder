import Actor from "../entities/Actor";
import ActorFactory from "./ActorFactory";
import Position from "../entities/Position";
import Species from "../entities/Species";
jest.mock('../entities/Position');
jest.mock('../entities/Species');

describe('ActorFactory', () => {
    test('create', () => {
        const position = new (Position as any)();
        const species = new (Species as any)();
        const actor = ActorFactory.create({name: "test", position: position, species: species});
        expect(actor).toBeInstanceOf(Actor);
        expect(actor.name).toBe("test");
        expect(actor.position).toBe(position);
        expect(actor.species).toBe(species);
    })
})