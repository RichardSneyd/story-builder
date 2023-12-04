import ComplexTransitiveAction from "./ComplexTransitiveAction";
import { IAction, SubjectObject } from "./IAction";
import { IComplexTransitiveAction } from "./IComplexTransitiveAction";
import { ITransitiveAction } from "./ITransitiveAction";
import { IVerb } from "./IVerb";
import IntransitiveAction from "./IntransitiveAction";
import TransitiveAction from "./TransitiveAction";

class ActionFactory {
    public static action(verb: IVerb, subject: SubjectObject): IAction {
        const action = new IntransitiveAction(verb, subject);
        return action;
    }

    public static transitiveAction(verb: IVerb, subject: SubjectObject, object: SubjectObject): ITransitiveAction {
        const action = new TransitiveAction(verb, subject, object);
        return action;
    }

    public static complexTransitiveAction(verb: IVerb, subject: SubjectObject, object: SubjectObject, prepositionalObject: SubjectObject): IComplexTransitiveAction {
        const action = new ComplexTransitiveAction(verb, subject, object, prepositionalObject);
        return action;
    }
}

export default ActionFactory;