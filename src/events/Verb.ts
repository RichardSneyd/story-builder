type Person = 'first' | 'second' | 'third';
type NumberOf = 'singular' | 'plural';

/**
 * @description a verb (type of action), with the various tenses
 */
interface IVerb {
    get base(): string;
    get infinitive(): string;
    get presentParticiple(): string;
    conjugatePresent(person: Person, number: NumberOf): string;
    get pastTense(): string;
    get pastParticiple(): string;
    get futureTense(): string;
}

class Verb implements IVerb {
    private _base: string;
    private _presentParticiple: string;
    private _pastTense: string;
    private _pastParticiple: string;

    constructor(base: string, presentParticiple: string, pastTense: string, pastParticiple: string) {
        this._base = base;
        this._presentParticiple = presentParticiple;
        this._pastTense = pastTense;
        this._pastParticiple = pastParticiple;
    }

    get base(): string {
        return this._base;
    }

    get infinitive(): string {
        return `to ${this._base}`;
    }

    get pastTense(): string {
        return this._pastTense;
    }
    
    get presentParticiple(): string {
        return this._presentParticiple;
    }

    get pastParticiple(): string {
        return this._pastParticiple;
    }

    get futureTense(): string {
        return `will ${this._base}`
    }

    public conjugatePresent(person: Person, number: NumberOf): string {
        if (person === 'third' && number === 'singular') {
            // Special handling for third person singular in present tense
            if (this._base.endsWith('y')) {
                // verbs ending in 'y' change 'y' to 'ies'
                if (!["a", "e", "i", "o", "u"].includes(this._base[this._base.length - 2])) {
                    return `${this._base.substring(0, this._base.length - 1)}ies`;
                }
            } else if (this._base.endsWith('o') || this._base.endsWith('s') || this._base.endsWith('x') || this._base.endsWith('z') || this._base.endsWith('ch') || this._base.endsWith('sh')) {
                // verbs ending in -o, -s, -x, -z, -ch, -sh add 'es'
                return `${this._base}es`;
            }

            // default case for third person singular
            return `${this._base}s`;
        }

        // For all other persons and numbers, the base form is used
        return this._base;
    }

}
export default Verb;
export type {IVerb, Person, NumberOf}