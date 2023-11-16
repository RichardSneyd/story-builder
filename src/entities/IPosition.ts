type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type IPosition = {
    getHorizontal() : HorizontalPosition;
    getVertical() : VerticalPosition;
    setHorizontal(horizontal: HorizontalPosition): void;
    setVertical(vertical: VerticalPosition): void;
}

export type {IPosition, HorizontalPosition, VerticalPosition}

