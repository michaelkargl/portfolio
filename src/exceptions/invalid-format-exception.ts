import {Exception} from "./exception";

export class InvalidFormatException extends Exception {
    constructor(message: string, resourceName: string) {
        super(`InvalidFormatException: Unexpected format received for resource [${resourceName}]: ${message}`);
        this.name = "InvalidFormatException";
    }
}