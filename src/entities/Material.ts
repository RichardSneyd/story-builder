type Hardness = "very hard" | "hard" | "soft" | "very soft" | "squishy" | null;
type Wetness = "very wet" | "wet" | "dry" | "very dry" | null;
type Temperature = "very hot" | "hot" | "cold" | "very cold" | "warm" | null;

interface IMaterial {
    get name(): string
    get hardness(): Hardness,
    get wetness(): Wetness,
    get temperature(): Temperature
}

class Material implements IMaterial {
    private _name: string;
    private _hardness: Hardness;
    private _wetness: Wetness;
    private _temperature: Temperature;

    constructor({ name, hardness, wetness = "dry", temperature = "warm" }: { name: string, hardness: Hardness, wetness?: Wetness, temperature?: Temperature }) {
        this._name = name;
        this._hardness = hardness;
        this._wetness = wetness;
        this._temperature = temperature;
    }

    get name(): string {
        return this._name;
    }

    get hardness(): Hardness {
        return this._hardness;
    }

    get wetness(): Wetness {
        return this._wetness;
    }

    get temperature(): Temperature { 
        return this._temperature 
    }
}

export default Material;
export type { IMaterial, Hardness, Wetness, Temperature }