type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type IPosition = {
    get horizontal() : HorizontalPosition;
    get vertical() : VerticalPosition;
    set horizontal(horizontal: HorizontalPosition);
    set vertical(vertical: VerticalPosition);
}

export type {IPosition, HorizontalPosition, VerticalPosition}

