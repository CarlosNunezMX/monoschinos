import { ParsingError, ParsingErrors } from "../errors/Parsing";
import { Type } from "./Anime";
import { RecentEpisode } from "./HomePage";
import { Fetch, Urls } from "./fetch";


export interface ScheduleAnime extends Omit<RecentEpisode, "Type"> {
    Types: Type[];
    Description: string
}
export type ScheduleItem = {
    WeekDay: string;
    Animes:ScheduleAnime[];
}

export async function Schedule(): Promise<ScheduleItem[]>{
    let request = await Fetch(Urls.home + "calendario", {});
    let days = request.html.querySelectorAll(".accordionItem");

    return days.map(day => {
        let $day = day.querySelector(".accordionItemHeading");
        let $animes = day.querySelectorAll(".accordionItemContent .row .series .row")
        if(!$day)
            throw new ParsingError(ParsingErrors.ElementNotFound)
        let WeekDay = $day.innerText;

        if(!WeekDay)
            throw new ParsingError(ParsingErrors.PropNotFound);
        let Animes: ScheduleAnime[] = $animes.map(anime => {
            let $image = anime.querySelector(".seriesimg img");
            let $Episode = anime.querySelector(".serisdtls h4");
            let $Anime = anime.querySelector(".serisdtls h3");
            let $Description = anime.querySelector(".serisdtls p");
            let $Id = anime.querySelector(".seriesimg a");
            let $Cats = anime.querySelectorAll(".serisdtls .seriesbtns a");
            if(!$image || !$Episode || !$Anime || !$Description || !$Id)
                throw new ParsingError(ParsingErrors.ElementNotFound);

            let ImageURL = $image.getAttribute("data-src");
            let Anime = $Anime.innerText;
            let Description = $Description.innerText;
            let Episode = $Episode.innerText;
            let Id = $Id.getAttribute("href")?.split("/").slice(-1)[0];
            let Types: Type[] = $Cats.map(cat => cat.innerText);

            if(!ImageURL || !Anime || !Episode || !Id)
                    throw new ParsingError(ParsingErrors.PropNotFound)
            return {
                Anime,
                Episode,
                ImageURL,
                Description,
                Id,
                Types
            }
        })

        return {
            Animes,
            WeekDay
        }
    })
}
