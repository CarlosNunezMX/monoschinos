export type AnimeType = "Anime" | "Ova" | "Pelicula" |
                        "Especial" | "Corto" | "Ona" |
                        "Donghua" | "Sin Censura" | "PREESTRENO" |
                        "Pelicula 1080p" | "Audio Japonés";

export interface RecentEpisode {
    Episode: number;
    Type: AnimeType;
    Anime: string;
    Id: string;
    ImageURL: string
}


export interface RecentAnime {
    Id: string;
    Anime: string;
    ImageURL: string;
}

export interface Home {
    RecentEpisodes: RecentEpisode[],
    RecentAnimes: RecentAnime[]
};
