import { useEffect, useState } from "react";

import Team from "./team";
import { allHeros } from "herowars-library";
import type { Battle, HeroTeam } from "herowars-library";
import { areAllIn, type Filter } from "./battles-utils";
import { getIntDate } from "./battles-utils";
import { resultHeroes } from "./hero-records";
import { useDeepCompareEffect } from "../../../deep-compare";
import { useFilterState } from "../state";
import SearchTeam from "../../search-team";

const setFiveDaysBefore = (): string => {
  const d = new Date();
  d.setDate(d.getDate() - 5);
  return d.toISOString().slice(0, 10);
};

const Battles = () => {
  //do i need to refresh the db?
  const filter = useFilterState(s => s.filterState)
  const setFilter = useFilterState(s => s.setFilterState)

  const [battleObject, setBattleObject] = useState<Battle<HeroTeam>[]>([]);
  const [filteredBObject, setFilteredBObject] = useState<Battle<HeroTeam>[]>([])
  const [dt, setDate] = useState<string>(setFiveDaysBefore());

  useDeepCompareEffect(() => {
    console.log(JSON.stringify(filter, null, 2))
  }, [filter])
  //change the date so we need to filter DB 
  useEffect(() => {
    if (!dt) return;

    const dateToFilterDB = getIntDate(new Date(dt))
    const tempDb = resultHeroes.records.filter(b => b.date >= dateToFilterDB);
    setBattleObject(tempDb)
    setFilteredBObject(tempDb)
  }, [dt]);

  useDeepCompareEffect(() => {
    console.log("battleObject is changed", battleObject.length);
    if (battleObject.length > 0) {
      console.log(battleObject[0].attacker.heroLineUp, battleObject[0].attacker.name)
    }
  }, [battleObject])


  const filterByNames = (f: Filter, obj: Battle<HeroTeam>[]) => {
    const o = [...obj]
    return o.filter(b =>
      b.attacker.name.toLowerCase().includes(f.att.name.toLowerCase()) &&
      b.defender.name.toLowerCase().includes(f.def.name.toLowerCase())
    );
  }

  const filterByTeams = (_: Filter, obj: Battle<HeroTeam>[]) => {
    const lookupAttTeam = filter.att.team.map(h => h.short.toLowerCase())
    const lookupDefTeam = filter.def.team.map(h => h.short.toLowerCase())
    const o = [...obj]
    return o.filter(
      b =>
        areAllIn(lookupAttTeam, b.attacker.heroLineUp) &&
        areAllIn(lookupDefTeam, b.defender.heroLineUp)
    )
  }



  useDeepCompareEffect(() => {
    const tempByNames = filterByNames(filter, battleObject)
    const temp = filterByTeams(filter, tempByNames)

    setFilteredBObject(temp)
  }, [filter, battleObject])


  const [hide, setHide] = useState(false);
  const [hideHeros, setHideHeros] = useState(true);

  const handleAttackerNameChange = (name: string) => {
    setFilter((prev) => ({
      ...prev,
      att: { ...prev.att, name },
    }));
  }

  const handleDefenderNameChange = (name: string) => {
    setFilter((prev) => ({
      ...prev,
      def: { ...prev.def, name },
    }));
  };

  /**
   * Handles the change event for the date input field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object from the date input field.
   */
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.currentTarget.value);
    // setNeeRefreshDb(true);
  };

  return (
    <div>
      <div>{dt}</div>
      <div className="flex justify-center ">
        <div className="text-4xl font-extrabold">
          Battles record         </div>
        <div
          className="ml-3 flex  items-end cursor-pointer text-lg text-blue-500"
          onClick={() => setHide((h) => !h)}
        >
          <h1>{hide === true ? "Show battles" : "Hide battles"} </h1>
        </div>
      </div>
      <div hidden={hide}>
        <h1 className="text-2xl">Instructions</h1>

        <p className="mb-1">
          For Titan counters, for now, please use{" "}
          <a
            href="https://hero-wars-guide.web.app/guides/titan-brawl"
            target="_blank"
            rel="noreferrer"
          >
            "the book"
          </a>
        </p>
        <p className="mb-1">
          Set the date you want to check from! System automaticaly set 5 days
          before.
        </p>
        <p className="mb-1">
          Complete filters if you want to get results for certain user or team
          Line up. Whern a flter is entered correct, text is turn to green!{" "}
        </p>
        <p className="mb-1">
          <span className="font-semibold italic">Attacker</span> and{" "}
          <span className="font-semibold italic">Defender</span> texts is
          reffering to user name (for example stratis - case insensitive)
        </p>
        <p className="mb-1">
          <span className="font-semibold italic">Attacker</span> and{" "}
          <span className="font-semibold italic">Defender team</span> texts is
          reffering to heros. Heros must entered by 3first digits, and when get
          green, press enter to add to the team.
        </p>
        <p className="mb-1">
          You can always see the 3letter code of any hero, clicking at "show
          Heros names"
        </p>

        <div>
          <div className="flex mb-4">
            <p className="font-bold italic">
              Heroes names (for filtering teams you need to put the 3letter name
              with space between heros)
            </p>
            <p
              className="ml-3 flex  items-end cursor-pointer text-blue-500"
              onClick={() => setHideHeros((h) => !h)}
            >
              {hideHeros ? "Show Heroes names" : "Hide heroes names"}
            </p>
          </div>
          <div hidden={hideHeros}>
            <div className="mx-5 flex flex-wrap flex-row-reverse w-full">
              {allHeros.map((h) => (
                <div
                  className="flex-[1_1_140px] shadow border-1 rounded-lg mr-2"
                  key={h.id}
                >
                  <span className="font-bold">{h.short}</span>
                  <div> {h.name}</div>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-red-400 text-center font-extrabold text-3xl">
          ALL filters work{" "}
          <span className="text-lg">
            <br />
            (use shortnames from the list "Show hero names", just before this
            title!)
          </span>
        </p>

        {/* Input dates */}
        <div className="flex items-center  my-2 justify-center mt-4">
          <label className="" htmlFor="fromDate">
            Search Battles from:{" "}
          </label>
          <input
            className="border rounded-lg px-2 py-1 mx-2"
            value={dt || "2025-11-02"}
            type="date"
            onChange={onChangeDate}
          />
          <span>
            {battleObject.length > 0
              ? battleObject.length + " battles won"
              : "no battles recorded"}
          </span>
        </div>

        <div className="flex justify-around items-center">
          <h1>Filters</h1>
          <div className="flex w-5/6 justify-around">
            {/* Handle attacker filters */}
            <div className="flex flex-col w-1/2">
              <label htmlFor="attacker">Attacker</label>
              <div>
                <input
                  className="border rounded-lg px-2 py-1  w-2/3"
                  id="attacker"
                  type="text"
                  placeholder="attacker name"
                  value={filter.att?.name !== null ? filter.att?.name : ""}
                  onChange={(e) =>
                    handleAttackerNameChange(e.currentTarget.value)
                  }
                />
              </div>
              <SearchTeam mode="att" />
            </div>

            {/* Handle defender filters */}
            <div className="flex flex-col w-1/2">
              <label htmlFor="defender">Defender </label>
              <div>
                <input
                  className="border rounded-lg px-2 py-1 w-2/3"
                  id="defender"
                  type="text"
                  placeholder="defender name"
                  value={filter.def?.name !== null ? filter.def?.name : ""}
                  onChange={(e) =>
                    handleDefenderNameChange(e.currentTarget.value)
                  }
                />
              </div>
              <SearchTeam mode="def" />
            </div>
          </div>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            results{" "}
          </span>
        </div>
        <div className="flex flex-col text-center">
          <div>
            {battleObject.length === 0 ? (
              <div className="text-2xl font-bold text-red-400">
                No battles found
              </div>
            ) : (
              <div className="text-2xl font-bold text-green-400">
                {filteredBObject.length} of {battleObject.length} battles found
              </div>
            )}
          </div>
          <div className="flex ">
            <div className="mr-5 pr-12 border-black border-r-4">
              {filteredBObject.map((bat, idx) => {
                return (
                  <Team
                    key={`att-team-${idx}`}
                    date={bat.date.toString()}
                    parentTeam={bat.attacker}
                    reverse={false}
                    points={bat.points}
                  />
                );
              })}
            </div>
            <div>
              {filteredBObject.map((bat, idx) => {
                return (
                  <Team
                    key={`def-team-${idx}`}
                    date={bat.date.toString()}
                    parentTeam={bat.defender}
                    reverse={false}
                    points={bat.points}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Battles;

