import Verb from './Verb';
import { NumberOf, Person } from "./IVerb";

describe('Verb', () => {
  const base = 'walk';
  const presentParticiple = 'walking';
  const pastTense = 'walked';
  const pastParticiple = 'walked';
  const verb = new Verb(base, presentParticiple, pastTense, pastParticiple);

  test('constructor initializes properties correctly', () => {
    expect(verb.base).toBe(base);
    expect(verb.presentParticiple).toBe(presentParticiple);
    expect(verb.pastTense).toBe(pastTense);
    expect(verb.pastParticiple).toBe(pastParticiple);
  });

  test('infinitive returns correct form', () => {
    expect(verb.infinitive).toBe(`to ${base}`);
  });

  test('future tense returns correct form', () => {
    expect(verb.futureTense).toBe(`will ${base}`);
  });

  test.each<[Person, NumberOf, string]>([
    ['first', 'singular', base],
    ['second', 'singular', base],
    ['third', 'singular', `${base}s`],
    ['first', 'plural', base],
    ['second', 'plural', base],
    ['third', 'plural', base],
  ])('conjugatePresent for person %s and number %s returns %s', (person, number, expected) => {
    expect(verb.conjugatePresent(person, number)).toBe(expected);
  });

  // Additional tests for special cases in conjugatePresent method
  test('conjugatePresent handles verbs ending in "y"', () => {
    const flyVerb = new Verb('fly', 'flying', 'flew', 'flown');
    expect(flyVerb.conjugatePresent('third', 'singular')).toBe('flies');
  });

  test('conjugatePresent handles verbs ending in "o", "s", "x", "z", "ch", "sh"', () => {
    const goVerb = new Verb('go', 'going', 'went', 'gone');
    expect(goVerb.conjugatePresent('third', 'singular')).toBe('goes');
  });

});
