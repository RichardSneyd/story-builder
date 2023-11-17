import { IPosition } from "./IPosition";

type IEntity = {
    get position(): IPosition;
    get name(): string;
    set name(name: string);
}

export default IEntity;