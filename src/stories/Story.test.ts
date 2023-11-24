import Story from './Story';
import Actor from '../entities/Actor'; // Assuming Actor is a concrete class
import Scene from '../scenes/Scene'; // Assuming Scene is a concrete class
import Species from '../entities/Species';
import Location from '../scenes/Location';

describe('Story', () => {
  const mockProtagonist = new Actor({name: "Person 1", position: {horizontal:'center', vertical:'bottom'}, species: new Species("human")});
  const mockScene1 = new Scene({location: new Location({name: "The Moon"})});
  const mockScene2 = new Scene({location: new Location({name: "Mars"})});
  const scenes = [mockScene1, mockScene2];

  const story = new Story({ protagonist: mockProtagonist, scenes });

  test('constructor initializes protagonist correctly', () => {
    expect(story.protagonist).toBe(mockProtagonist);
  });

  test('constructor initializes scenes correctly', () => {
    expect(story.scenes).toEqual(scenes);
  });

  test('scenes getter returns the correct values', () => {
    expect(story.scenes).toEqual(scenes);
  });

  test('protagonist getter returns the correct value', () => {
    expect(story.protagonist).toBe(mockProtagonist);
  });
});
