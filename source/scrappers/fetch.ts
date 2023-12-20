import {decode} from "he"
import {parse as HTMLParser, HTMLElement} from "node-html-parser"

export const Urls = {
    home: "https://monoschinos2.com/"
};

interface ParsedContent extends Response{
    html: HTMLElement;
}
export async function Fetch(url: string, requestInit: RequestInit){
    const req = await fetch(url, requestInit);
    let text = await req.text();

    let text_sanitizado = decode(text);

    // @ts-ignore
    let newReq: ParsedContent = req;
    newReq.html = HTMLParser(text_sanitizado);

    return newReq;
}
