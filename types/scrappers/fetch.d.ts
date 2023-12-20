import { HTMLElement } from "node-html-parser";
export declare const Urls: {
    home: string;
};
interface ParsedContent extends Response {
    html: HTMLElement;
}
export declare function Fetch(url: string, requestInit: RequestInit): Promise<ParsedContent>;
export {};
