import { SubjectObject } from "./IAction";
import { IComplexTransitiveAction } from "./IComplexTransitiveAction";
import { IVerb } from "./IVerb";
import TransitiveAction from "./TransitiveAction";


class ComplexTransitiveAction extends TransitiveAction implements IComplexTransitiveAction {
    private _prepositionalObject: SubjectObject;

    constructor(verb: IVerb, subject: SubjectObject, object: SubjectObject, prepositionalObject: SubjectObject) {
        super(verb, subject, object);
        this._prepositionalObject = prepositionalObject;
    }

    get prepositionalObject(): SubjectObject {
        return this._prepositionalObject;
    }
}

export default ComplexTransitiveAction;
