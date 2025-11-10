// import resultsHeroes from '../data/results-heroes.json'
import { allHeros, allPets } from "herowars-library";
// import { allTitans } from "../data/titans"
import { DateTime } from "luxon";

import type { DescribeEntityWithShortName, Hero, Pet } from "herowars-library";

export const fromYYYYMMDD = (dateStr: string) => {
  return DateTime.fromFormat(dateStr, "yyyyMMdd").toFormat("yyyy-MM-dd");
};

// export const getTitanNumberFromShortName = (srt: string) => {
//     const r = allTitans.filter((titan) => {
//         return titan.short.toLowerCase() === srt.toLowerCase()
//     })
//     return Number(r[0].id)
// }

// export const getPetNumberFromShortName = (srt: string) => {
//     if (srt !== "") {
//         const r = allPets.filter((pet) => {

//             return pet.short.toLowerCase() === srt.toLowerCase()
//         })
//         if (r[0]?.id === undefined) { debugger }
//         return Number(r[0].id)
//     }
// }

export const findHeroObjectById: (id: number) => Hero = (id) => {
  const val = allHeros.filter((hero) => hero.id === Number(id));
  return val[0] ? val[0] : (null as unknown as Hero);
};

export const findPetObjectById: (id: number) => Pet = (id) => {
  const val = allPets.filter((pet) => pet.id === Number(id));
  return val[0] ? val[0] : (null as unknown as Pet);
};

export const findById = <T extends DescribeEntityWithShortName>(
  obj: T[],
  id: number,
): T | undefined => {
  return obj.find((f) => f.id === id);
};

export const findByShortName = <T extends DescribeEntityWithShortName>(
  obj: T[],
  name: string

): T | undefined => {
  return obj.find(f => f.short.toLowerCase() === name.toLowerCase())
}
