import { IVerb } from "./IVerb";
import { SubjectObject } from "./IAction";
import { ITransitiveAction } from "./ITransitiveAction";
import IntransitiveAction from "./IntransitiveAction";


/**
 * @description  a transitive action (actual happening) involving a verb, a subject and an object
 */
class TransitiveAction implements ITransitiveAction {
    private _baseAction: IntransitiveAction;
    private _object: SubjectObject;

    constructor(baseAction: IntransitiveAction, object: SubjectObject) {
        this._baseAction = baseAction;
        this._object = object;
    }

    get verb(): IVerb {
        return this._baseAction.verb;
    }

    get subject(): SubjectObject {
        return this._baseAction.subject;
    }

    get object(): SubjectObject {
        return this._object;
    }

}

export default TransitiveAction;
