import StoryFactory from './StoryFactory';
import { IStory } from "./IStory";
import IBiome from '../biome/IBiome';
import Biome from '../biome/Biome';
import Location from '../scenes/Location';
import { IActor } from '../entities/IActor';
import Actor from '../entities/Actor';
import { ISpecies } from '../entities/ISpecies';
import Species from '../entities/Species';
import Scene from '../scenes/Scene';

describe('StoryFactory', () => {
    let location1: Location;
    let location2: Location;
    let location3: Location;
    let location4: Location;

    let species1: ISpecies;
    let protagonist: IActor;
    let biome: IBiome;
    
    beforeEach(() => {
        location1 = new Location({name: "the beach"});
        location2 = new Location({name: "the kitchen"});
        location3 = new Location({name: "the backyard"});
        location4 = new Location({name: "the garage"});
        species1 = new Species("human");
        protagonist = new Actor({name: "Person 1", position: {horizontal:'center', vertical:'bottom'}, species: species1});
        biome = new Biome({locations: [location1, location2, location3, location4]});
        
    });

    test('creates story with no scenes', () => {
        const story: IStory = StoryFactory.new({biome, protagonist: protagonist});
        expect(story.scenes.length).toEqual(0);
    });

    test('creates story with a single scene', () => {
        const scene = new Scene({location: location1});
        const story: IStory = StoryFactory.new({biome, protagonist: protagonist});
        story.scenes.push(scene);
        expect(story.scenes.length).toEqual(1);
    });

    test('creates story with multiple scenes', () => {
        const scene1 = new Scene({location: location1});
        const scene2 = new Scene({location: location2});
        const story: IStory = StoryFactory.new({biome, protagonist: protagonist});
        story.scenes.push(scene1, scene2);
        expect(story.scenes.length).toEqual(2);
    });
});