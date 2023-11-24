import { SubjectObject } from "./IAction";
import { IComplexTransitiveAction } from "./IComplexTransitiveAction";
import IntransitiveAction from "./IntransitiveAction";
import TransitiveAction from "./TransitiveAction";


class ComplexTransitiveAction extends TransitiveAction implements IComplexTransitiveAction {
    private _prepositionalObject: SubjectObject;

    constructor(baseAction: IntransitiveAction, object: SubjectObject, prepositionalObject: SubjectObject) {
        super(baseAction, object);
        this._prepositionalObject = prepositionalObject;
    }

    get prepositionalObject(): SubjectObject {
        return this._prepositionalObject;
    }
}

export default ComplexTransitiveAction;
