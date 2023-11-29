import StoryFactory from './StoryFactory';
import { IStory } from "./IStory";
import IBiome from '../biome/IBiome';
import Biome from '../biome/Biome';
import Location from '../scenes/Location';
import { IActor } from '../entities/IActor';
import Actor from '../entities/Actor';
import { ISpecies } from '../entities/ISpecies';
import Species from '../entities/Species';

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
});