import { IPosition } from "./IPosition";

type IEntity = {
    getPosition(): IPosition;
    getName(): string;
    setName(name: string): void;
}

export default IEntity;