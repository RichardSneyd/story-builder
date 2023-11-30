import Event from "../events/Event";
import { IEvent } from "./IEvent";
import { AnyAction } from "./IEvent";
import { AnyEffect } from "./IEvent";

class EventFactory {
  public static new({ prevEvent = null, nextEvent = null, action, cause = null, effects = [] }: { prevEvent?: IEvent | null, nextEvent?: IEvent | null, action: AnyAction, cause?: IEvent | null, effects?: AnyEffect[] }): IEvent {
    return new Event({ prevEvent, nextEvent, action, cause, effects });
  }
}

export default EventFactory;