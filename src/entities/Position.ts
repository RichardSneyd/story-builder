import { IPosition, HorizontalPosition, VerticalPosition } from "./IPosition";

class Position implements IPosition {
    private _horizontal: HorizontalPosition;
    private _vertical: VerticalPosition;

    constructor(horizontal: HorizontalPosition, vertical: VerticalPosition){
        [this._horizontal, this._vertical] = [horizontal, vertical];
    }

    set horizontal(horizontal: HorizontalPosition) {
        this._horizontal = horizontal;
    }

    set vertical(vertical: VerticalPosition) {
        this._vertical = vertical;
    }

    get horizontal(): HorizontalPosition {
        return this._horizontal;
    }
    
    get vertical(): VerticalPosition {
        return this._vertical;
    }

}

export default Position;