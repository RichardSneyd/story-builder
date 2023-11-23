import Species from './Species';

describe('Species', () => {
  test('constructor sets base name and determines plural form correctly', () => {
    const species = new Species('dog');
    expect(species.base).toBe('dog');
    expect(species.plural).toBe('dogs');
  });

  test('plural form adds "es" for special cases', () => {
    const speciesWithEs = new Species('fox');
    expect(speciesWithEs.plural).toBe('foxes');
  });

  test('plural form adds "s" for regular cases', () => {
    const regularSpecies = new Species('cat');
    expect(regularSpecies.plural).toBe('cats');
  });

  // Additional tests for each case in the _determinePluralForm method
  const specialEndings = ['s', 'ss', 'sh', 'ch', 'x', 'z'];
  specialEndings.forEach(ending => {
    test(`plural form for base ending in "${ending}" adds "es"`, () => {
      const species = new Species(`bus${ending}`);
      expect(species.plural).toBe(`bus${ending}es`);
    });
  });
});
