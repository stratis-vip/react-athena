import { resultHeroes } from "./hero-records";

import type { Hero } from "herowars-library";
export const areAllIn = <T>(
  lookFor: readonly T[],
  lookTo: readonly T[],
): boolean => {
  const bSet = new Set(lookTo);
  const r = lookFor.every((item) => bSet.has(item));
  return r;
};

export const anyOfIn = <T>(
  lookFor: readonly T[],
  lookTo: readonly T[],
): boolean => {
  const lookToSet = new Set(lookTo);
  return lookFor.some((item) => lookToSet.has(item));
};

export const getIntDate = (date: Date = new Date()): number => {
  // debugger;
  return Number(date.toISOString().slice(0, 10).replace(/-/g, ""));
};

export const fromIntDate = (date: number): string => {
  let dt = date;
  const yt = Math.floor(dt / 10000);
  dt -= yt * 10000;
  const mt = Math.floor(dt / 100);
  dt -= mt * 100;
  return `${yt}-${mt.toString().padStart(2, "0")}-${dt.toString().padStart(2, "0")}`;
};

const getDatesFromResults = (reversed = true) => {
  const tempArray = resultHeroes.records.map((record) => record.date).sort();
  const tempSet = new Set(tempArray);
  const t = Array.from(tempSet);
  if (reversed === true) {
    return t.reverse();
  } else {
    return t;
  }
};

//date must be in yyyy-mm-dd format from input (date type)
// export const getHeroesFromDate: (
//   date: string,
//   include: boolean,
// ) => ResultHeroWithDate[] = (date, include = true) => {
//   const dates = getDatesFromResults();
//   const toDate = DateTime.fromFormat(String(date), "yyyy-mm-dd").toFormat(
//     "YYYYMMDd",
//   );
//   console.log("dATES Is ", toDate, getIntDate())
//
//   const ret: ResultHeroWithDate[] = [];
//   let ar: string[] = [];
//   if (include) {
//     ar = dates.filter((d) => Number(d) >= Number(toDate));
//   } else {
//     ar = dates.filter((d) => Number(d) > Number(toDate));
//   }
//
//   // const battlesOfDay: ResultHero[] = resultHeroes[a]
//   for (const a of ar) {
//     // const battlesOfDay: ResultHero[] = resultHeroes[a];
//     const tempBattles: ResultHeroWithDate[] = battlesOfDay.map((battle) => {
//       const att = battle.attacker as HeroTeamForWarWithDate;
//       att.date = a;
//       const def = battle.defender as HeroTeamForWarWithDate;
//       def.date = a;
//       return { attacker: att, defender: def, points: battle.points };
//     });
//     let count = 0;
//     for (const battle of tempBattles) {
//       if (battle.points === 20) {
//         ret.push(battle);
//       } else {
//         count++;
//       }
//     }
//     console.log(`Battles with less than 20 points on ${a}: ${count}`);
//   }
//
//   return ret;
// };

export const getFirstDateFromResults = (reversed: boolean) => {
  return getDatesFromResults(reversed)[0];
};

export interface Input {
  att: { name: boolean; team: boolean };
  def: { name: boolean; team: boolean };
}
export interface Filter {
  att: { name: string; team: Hero[] };
  def: { name: string; team: Hero[] };
}
