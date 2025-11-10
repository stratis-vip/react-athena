import { useEffect, useState } from "react";
import HeroSelect from "../../hero-select";
import AvatarHero from "../../avatar-hero";
import { countersByIndex, allHeros } from "herowars-library";

import type { Hero } from "herowars-library";
import { findById } from "../../functions";

const HerCounters = () => {
  const [hide, setHide] = useState<boolean>(false);
  const [heroIndex, setHeroIndex] = useState<number>(0);
  const [counters, setCounters] = useState<Hero[]>([]);
  const [hero, setHero] = useState<Hero | null>(null);

  const getCounters: (id: number) => Hero[] = (id) => {
    const hero = findById<Hero>(allHeros, id);
    const cc = hero ? countersByIndex[String(hero.id)] : [];

    return hero ? cc
      .map((cId) => findById(allHeros, cId))
      .filter(f => f !== undefined) : [];
  };

  useEffect(() => {
    console.log("counters changed:", counters);
  }, [counters]);

  useEffect(() => {
    console.log("heroindex changed", heroIndex);

    if (heroIndex > 0) {
      const heroLocal = findById(allHeros, heroIndex);
      if (heroLocal) {
        setHero(heroLocal);
        setCounters(getCounters(heroLocal.id));
      }
    } else {
      setCounters([]);
      setHero(null);
    }
  }, [heroIndex]);

  return (
    <div className="flex flex-col">
      <div className="">
        <div className="flex justify-center">
          <h1 className="mt-5 text-4xl font-extrabold">Heros counters</h1>
          <div
            className="ml-3 flex  items-end cursor-pointer text-lg text-blue-500"
            onClick={() => setHide((h) => !h)}
          >
            <h1>{hide === true ? "Show counters" : "Hide counters"} </h1>
          </div>
        </div>

        <div hidden={hide}>
          <div className="my-2 mb-4">
            <p>
              Choose an hero from the dropdown box, and you will see
              counter-heros for this one.{" "}
            </p>
            <p>
              Keep in mind that these are suggestions from{" "}
              <a
                className="text-blue-500 font-extralight"
                rel="noreferrer"
                target="_blank"
                href="https://www.herowarscentral.com/post/top-5-counters-to-every-hero"
              >
                HeroWarsCentral site
              </a>
              .
            </p>
            <p>
              Isaac, Julius and Polaris suggestions are from{" "}
              <a
                className="text-blue-500 font-extralight"
                rel="noreferrer"
                target="_blank"
                href="https://omg.rocks/hero-counters-hero-wars-dominion-era"
              >
                omg.rocks site
              </a>
              .
            </p>
            <p>If something is wrong, report it to discord channel!</p>
          </div>
          <HeroSelect
            hIndex={heroIndex}
            setHeroIndex={setHeroIndex}
            hero={hero as Hero}
          />
          <CounterResult hIdx={heroIndex} counters={counters} />
        </div>
      </div>
    </div>
  );
};

const CounterResult: React.FC<{ hIdx: number; counters: Hero[] }> = ({
  hIdx,
  counters,
}) => {
  return (
    <>
      <div className="mt-5">
        {counters && counters.length > 0 ? (
          <div>Countered by these heros (best on the left): </div>
        ) : null}
      </div>
      <div className="flex justify-between">
        {hIdx > 0 && counters?.length === 0 ? (
          <span className="text-red-400 font-semibold">
            There is no known counter yet!
          </span>
        ) : null}
        {counters?.map((hero) => (
          <AvatarHero key={hero.id} hero={hero} />
        ))}
      </div>
    </>
  );
};
export default HerCounters;
