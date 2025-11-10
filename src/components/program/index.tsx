import { useEffect, useState } from "react";

import { silverProgramString } from "./data/silver";
import { bronzeProgramString } from "./data/bronze";
import { getOpponents, readData } from "./program-utils";
import json from "../../../package.json";
import type { TeamForProgramInput } from "herowars-library";

interface Json {
  name: string;
  league: string;
}

const gold: boolean =
  (json as unknown as Json).league?.toLowerCase() === "gold";

export default function Rules() {
  const [bronze, setBronze] = useState<TeamForProgramInput[]>([]);
  const [silver, setSilver] = useState<TeamForProgramInput[]>([]);

  useEffect(() => {
    if (bronze.length === 0) {
      const bronzeLocal = readData(bronzeProgramString, "bronze");
      setBronze(bronzeLocal);
    }
  }, [bronze]);

  useEffect(() => {
    if (silver.length === 0) {
      const silverLocal = readData(silverProgramString, "silver");
      setSilver(silverLocal);
    }
  }, [silver]);

  const days = ["mon", "tue", "wed", "thu", "fri"];
  return (
    <div className="text-primary font-bold sm:mt-10 mt-3 mx-2">
      {gold ? (
        <div className="flex flex-col sm:items-center sm:mt-10">
          <h3 className="text-xl sm:text-3xl center sm:mb-5 mb-2">
            {" "}
            Gold League
          </h3>
          <div className="">
            <div className="text-black">
              <div className="font-normal text-sm sm:text-xl text-center">
                Gold is a randomly seeded and random order Round-Robin (seeding
                happens at some unknown point between the end of the promotion
                match on Saturday, and the first match on Monday). <br />
                <span className="font-semibold text-red-400">
                  As a result the only match that is absolutely known is that of
                  Friday due to process of elimination.
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex flex-col sm:items-center sm:mt-10">
        <h3 className="text-xl sm:text-3xl center sm:mb-5 mb-2">
          {" "}
          Silver League
        </h3>
        <div className="">
          <div className="text-black">
            <div className="font-normal text-sm sm:text-xl">
              {silver.length > 0 &&
                silver.map((team) => (
                  <div
                    key={team.position}
                    className={`${team.name === "new athena" ? "bg-orange-300" : "bg-none"
                      } ${team.name === "_athena_" ? "bg-purple-300" : "bg-none"
                      } grid  sm:grid-cols-6 sm:gap-5 sm:text-2xl mb-5 sm:mb-3`}
                  >
                    <div className="font-bold"> {team.name}</div>
                    {getOpponents(Number(team.position), team.league).map(
                      (r, idx) => {
                        return (
                          <div key={team.position} className="flex">
                            <div className="sm:hidden font-semibold">
                              {days[idx]} ➠{" "}
                            </div>
                            {r}-{silver[r - 1].name}
                          </div>
                        );
                      },
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-primary font-bold sm:m-10 mt-3">
        <div className="flex flex-col sm:items-center sm:mt-10">
          <h3 className="text-xl sm:text-3xl center sm:mb-5 mb-2">
            {" "}
            Bronze League
          </h3>
          <div className="">
            <div className="text-black">
              <div className="font-normal sm:text-xl">
                {bronze.length > 0 &&
                  bronze.map((team) => (
                    <div
                      key={team.position}
                      className={`${team.name === "new athena" ? "bg-orange-300" : "bg-none"
                        } ${team.name === "_athena_" ? "bg-purple-300" : "bg-none"
                        } grid  sm:grid-cols-6 sm:gap-5 sm:text-2xl mb-5 sm:mb-3`}
                    >
                      <div className="font-bold"> {team.name}</div>
                      {getOpponents(Number(team.position), team.league).map(
                        (r, idx) => (
                          <div className="flex" key={team.name}>
                            <div className="sm:hidden font-semibold">
                              {days[idx]} ➠{" "}
                            </div>
                            {r} -{bronze[r - 1]?.name ? bronze[r - 1].name : ""}
                          </div>
                        ),
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
