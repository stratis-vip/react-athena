import React, { useState } from "react";
import { type Hero, allHeros } from "herowars-library";
import { useFilterState } from "./c-teams/state";
import { useDeepCompareEffect } from "../deep-compare";

const SearchTeam: React.FC<{ mode: string }> = ({ mode }) => {
  const [hero, setHero] = useState("");
  const [heroFound, setHeroFound] = useState(false);

  const setFilter = useFilterState(s => s.setFilterState)
  const team = useFilterState(s => s.filterState)

  useDeepCompareEffect(() => {
    if (mode === "att") {
      setFilter((prev) => ({ ...prev, att: { ...prev.att, team: team.att.team } }));
    } else {
      setFilter((prev) => ({ ...prev, def: { ...prev.def, team: team.def.team } }));
    }

    console.log("FILTER team changed to => ", JSON.stringify(team, null, 1))
  }, [team]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const localHero = e.target.value.toLowerCase();

    if (localHero.length < 3) {
      setHero(localHero);
      if (heroFound) {
        setHeroFound(false);
        return;
      }
    }

    if (heroFound) {
      return;
    }

    for (const h of allHeros) {
      if (
        h.name.toLowerCase() === localHero ||
        h.short.toLowerCase() === localHero
      ) {
        setHeroFound(true);
        setHero(localHero);

        return;
      }
    }
    setHero(localHero);
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const t = mode === "att" ? team.att.team : team.def.team;
      if (heroFound) {
        if (t.length > 4) {
          alert("Team is full");
          setHero("");
          setHeroFound(false);
          return;
        }
        if (
          t.filter((h) => h.short.toLowerCase() === hero.toLowerCase())
            .length > 0
        ) {
          alert("Hero already added");
          setHero("");
          setHeroFound(false);

          return;
        }
        const localHero: Hero = allHeros.filter(
          (h) => h.short.toLowerCase() === hero.toLowerCase(),
        )[0];

        if (mode === "att") {
          setFilter(prev => (
            {
              ...prev,
              att: { ...prev.att, team: [...prev.att.team, localHero] },
            }))
        } else {

          setFilter(prev => ({
            ...prev,
            def: { ...prev.def, team: [...prev.def.team, localHero] },
          }))
        }
        setHero("");
        setHeroFound(false);
      }
    }
  };

  const handleDelete = (hero: Hero) => {
    const t = mode === "att" ? team.att.team : team.def.team;

    const newTeam = t.filter(h => h.id !== hero.id)
    if (mode === "att") {
      setFilter(prev => ({
        ...prev, att: { ...prev.att, team: newTeam }
      }))
    } else {
      setFilter(prev => ({
        ...prev, def: { ...prev.def, team: newTeam }
      }))
    }
  };

  return (
    <div>
      <label className="mt-2" htmlFor={`${mode}-Team`}>
        Attacker Team
      </label>
      <div className={heroFound ? "text-green-400" : "text-red-400"}>
        <input
          className="border rounded-lg px-2 py-1 w-[95%]"
          type={`${mode}-Team`}
          id={`${mode}-Team`}
          placeholder={mode === "att" ? "attacker team" : "defender team"}
          value={hero}
          onChange={handleChange}
          onKeyUp={handleEnter}
        />
      </div>
      <div>
        <Tag team={mode === "att" ? team.att.team : team.def.team} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default SearchTeam;

const Tag: React.FC<{ team: Hero[]; onDelete: (h: Hero) => void }> = ({
  team,
  onDelete,
}) => {
  return (
    <div className="flex flex-wrap">
      {team.map((h) => (
        <div className="flex justify-around bg-gray-200 rounded-lg px-2 py-1 m-1">
          <div key={h.id}>{h.name}</div>
          <div
            className="ml-4 font-bold cursor-pointer"
            onClick={() => onDelete(h)}
          >
            x
          </div>
        </div>
      ))}
    </div>
  );
};
