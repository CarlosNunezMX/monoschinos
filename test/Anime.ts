import { Anime } from "../scrappers/anime";

console.time("Anime")
let anime = await Anime("seishun-buta-yarou-wa-odekake-sister-no-yume-wo-minai-sub-espanol");
console.timeEnd("Anime");

console.log(anime)
