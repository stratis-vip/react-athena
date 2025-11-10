export interface ResultHero {
    attacker: HeroTeamForWar;
    defender: HeroTeamForWar;
}

export interface HeroResultsForSave {
    [key: string]: HeroBattleWithoutDate[]
}

export interface HeroBattleWithoutDate {
    attacker: HeroFromResults;
    defender: HeroFromResults;
    points: number
}

/** Represents a battle between two heroes.
 */
export type Battle = HeroBattleWithoutDate & { date: number; }


/** Represents a hero with their details.
 */
export interface HeroFromResults {
    id: number;
    name: string;
    power: number;
    team: HeroTeamFromResults;
    guild: number
}


/** Represents a team with their details.
 */
export interface HeroTeamFromResults {
    patronage: number[];
    pet: number;
    heros: number[];
}


export interface ResultHeroWithDate {
    attacker: HeroTeamForWarWithDate;
    defender: HeroTeamForWarWithDate;
    points: number
}

export interface WarRecord {
    [key: string]: HeroBattleWithoutDate[]
}

export interface HeroTeamForWar {
    id: number,
    name: string,
    power: number
    team: Team,
    guild: number
}

export interface HeroTeamForWarWithDate extends HeroTeamForWar { date: string }

interface Team {
    pet: number,
    heros: number[],
    patronage: number[]
}

export interface Guilds {
    [key: string]: Guild;
}

interface Guild {
    name: string;
    champions: number[];
    titans: number[];
    currentLeague: League;
    silver?: Rank[];
    gold?: Rank[];
    bronze?: Rank[];
}


export type League = "gold" | "silver" | "bronze" | "unknown"
export interface ResultsForTitansSave {
    [key: string]: BattleWithNoDate[]
}
export interface BattleWithNoDate {
    attacker: TitanFromResults;
    defender: TitanFromResults;
    points: number

}

/** Represents a hero with their details.
 */
export interface TitanFromResults {
    readonly id: number;
    readonly name: string;
    readonly power: number;
    readonly guild: number;
    team: ReadonlyArray<string>;
}
interface Rank { date: number; position: number }
