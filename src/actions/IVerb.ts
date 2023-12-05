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
    get firstPersonSingular(): string;
    get firstPersonPlural(): string;
    get secondPersonSingular(): string;
    get secondPersonPlural(): string;
    get thirdPersonSingular(): string;
    get thirdPersonPlural(): string;
}
