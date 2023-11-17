import IEntity from "./IEntity";
import { IPosition } from "./IPosition";

class Entity implements IEntity {
    private _name: string;
    private _position: IPosition;

    constructor (name: string, position: IPosition) {
        this._name = name;
        this._position = position;
    }

    get position(): IPosition {
        return this._position;
    }
    
    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

}

export default Entity;