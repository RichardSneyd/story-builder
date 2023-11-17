import Item from "../entities/Item";
import Actor from"../entities/Actor";
import { IVerb } from "./Verb";

type SubjectObject = Actor | Item | null;



interface IAction {
    get verb(): IVerb;
    get subject(): SubjectObject;
}

interface ITransitiveAction extends IAction {
    get object(): SubjectObject;
}

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

/**
 * @description  a transitive action (actual happening) involving a verb, a subject and an object
 */
class TransitiveAction implements ITransitiveAction {
    private _baseAction: IntransitiveAction;
    private _object: SubjectObject;

    constructor(baseAction: IntransitiveAction, object: SubjectObject ){
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


export type {IAction, ITransitiveAction, IntransitiveAction, TransitiveAction, SubjectObject}