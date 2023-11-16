import IEntity from "./IEntity";
import { IPosition } from "./IPosition";

class Entity implements IEntity {
    private name: string;
    private position: IPosition;

    constructor (name: string, position: IPosition) {
        this.name = name;
        this.position = position;
    }

    getPosition(): IPosition {
        return this.position;
    }
    
    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

}

export default Entity;