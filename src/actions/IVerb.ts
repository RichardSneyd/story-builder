export type Person = 'first' | 'second' | 'third';
export type NumberOf = 'singular' | 'plural';
export type Tense = 'presentTense' | 'presentParticiple' | 'pastParticiple' | 'pastTense' | 'futureTense';
/**
 * @description a verb (type of action), with the various tenses
 */
export interface IVerb {
    get base(): string;
    get infinitive(): string;
    presentTense(person: Person, number: NumberOf): string;
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
