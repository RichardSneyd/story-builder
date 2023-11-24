import { SubjectObject } from "./IAction";
import { ITransitiveAction } from "./ITransitiveAction";

export interface IComplexTransitiveAction extends ITransitiveAction {
    get prepositionalObject(): SubjectObject;
}
