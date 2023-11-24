import { IMaterial, Hardness, Wetness, Temperature } from "./IMaterial";

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