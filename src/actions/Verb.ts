import Conjugations from "./Conjugations";
import { IVerb, Person, NumberOf } from "./IVerb";

class Verb implements IVerb {
    private _base: string;
    private _presentParticiple: string;
    private _pastTense: string;
    private _pastParticiple: string;
    private _conjugations: Conjugations | null;
    

    constructor(base: string, presentParticiple: string, pastTense: string, pastParticiple: string, conjugations: Conjugations | null = null) {
        this._base = base;
        this._presentParticiple = presentParticiple;
        this._pastTense = pastTense;
        this._pastParticiple = pastParticiple;
        this._conjugations = conjugations;
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

    get firstPersonSingular(): string {
        return this._conjugations?.firstPersonSingular ? this._conjugations.firstPersonSingular :this.conjugatePresent('first', 'singular');
    }

    get firstPersonPlural(): string {
        return this._conjugations?.firstPersonPlural ? this._conjugations.firstPersonPlural :this.conjugatePresent('first', 'plural');
    }

    get secondPersonSingular(): string {
        return this._conjugations?.secondPersonSingular ? this._conjugations.secondPersonSingular :this.conjugatePresent('second', 'singular');
    }

    get secondPersonPlural(): string {
        return this._conjugations?.secondPersonPlural ? this._conjugations.secondPersonPlural :this.conjugatePresent('second', 'plural');
    }

    get thirdPersonSingular(): string {
        return this._conjugations?.thirdPersonSingular ? this._conjugations.thirdPersonSingular :this.conjugatePresent('third', 'singular');
    }

    get thirdPersonPlural(): string {
        return this._conjugations?.thirdPersonPlural ? this._conjugations.thirdPersonPlural :this.conjugatePresent('third', 'plural');
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