export enum ParsingErrors {
    ElementNotFound = "An element was not fount at parsing response",
    PropNotFound = "Cannot get an element prop from response html"
}

export class ParsingError extends Error{
    message: string;
    cause?: unknown;
    name: string = "ParsingError";
    stack?: string | undefined;

    constructor(message: ParsingErrors){
        super(message);
        this.message = message;
    }
}
