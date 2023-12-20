import { RecentAnime } from "./HomePage";
export interface SearchAnime extends RecentAnime {
    Year: number;
}
export declare function Search(Query: string): Promise<SearchAnime[]>;
