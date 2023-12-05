import Story from './Story';
import Actor from '../entities/Actor'; // Assuming Actor is a concrete class
import Scene from '../scenes/Scene'; // Assuming Scene is a concrete class
import { IScene } from '../scenes/IScene';
import { IActor } from '../entities/IActor';
import { IStory } from './IStory';
jest.mock('../entities/Actor');
jest.mock('../scenes/Scene');

describe('Story', () => {
  let mockProtagonist: IActor;
  let mockScene1: IScene;
  let mockScene2: IScene;
  let scenes: IScene[];
  let story: IStory;

  beforeEach(() => {
    mockProtagonist  = new (Actor as any)();
    mockScene1 = new (Scene as any)();
    mockScene2 = new (Scene as any)();
    scenes = [mockScene1, mockScene2];
    story = new Story({ protagonist: mockProtagonist, scenes: scenes });
  })

  afterEach(() => {
    jest.clearAllMocks();
  });
  
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
