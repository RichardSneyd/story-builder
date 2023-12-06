import ComplexTransitiveAction from "./ComplexTransitiveAction";
import { IAction } from "./IAction";
import IntransitiveAction from "./IntransitiveAction";
import TransitiveAction from "./TransitiveAction";
import { IActor } from "../entities/IActor";
import { NumberOf, Tense } from "./IVerb";
import { Person } from "./IVerb";

// create a class, ActionDescriber. It has a static describe method, that takes an IAction object, and a tense, and returns a string. It will format the string based on tense and based on the type of action, if it's Transitive, Intransitive or ComplexTransitive
export default class ActionDescriber {
    public static describe(action: IAction, tense: Tense, person: Person): string {
        let description = "";
        if (action instanceof TransitiveAction) {
            description = this.describeTransitive(action, tense, person);
        } else if (action instanceof IntransitiveAction) {
            description = this.describeIntransitive(action, tense, person);
        } else if (action instanceof ComplexTransitiveAction) {
            description = this.describeComplexTransitive(action, tense, person);
        }
        return description;
    }

    static describeIntransitive(action: IntransitiveAction, tense: Tense = 'presentTense', person: Person, secondPersonSpeaker?: IActor): string {
        const subjectDesc = Array.isArray(action.subject) ? action.subject.map(subject => subject?.name).join(" and ") : action.subject?.name;
        const secondPersonSpeakerName = secondPersonSpeaker?.name || "someone";
        const num: NumberOf = Array.isArray(action.subject) ? 'plural' : 'singular';
        const verbForm = tense === "presentTense" ? action.verb.presentTense(person, num) : action.verb[tense as keyof typeof action.verb];

        let prefix = '';
        switch (person) {
            case "first":
                prefix = `"I ${verbForm}", says `;
                break;
            case "second":
                prefix = `"You ${verbForm}", ${secondPersonSpeakerName} says to `;
                break;
            case "third":
                prefix = '';
                break;
            default:
                throw new Error("Invalid person type");
        }

        const suffix = person === "third" ? ` ${verbForm}` : '';
        return `${prefix}${subjectDesc}${suffix}`;
    }
    
    // static describeIntransitive(action: IntransitiveAction, tense: Tense = 'presentTense', person: Person, secondPersonSpeaker?: IActor): string {
    //     const subjectDesc = Array.isArray(action.subject) ? action.subject.map((subject) => subject?.name).join(" and ") : action.subject?.name;
    //     const secondPersonSpeakerName = secondPersonSpeaker?.name || "someone";

    //     if (tense === "presentTense") {
    //         if (person === "first") {
    //             return `"I ${action.verb}", says ${subjectDesc}`;
    //         }
    //         if (person === "second") {
    //             return `"You ${action.verb.infinitive}", ${secondPersonSpeakerName} says to ${subjectDesc}`;
    //         }
    //         if (person === "third") {
    //             return `${subjectDesc} ${action.verb.infinitive}`;
    //         }
    //     }
    //     else if (tense === "pastTense") {
    //         if (person === "first") {
    //             return `"I ${action.verb['pastTense']}", says ${subjectDesc}`;
    //         }
    //         if (person === "second") {
    //             return `"You ${action.verb.pastTense}", ${secondPersonSpeakerName} says to ${subjectDesc}`;
    //         }
    //         if (person === "third") {
    //             return `${subjectDesc} ${action.verb.pastTense}`;
    //         }
    //     }
    //     else if (tense === "pastParticiple") {
    //         if (person === "first") {
    //             return `"I ${action.verb.pastParticiple}", says ${subjectDesc}`;
    //         }
    //         if (person === "second") {
    //             return `"You ${action.verb.pastParticiple}", ${secondPersonSpeaker?.name} says to ${subjectDesc}`;
    //         }
    //         if (person === "third") {
    //             return `${subjectDesc} ${action.verb.pastParticiple}`;
    //         }
    //     }
    //     else if (tense === "presentParticiple") {
    //         if (person === "first") {
    //             return `"I ${action.verb.presentParticiple}", says ${subjectDesc}`;
    //         }
    //         if (person === "second") {
    //             return `"You ${action.verb.presentParticiple}", ${secondPersonSpeaker?.name} says to ${subjectDesc}`;
    //         }
    //         if (person === "third") {
    //             return `${subjectDesc} ${action.verb.presentParticiple}`;
    //         }
    //     }
    //     else if (tense === "futureTense") {
    //         if (person === "first") {
    //             return `"I will ${action.verb.futureTense}", says ${subjectDesc}`;
    //         }
    //         if (person === "second") {
    //             return `"You will ${action.verb.futureTense}", ${secondPersonSpeaker?.name} says to ${subjectDesc}`;
    //         }
    //         if (person === "third") {
    //             return `${subjectDesc} will ${action.verb.futureTense}`;
    //         }
    //     }

    //     throw new Error("Tense not supported");
    // }

    static describeTransitive(action: TransitiveAction, tense: Tense, person: Person): string {
        return this.describeIntransitive(action, tense, person);
    }
    static describeComplexTransitive(action: ComplexTransitiveAction, tense: Tense, person: Person): string {
        return this.describeIntransitive(action, tense, person);
    }

}