import { ISpecies } from "./ISpecies";

class Species implements ISpecies {
    private _base: string;
    private _plural: string;

    constructor(base: string) {
        this._base = base;
        this._plural = this._determinePluralForm(base);
    }

    get base(): string {
        return this._base;
    }

    get plural(): string {
        return this._plural;
    }

    private _determinePluralForm(base: string): string {
        const esEndings = ['s', 'ss', 'sh', 'ch', 'x', 'z'];
        for (const ending of esEndings) {
            if (base.endsWith(ending)) {
                return base + 'es';
            }
        }
        return base + 's';
    }
}

export default Species;
export type {ISpecies, Species}