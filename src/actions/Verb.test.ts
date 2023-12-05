import Verb from './Verb';
import { NumberOf, Person } from "./IVerb";

describe('Verb', () => {
  const walk = new Verb('walk', 'walking', 'walked', 'walked');
  const be = new Verb('be', 'being', 'was', 'been', {
    firstPersonSingular: 'am',
    firstPersonPlural: 'are',
    secondPersonSingular: 'are',
    secondPersonPlural: 'are',
    thirdPersonSingular: 'is',
    thirdPersonPlural: 'are',
  });

  test('constructor initializes properties correctly', () => {
    expect(walk.base).toBe('walk');
    expect(walk.presentParticiple).toBe('walking');
    expect(walk.pastTense).toBe('walked');
    expect(walk.pastParticiple).toBe('walked');
  });

  test('infinitive returns correct form', () => {
    expect(walk.infinitive).toBe(`to walk`);
  });

  test('future tense returns correct form', () => {
    expect(walk.futureTense).toBe(`will walk`);
  });

  test.each<[Person, NumberOf, string]>([
    ['first', 'singular', walk.base],
    ['second', 'singular', walk.base],
    ['third', 'singular', `${walk.base}s`],
    ['first', 'plural', walk.base],
    ['second', 'plural', walk.base],
    ['third', 'plural', walk.base],
  ])('conjugatePresent for person %s and number %s returns %s', (person, number, expected) => {
    expect(walk.conjugatePresent(person, number)).toBe(expected);
  });

  // test conjugation of irregulars
  test('conjugatePresent with irregular verb returns correct conjugations', () => {
    expect(be.firstPersonPlural).toBe('are');
    expect(be.secondPersonPlural).toBe('are');
    expect(be.thirdPersonPlural).toBe('are');
    expect(be.firstPersonSingular).toBe('am');
    expect(be.secondPersonSingular).toBe('are');
    expect(be.thirdPersonSingular).toBe('is');
  });

  // Additional tests for special cases in conjugatePresent method
  test('conjugatePresent handles verbs ending in "y"', () => {
    const flyVerb = new Verb('fly', 'flying', 'flew', 'flown');
    expect(flyVerb.conjugatePresent('third', 'singular')).toBe('flies');
    expect(flyVerb.conjugatePresent('third', 'plural')).toBe('fly');
  });

  test('conjugatePresent handles verbs ending in "o", "s", "x", "z", "ch", "sh"', () => {
    const goVerb = new Verb('go', 'going', 'went', 'gone');
    expect(goVerb.conjugatePresent('third', 'singular')).toBe('goes');
  });

});
