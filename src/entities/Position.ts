import { IPosition, HorizontalPosition, VerticalPosition } from "./IPosition";

class Position implements IPosition {
    private horizontal: HorizontalPosition;
    private vertical: VerticalPosition;

    constructor(horizontal: HorizontalPosition, vertical: VerticalPosition){
        [this.horizontal, this.vertical] = [horizontal, vertical];
    }

    setHorizontal(horizontal: HorizontalPosition): void {
        this.horizontal = horizontal;
    }

    setVertical(vertical: VerticalPosition): void {
        this.vertical = vertical;
    }

    getHorizontal(): HorizontalPosition {
        return this.horizontal;
    }
    
    getVertical(): VerticalPosition {
        return this.vertical;
    }

}

export default Position;