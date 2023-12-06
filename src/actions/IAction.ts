import { IItem } from "../entities/IItem";
import { IActor } from "../entities/IActor";
import { IVerb } from "./IVerb";

export type SubjectObject = IActor | IItem | null;
export interface IAction {
    get verb(): IVerb;
    get subject(): SubjectObject | SubjectObject[];
}
