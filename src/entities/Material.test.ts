import Material from "./Material"

describe('Material', () => {
    let material: Material;

    beforeEach(() => {
        material = new Material({ name: 'Wood', hardness: 'hard', wetness: 'dry', temperature: 'cold' });
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('constructor initializes properties correctly', () => {
        expect(material.name).toBe('Wood');
        expect(material.hardness).toBe('hard');
        expect(material.wetness).toBe('dry');
        expect(material.temperature).toBe('cold');
    });
})