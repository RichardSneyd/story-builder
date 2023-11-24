import { IVerb } from "./IVerb";
import { IAction, SubjectObject } from "./IAction";

/**
 * @description  an intransitive action (actual happening) involving a verb and a subject
 */
class IntransitiveAction implements IAction {
    private _verb: IVerb;
    private _subject: SubjectObject;

    constructor(verb: IVerb, subject: SubjectObject){
        this._verb = verb;
        this._subject = subject;
    }

    get verb(): IVerb {
        return this._verb;
    }

    get subject(): SubjectObject {
        return this._subject;
    }
}

export default IntransitiveAction