export declare enum ParsingErrors {
    ElementNotFound = "An element was not fount at parsing response",
    PropNotFound = "Cannot get an element prop from response html"
}
export declare class ParsingError extends Error {
    message: string;
    cause?: unknown;
    name: string;
    stack?: string | undefined;
    constructor(message: ParsingErrors);
}
