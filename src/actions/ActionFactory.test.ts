import Actor from "../entities/Actor";
import ActionFactory from "./ActionFactory";
import Verb from "./Verb";
jest.mock('./Verb');
jest.mock('../entities/Actor');

describe('ActionFactory', () => {

    test('should create an intransitive action', () => {
        const mockVerb = new (Verb as any)();
        const mockSubject = new (Actor as any)();
        const action = ActionFactory.action(mockVerb, mockSubject);
        expect(action.verb).toBe(mockVerb);
        expect(action.subject).toBe(mockSubject);
    });

    test('should create a transitive action', () => {
        const mockVerb = new (Verb as any)();
        const mockSubject = new (Actor as any)();
        const mockObject = new (Actor as any)();
        const action = ActionFactory.transitiveAction(mockVerb, mockSubject, mockObject);
        expect(action.verb).toBe(mockVerb);
        expect(action.subject).toBe(mockSubject);
        expect(action.object).toBe(mockObject);
    });

    test('should create a complex transitive action', () => {
        const mockVerb = new (Verb as any)();
        const mockSubject = new (Actor as any)();
        const mockObject = new (Actor as any)();
        const mockPrepositionalObject = new (Actor as any)();
        const action = ActionFactory.complexTransitiveAction(mockVerb, mockSubject, mockObject, mockPrepositionalObject);
        expect(action.verb).toBe(mockVerb);
        expect(action.subject).toBe(mockSubject);
        expect(action.object).toBe(mockObject);
        expect(action.prepositionalObject).toBe(mockPrepositionalObject);
    })
})