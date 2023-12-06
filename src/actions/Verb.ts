import VerbConjugations from "./VerbConjugations";
import { IVerb, Person, NumberOf } from "./IVerb";

class Verb implements IVerb {
    private _base: string;
    private _presentParticiple: string;
    private _pastTense: string;
    private _pastParticiple: string;
    private _conjugations: VerbConjugations | null;

    constructor(base: string, presentParticiple: string, pastTense: string, pastParticiple: string, conjugations: VerbConjugations | null = null) {
        this._base = base;
        this._presentParticiple = presentParticiple;
        this._pastTense = pastTense;
        this._pastParticiple = pastParticiple;
        this._conjugations = conjugations;
    }

    get base(): string {
        return this._base;
    }

    presentTense(person: Person, number: NumberOf): string {
        const key: string = `${person}Person_${number}`;
        return this._conjugations ? this._conjugations[key as keyof VerbConjugations] : this.conjugatePresent(person, number);
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
        return this._conjugations?.firstPerson_singular ? this._conjugations.firstPerson_singular :this.conjugatePresent('first', 'singular');
    }

    get firstPersonPlural(): string {
        return this._conjugations?.firstPerson_plural ? this._conjugations.firstPerson_plural :this.conjugatePresent('first', 'plural');
    }

    get secondPersonSingular(): string {
        return this._conjugations?.secondPerson_singular ? this._conjugations.secondPerson_singular :this.conjugatePresent('second', 'singular');
    }

    get secondPersonPlural(): string {
        return this._conjugations?.secondPerson_plural ? this._conjugations.secondPerson_plural :this.conjugatePresent('second', 'plural');
    }

    get thirdPersonSingular(): string {
        return this._conjugations?.thirdPerson_singular ? this._conjugations.thirdPerson_singular :this.conjugatePresent('third', 'singular');
    }

    get thirdPersonPlural(): string {
        return this._conjugations?.thirdPerson_plural ? this._conjugations.thirdPerson_plural :this.conjugatePresent('third', 'plural');
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