export type Person = 'first' | 'second' | 'third';
export type NumberOf = 'singular' | 'plural';
/**
 * @description a verb (type of action), with the various tenses
 */
export interface IVerb {
    get base(): string;
    get infinitive(): string;
    get presentParticiple(): string;
    conjugatePresent(person: Person, number: NumberOf): string;
    get pastTense(): string;
    get pastParticiple(): string;
    get futureTense(): string;
}
