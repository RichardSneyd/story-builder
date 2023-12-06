import Actor from "../entities/Actor";
import { IActor } from "../entities/IActor";
import { ISpecies } from "../entities/ISpecies";
import Species from "../entities/Species";
import ActionDescriber from "./ActionDescriber";
import { IVerb } from "./IVerb";
import IntransitiveAction from "./IntransitiveAction";
import Verb from "./Verb";


describe('ActionDescriber', () => {
    let mockIntransitiveAction: IntransitiveAction;
    // let mockTransitiveAction: TransitiveAction;
    // let mockComplexTransitiveAction: ComplexTransitiveAction;
    let mockActor: IActor;
    let mockIrregularVerb: IVerb;
    let mockSpecies: ISpecies;

    beforeEach(() => {
        mockIrregularVerb = new Verb("go", "go", "went", "gone", {
            firstPerson_singular: "go",
            firstPerson_plural: "go",
            secondPerson_singular: "go",
            secondPerson_plural: "go",
            thirdPerson_singular: "goes",
            thirdPerson_plural: "go",
        });
        mockSpecies = new Species("cat");
        mockActor = new Actor({name: "Jack", position: {horizontal: 'left', vertical: 'bottom'}, species: mockSpecies});
    })

    test('describeIntransitive returns correct action description for various tenses and persons', () => {
        mockIntransitiveAction = new IntransitiveAction(mockIrregularVerb, mockActor);
        let action = ActionDescriber.describe(mockIntransitiveAction, "presentTense", "first");
        expect(action).toBe(`"I go", says ${mockActor.name}`);
        action = ActionDescriber.describe(mockIntransitiveAction, "presentTense", "second");
        expect(action).toBe(`"You go", someone says to ${mockActor.name}`);
        action = ActionDescriber.describe(mockIntransitiveAction, "presentTense", "third");
        expect(action).toBe(`${mockActor.name} ${mockIrregularVerb.presentTense("third", "singular")}`);
    })

})