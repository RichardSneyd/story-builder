export type Hardness = "very hard" | "hard" | "soft" | "very soft" | "squishy" | null;
export type Wetness = "very wet" | "wet" | "dry" | "very dry" | null;
export type Temperature = "very hot" | "hot" | "cold" | "very cold" | "warm" | null;

export interface IMaterial {
    get name(): string;
    get hardness(): Hardness;
    get wetness(): Wetness;
    get temperature(): Temperature;
}
