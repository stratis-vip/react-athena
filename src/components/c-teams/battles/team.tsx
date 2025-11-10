import { useEffect, useState } from "react";
import AvatarHeroPet from "../../avatar-hero-pet";
import { findByShortName, fromYYYYMMDD } from "../../functions";
import {
  type Info,
  type HeroTeam,
  type Pet,
  type TeamAttacker,
  type Hero,
  allPets,
  allHeros,
} from "herowars-library";

export const Team: React.FC<{
  date: string;
  parentTeam: HeroTeam;
  reverse: boolean;
  points: number | null;
}> = ({ date, parentTeam, reverse, points }) => {
  const [info, setInfo] = useState<Info>(null as unknown as Info);
  const [pet, setPet] = useState<Pet | undefined>(undefined);
  const [avatarSrc, setAvatarSrc] = useState(undefined);
  const [attackerHeros, setAttackerHeros] = useState<TeamAttacker[]>(
    null as unknown as TeamAttacker[],
  );

  useEffect(() => {
    if (pet) {
      import(`../../../data/pets-avatar/${pet.name}.png`)
        .then((module) => setAvatarSrc(module.default))
        .catch((err) => {
          console.error("Error loading avatar:", err);
          // Set a fallback image
          setAvatarSrc(undefined);
        });
    }
  }, [pet]);

  useEffect(() => {
    if (parentTeam !== null) {
      const { id, name, power, heroLineUp, petLineUP, pet } = parentTeam;
      setInfo({ date, id, name, power });
      const teamPet = findByShortName<Pet>(allPets, pet);
      const teamAttackerHeros: Hero[] = heroLineUp
        .map((hero) => findByShortName(allHeros, hero))
        .filter((h): h is Hero => h !== undefined);
      const teamAttackerPets: Pet[] = petLineUP
        .map((petName) => findByShortName(allPets, petName))
        .filter((p): p is Pet => p !== undefined);
      const teamAttacker: TeamAttacker[] = [];
      for (let i = 0; i < 5; i++) {
        teamAttacker.push({
          hero: teamAttackerHeros[i],
          pet: teamAttackerPets[i],
        });
      }
      if (reverse) {
        teamAttacker.reverse();
      }
      if (teamAttacker.length === 0) {
        console.log("Team is empty");
        return;
      }
      setAttackerHeros(teamAttacker);
      setPet(teamPet);
    }
    // eslint-disable-next-line
  }, [parentTeam]);

  return (
    <>
      <div className={`flex items-center justify-end ${points !== 20 ? "bg-red-100 rounded-xl border-red-300 border-2 border-solid " : ""}`}>

        <div className="text-sm mr-2 flex flex-col items-end ">
          <div>{info ? fromYYYYMMDD(info.date) : null}</div>
          <div>{info ? info.name : null}</div>
          <div>{info ? Number(info.power).toLocaleString() : null}</div>
          <div>{info ? points : null}</div>
        </div>
        <div className="flex ">
          <div className={`flex pt-4 px-[5px] pb-[5px] rounded-xl items-end `}>

            {pet ? (
              <img
                className=" rounded-full bg-black mr-1"
                width={44}
                src={avatarSrc}
                alt={pet.name}
              />
            ) : null}
            {attackerHeros?.length > 0
              ? attackerHeros.map((p) => {
                if (p.hero !== undefined) {
                  return (
                    <AvatarHeroPet
                      key={p.hero.id}
                      hero={p.hero}
                      pet={p.pet}
                    />
                  );
                } else {
                  return null;
                }
              })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
