import { IScene } from './IScene';
import { IItem } from '../entities/IItem';
import { IActor } from '../entities/IActor';
import Location from './Location';
import Scene from './Scene';
import { IEvent } from "../events/IEvent";

export default class SceneFactory {
  public static new({location, actors = [], events = [], items = []}: {location: Location, actors?: IActor[], events?: IEvent[], items?: IItem[]}): IScene {
      return new Scene({location, actors, events, items});
  }
}