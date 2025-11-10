import blank from "../data/heros-avatar/0000.png";

import { images } from "../data/heros-avatar/filelist";
import type { Hero } from "herowars-library";

// const makeString = (idOfHero: number): string => {
//   return String(idOfHero).padStart(4, "0");
// };

const AvatarHero: React.FC<{ hero: Hero }> = ({ hero }) => {
  return (
    <>
      {hero ? (
        <div className="text-sm flex items-center mb-1 mx-1 border-2 py-1 pr-3 pl-1 rounded-xl shadow-md">
          <img
            className="rounded-full border-black border-2 "
            width={48}
            src={images[hero.id]}
            alt={hero.name}
          />
          <span className="font-semibold ml-1">{hero.name}</span>
        </div>
      ) : (
        <img width={0} src={blank} alt="blank" />
      )}
    </>
  );
};

export default AvatarHero;
