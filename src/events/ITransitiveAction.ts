import { IAction, SubjectObject } from "./IAction";

export interface ITransitiveAction extends IAction {
    get object(): SubjectObject;
}
