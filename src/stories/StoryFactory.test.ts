import StoryFactory from './StoryFactory';
import { IStory } from "./IStory";
import IBiome from '../biome/IBiome';
import Biome from '../biome/Biome';
import { IActor } from '../entities/IActor';
import Actor from '../entities/Actor';
import Scene from '../scenes/Scene';
import Location from '../scenes/Location';
jest.mock('../scenes/Scene');
jest.mock('../entities/Actor');
jest.mock('../scenes/Location');

jest.mock('../biome/Biome', () => {
    return {
        __esModule: true,
        default: jest.fn().mockImplementation(() => {
            return {
                locations: new Set([new (Location as any)(), new (Location as any)()]),
                actors: new Set([new (Actor as any)(), new (Actor as any)()]),
                items: new Set([new (Actor as any)(), new (Actor as any)()]),
                selectRandomActor: jest.fn().mockReturnValue(new (Actor as any)()),
                selectRandomItem: jest.fn().mockReturnValue(new (Actor as any)())
            }
        })
    }
});


describe('StoryFactory', () => {
    let protagonist: IActor;
    let biome: IBiome;

    beforeEach(() => {
        protagonist = new (Actor as any)();
        biome = new (Biome as any)();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('creates story with no scenes', () => {
        const story: IStory = StoryFactory.new({ biome, protagonist: protagonist });
        expect(story.scenes.length).toEqual(0);
    });

    test('creates story with no protagonist, chosen from biome at random', () => {
        const story: IStory = StoryFactory.new({ biome });
        expect(story.protagonist).toBeInstanceOf(Actor);
    })

    test('creates story with a single scene', () => {
        const scene = new (Scene as any)();
        const story: IStory = StoryFactory.new({ biome, protagonist: protagonist });
        story.scenes.push(scene);
        expect(story.scenes.length).toEqual(1);
    });

    test('creates story with multiple scenes', () => {
        const scene1 = new (Scene as any)();
        const scene2 = new (Scene as any)();
        const story: IStory = StoryFactory.new({ biome, protagonist: protagonist });
        story.scenes.push(scene1, scene2);
        expect(story.scenes.length).toEqual(2);
    });
});