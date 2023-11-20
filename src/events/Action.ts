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

interface IComplexTransitiveAction extends ITransitiveAction {
    get prepositionalObject(): SubjectObject;
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

/**
 * @description a complex transitive action (actual happening) involving a verb, a subject, an object, and a prepositional object
 */
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


export type {IAction, ITransitiveAction, IComplexTransitiveAction, IntransitiveAction, TransitiveAction, ComplexTransitiveAction, SubjectObject}