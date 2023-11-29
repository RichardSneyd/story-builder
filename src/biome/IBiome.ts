import { IActor } from "../entities/IActor";
import { IItem } from "../entities/IItem";
import Location from "../scenes/Location";

export default interface IBiome {
    get actors(): Set<IActor>;
    get items(): Set<IItem>;
    get locations(): Set<Location>;
    selectRandomActor(): IActor;
    selectRandomItem(): IItem;
    selectRandomLocation(): Location;
}
