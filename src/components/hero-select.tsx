import { allHeros, type Hero } from "herowars-library";
import type { Dispatch } from "react";
import type { SetStateAction } from "react";

import { images } from "../data/heros-avatar/filelist";

const HeroSelect: React.FC<{
  hIndex: number;
  setHeroIndex: Dispatch<SetStateAction<number>>;
  hero: Hero;
}> = ({ hIndex, setHeroIndex, hero }) => {
  return (
    <div className="flex flex-row items-center">
      <div>
        <select
          className="block appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={hIndex}
          onChange={(e) => setHeroIndex(Number(e.target.value))}
        >
          <option value={0}> please choose a hero</option>
          {allHeros.map((hero) => (
            <option key={hero.id} value={hero.id}>
              {hero.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {hero ? (
          <>
            <img
              className="ml-2 rounded-full border-black border-2 "
              width={40}
              src={images[hero.id]}
              alt={hero.name}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSelect;
