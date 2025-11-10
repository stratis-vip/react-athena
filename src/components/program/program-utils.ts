import type { League, TeamForProgramInput, sortObjectByProperty } from "herowars-library";

/** Parses the provided data string and returns an array of Team objects sorted by their position.
 *
 * @param data - The raw data string containing team information, where each line represents a team.
 * @param league - The league to which the teams belong.
 * @returns An array of Team objects sorted by their position.
 *
 * The data string is expected to have the following format:
 * ```
 * Position,OtherField,TeamName,OtherField
 * 1,SomeData,"Team A",SomeData
 * 2,SomeData,"Team B",SomeData
 * ...
 * ```
 * The first line is considered the title and will be removed.
 * Each subsequent line represents a team, with fields separated by commas.
 * The team name is expected to be enclosed in double quotes.
 */
export const readData: (
  data: string,
  league: League,
) => TeamForProgramInput[] = (data, league) => {
  //getting all data from raw file
  const firstWave: string[] = data.split("\n").filter((pro) => pro !== "");

  //first element is the title of the data so we need to remove it
  firstWave.shift();

  //get teams from firstWave
  const secondWave: string[][] = firstWave.map((f) => f.split(","));

  const teams: TeamForProgramInput[] = secondWave
    .map((team) => {
      return {
        name: team[2].trim().slice(1, -1),
        position: Number(team[0]),
        league,
      };
    })
    .sort(sortFunctionByPosition);

  return teams;
};

/** Gets the list of opponent positions based on the team's position and league.
 *
 * @param teamPosition - The position of the team in the league.
 * @param league - The league in which the team is playing. Can be "bronze" or "silver".
 * @returns An array of opponent positions.
 *
 * In the "bronze" league:
 * - If the team position is odd, opponents are calculated by adding 7 and then 6 repeatedly, wrapping around at 30.
 * - If the team position is even, opponents are calculated by subtracting 7 and then 6 repeatedly, wrapping around at 30.
 *
 * In the "silver" league:
 * - If the team position is odd, opponents are calculated by adding 3 and then 2 repeatedly, wrapping around at 10.
 * - If the team position is even, opponents are calculated by subtracting 3 and then 2 repeatedly, wrapping around at 10.
 */
export const getOpponents = (
  teamPosition: number,
  league: League,
): number[] => {
  //is even
  const opponents = [];
  const position = teamPosition;
  if (league === "bronze") {
    if (teamPosition % 2 !== 0) {
      let next = position + 7;
      if (next > 30) {
        next -= 30;
      }
      for (let i = 0; i < 5; ++i) {
        opponents.push(next);
        next = next + 6;
        if (next > 30) {
          next -= 30;
        }
      }
    } else {
      let next = position - 7;
      if (next < 0) {
        next += 30;
      }
      for (let i = 0; i < 5; ++i) {
        opponents.push(next);
        next = next - 6;
        if (next < 0) {
          next += 30;
        }
      }
    }
  } else {
    //Silver

    if (teamPosition % 2 !== 0) {
      let next = position + 3;
      if (next > 10) {
        next -= 10;
      }
      for (let i = 0; i < 5; ++i) {
        opponents.push(next);
        next = next + 2;
        if (next > 10) {
          next -= 10;
        }
      }
    } else {
      let next = position - 3;
      if (next < 0) {
        next += 10;
      }
      for (let i = 0; i < 5; ++i) {
        opponents.push(next);
        next = next - 2;
        if (next < 0) {
          next += 10;
        }
      }
    }
  }
  return opponents;
};

/** A sorting function that sorts objects of type `Team` by their `position` property in ascending order.
 *
 * @param a - The first `Team` object to compare.
 * @param b - The second `Team` object to compare.
 * @returns A negative number if `a.position` is less than `b.position`, zero if they are equal, or a positive number if `a.position` is greater than `b.position`.
 */
const sortFunctionByPosition: sortObjectByProperty<TeamForProgramInput> = (
  a,
  b,
) => a.position - b.position;
