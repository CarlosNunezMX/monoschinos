import { ParsingError, ParsingErrors } from "../errors/Parsing";
import { Fetch, Urls } from "./fetch";
import type {Home, RecentAnime, RecentEpisode} from "./HomePage"


export async function HomePage(): Promise<Home> {
    const content =  await Fetch(Urls.home, {});
    let newEpisodes = content.html.querySelectorAll('.row.row-cols-5 .col');


    let RecentEpisodes: RecentEpisode[] = [];
    newEpisodes.forEach($episode => {

        let $link = $episode.querySelector("a");
        let $image = $episode.querySelector(".animeimgdiv img.animeimghv");
        const $hoverPositioning = $episode.querySelector(".animeimgdiv .hoverdiv .positioning");
        if(!$link || !$image || !$hoverPositioning)
            throw new ParsingError(ParsingErrors.ElementNotFound);

        let Anime = $link.getAttribute("title");
        let Id = $link.getAttribute('href')?.split("/").slice(-1)[0];
        let ImageURL = $image.getAttribute("data-src");

        if(!Anime || !Id || !ImageURL)
            throw new ParsingError(ParsingErrors.PropNotFound);

        let $episodenum = $hoverPositioning.querySelector("p");
        let $type = $hoverPositioning.querySelector("button");

        if(!$episodenum || !$type)
            throw new ParsingError(ParsingErrors.ElementNotFound);

        let Episode = Number($episodenum.innerText)
        let Type = $type.innerText
        // @ts-ignore
        RecentEpisodes.push({Anime,ImageURL,Episode,Id,Type})
    })

    let RecentAnimes: RecentAnime[] = [];
    const $RecentAnimes = content.html.querySelectorAll(".heroarea2 .item");

    $RecentAnimes.forEach($anime => {
        let $title = $anime.querySelector("a");
        let $image = $anime.querySelector(".animes2 img");
        // @ts-ignore
        if(!$title || !$image)
            throw new ParsingError(ParsingErrors.ElementNotFound);

        let Anime = $title.getAttribute("title");
        let Id = $title.getAttribute("href")?.split("/").slice(-1)[0];
        let ImageURL = $image.getAttribute("src");
        if(!Id || !Anime || !ImageURL)
            throw new ParsingError(ParsingErrors.PropNotFound);

        RecentAnimes.push({Anime, Id, ImageURL});
    })
    return {
        RecentEpisodes,
        RecentAnimes
    }
}
