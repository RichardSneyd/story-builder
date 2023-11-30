import { IStory } from "./IStory";
import Story from "./Story";
import IBiome from "../biome/IBiome";
import { IActor } from "../entities/IActor";
import SceneFactory from "../scenes/SceneFactory";

export default class StoryFactory {
    public static new({biome, protagonist }: {biome: IBiome, protagonist?: IActor}): IStory {
        protagonist = protagonist ? protagonist : biome.selectRandomActor();
        const story = new Story({ protagonist });

        return story;
    }

    // generate a cause and effect story
    public static causeAndEffect(biome: IBiome, protagonist?: IActor): IStory {
        const story =  StoryFactory.new({biome, protagonist});
        const startingLocation = biome.selectRandomLocation();
        const startingScene = SceneFactory.new({location: startingLocation});
        startingScene.actors.push(story.protagonist);

        story.scenes.push(startingScene);


        return story;

    }


  

}