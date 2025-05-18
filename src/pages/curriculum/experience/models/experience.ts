import {DateTime} from "luxon";

export interface Experience {
    name: string,
    role: string,
    from: DateTime,
    to: DateTime,
    description: string
}