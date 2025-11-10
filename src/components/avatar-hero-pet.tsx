import { useEffect, useState } from "react";
import blank from "../data/heros-avatar/0000.png";
import { images } from "../data/heros-avatar/filelist";
import type { Hero, Pet } from "herowars-library";

const AvatarHeroPet: React.FC<{ hero: Hero; pet: Pet }> = ({ hero, pet }) => {
  const [avatarSrc, setAvatarSrc] = useState(undefined);

  useEffect(() => {
    if (pet) {
      import(`../data/pets-avatar/${pet.name}.png`)
        .then((module) => setAvatarSrc(module.default))
        .catch((err) => {
          console.error("Error loading avatar:", err);
          // Set a fallback image
          setAvatarSrc(undefined);
        });
    }
  }, [pet]);

  return (
    <>
      {hero ? (
        <div className="">
          <div className="relative">
            <img
              className=""
              width={60}
              src={images[hero.id]}
              alt={hero.name}
            />
            <div className="absolute top-[-12px] ">
              {pet.id > 0 ? (
                <img
                  className=" rounded-full bg-black"
                  width={24}
                  src={avatarSrc}
                  alt={pet.name}
                />
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <img width={0} src={blank} alt="blank" />
      )}
    </>
  );
};

export default AvatarHeroPet;
