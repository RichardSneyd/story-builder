import { IVerb } from "./IVerb";
import { SubjectObject } from "./IAction";
import { ITransitiveAction } from "./ITransitiveAction";
import IntransitiveAction from "./IntransitiveAction";


/**
 * @description  a transitive action (actual happening) involving a verb, a subject and an object
 */
class TransitiveAction extends IntransitiveAction implements ITransitiveAction {
    private _object: SubjectObject;

    constructor(verb: IVerb, subject: SubjectObject, object: SubjectObject) {
        super(verb, subject)
        this._object = object;
    }

    get object(): SubjectObject {
        return this._object;
    }

}

export default TransitiveAction;
