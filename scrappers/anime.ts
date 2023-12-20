import { ParsingError, ParsingErrors } from "../errors/Parsing";
import type { Anime as AnimeType, Type} from "./Anime";
import { Fetch, Urls } from "./fetch";
const adding = "anime/";

export async function Anime(id: string): Promise<AnimeType>{
    let request = await Fetch(Urls.home + adding + id, {});

    const $animeDetails = request.html.querySelector(".heroarea .heromain");

    if(!$animeDetails)
        throw new ParsingError(ParsingErrors.ElementNotFound);

    let $title = $animeDetails.querySelector(".acontain .chapterdetails h1");
    let $horizontalImg = $animeDetails.querySelector(".herobg img");
    let $verticalImg = $animeDetails.querySelector(".acontain .chapterpic img");
    let $rate = $animeDetails.querySelector(".acontain .heroslidico");
    let $status = $animeDetails.querySelector("button#btninfo");
    let breadcrumb = $animeDetails.querySelectorAll("ol.breadcrumb li.breadcrumb-item a");
    let $description = $animeDetails.querySelector("p.textComplete");

    let $DateBreadCrumb = $animeDetails.querySelector(".chapterpic ~ .chapterdetails:nth-child(1)")
    if(!$title || !$horizontalImg || !$verticalImg || !$rate || !$status || !$description || !$DateBreadCrumb)
        throw new ParsingError(ParsingErrors.ElementNotFound);
    console.log($DateBreadCrumb)

    let HorizontalImageURL = $horizontalImg.getAttribute("src");
    let Rate = $rate.getAttribute("data-rating");
    let VerticalImageURL = $verticalImg.getAttribute("src");
    let Anime = $title.innerText
    let Status = $status.innerText
    let Description = $description.innerText;

    console.log(!VerticalImageURL,!HorizontalImageURL,!Anime,!Rate,!Status,!Description)
    if(!VerticalImageURL || !HorizontalImageURL || !Anime || !Rate || !Status || !Description)
        throw new ParsingError(ParsingErrors.PropNotFound);
    // @ts-ignore
    let Types: Type[]  = breadcrumb.map(item => item.innerText)

    return {
        Anime,
        BannerImagesURL: {
            HorizontalImageURL,
            VerticalImageURL
        },
        Rate: Number(Rate),
        Types,
        // @ts-ignore
        Status,
        Description,
    }
}
