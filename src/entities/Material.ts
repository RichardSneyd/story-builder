type Hardness = "very hard" | "hard" | "soft" | "very soft" | "squishy" | null;
type Wetness = "very wet" | "wet" | "dry" | "very dry" | null;
type Temperature = "very hot" | "hot" | "cold" | "very cold" | null;

type Material = {
    name: string,
    hardness: Hardness,
    wetness: Wetness,
    temperature: Temperature
}

export type { Material, Hardness, Wetness, Temperature }