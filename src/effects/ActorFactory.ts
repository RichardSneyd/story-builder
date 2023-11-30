import Actor from "../entities/Actor";
import { ActorState, Gender, IActor } from "../entities/IActor";
import { IPosition } from "../entities/IPosition";
import { IProfile } from "../entities/IProfile";
import { ISpecies } from "../entities/ISpecies";
import Item from "../entities/Item";
import Profile from "../entities/Profile";

class ActorFactory {

    public static create({name, position, state = ["happy"], gender = "male", age = 9, profile = new Profile({}), items = [], species}:{name: string, position: IPosition, state?: ActorState[], species: ISpecies, gender?: Gender, age?: number, profile?: IProfile, items?: Item[]}): IActor {
        return new Actor({name, position, state, gender, age, profile, items, species});
    }
}

export default ActorFactory;