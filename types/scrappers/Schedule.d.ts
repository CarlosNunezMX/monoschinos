import { Type } from "./Anime";
import { RecentEpisode } from "./HomePage";
export interface ScheduleAnime extends Omit<RecentEpisode, "Type"> {
    Types: Type[];
    Description: string;
}
export type ScheduleItem = {
    WeekDay: string;
    Animes: ScheduleAnime[];
};
export declare function Schedule(): Promise<ScheduleItem[]>;
