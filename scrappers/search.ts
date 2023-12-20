import { ParsingError, ParsingErrors } from "../errors/Parsing";
import { RecentAnime } from "./HomePage";
import { Fetch, Urls } from "./fetch";

const Query2Fetch = (query: string) => `${Urls.home}buscar?q=${query}`;

export interface SearchAnime extends RecentAnime {
    Year: number;
}

export async function Search(Query: string): Promise<SearchAnime[]>{
    let request = await Fetch(Query2Fetch(Query), {})
    let content = request.html.querySelectorAll(".heromain .row .col-6 a");

    return content.map(entry => {
        let $image = entry.querySelector(".series .seriesimg img.animemainimg");
        let $name = entry.querySelector(".series .seriesdetails .seristitles");
        let $info = entry.querySelector(".series .seriesdetails .seriesinfo")
        if(!$image || !$name || !$info)
            throw new ParsingError(ParsingErrors.ElementNotFound)
        let Id = entry.getAttribute("href")?.split("/").slice(-1)[0]
        let ImageURL = $image.getAttribute("src");
        let Anime = $name.innerText;
        let [Type, Year] = $info.innerText.split(" · ");

        if(!ImageURL || !Anime || !Type || !Year || !Id)
                throw new ParsingError(ParsingErrors.PropNotFound);
        return {Id, ImageURL, Anime, Year: Number(Year)}
    })
}
