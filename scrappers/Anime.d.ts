export interface Anime {
    Anime: string;
    Rate: number;
    Status: "Finalizado" | "En emisión";
    Types: Type[];
    Date: string;
    Description: string;
    BannerImagesURL: {
        HorizontalImageURL: string;
        VerticalImageURL: string;
    };
    Episodes: AnimeEpisode[]
}

type Type = "Genero"| "Acción"| "Aventura"| "Carreras"| "Ciencia Ficción"| "Comedia"| "Cyberpunk"| "Deportes"| "Drama"| "Ecchi"| "Escolares"| "Fantasía"| "Gore"| "Harem"| "Horror"| "Josei"| "Lucha"| "Magia"| "Mecha"| "Militar"| "Misterio"| "Música"| "Parodias"| "Psicológico"| "Recuerdos de la vida"| "Seinen"| "Shojo"| "Shonen"| "Sobrenatural"| "Vampiros"| "Yaoi"| "Yuri"| "Latino"| "Espacial"| "Histórico"| "Samurai"| "Artes Marciales"| "Demonios"| "Romance"| "Dementia"| " Policía"| "Castellano"| "Historia paralela"| "Aenime"| "Blu-ray"| "Monogatari";

export interface AnimeEpisode {
    ImageURL: string;
    Episode: number;
    Id: string;
}
