import { type Hero, allHeros, allPets } from "herowars-library";
import AvatarHeroPet from "./avatar-hero-pet";
import AvatarHero from "./avatar-hero";
import BreakPoint from "./break-point";
import Battles from "./c-teams/battles/battles"

const Tests: React.FC = () => {
  const heros = [
    { name: "stratis", id: 1 },
    { name: "stratos", id: 2 },
    { name: "stranos", id: 3 },
  ];

  const searchHero = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    if (name.length > 2) {
      const filteredHeroes = heros.filter((h) =>
        h.name.toLowerCase().includes(name.toLowerCase()),
      ) as [Hero];
      console.log(filteredHeroes);
    }
  };

  return (
    <div>
      <h1>Tests Page</h1>
      <input
        className="border p-1"
        type="text"
        onChange={searchHero}
        placeholder="hero name"
      />
      <AvatarHero hero={allHeros[1]} />
      <AvatarHeroPet hero={allHeros[3]} pet={allPets[2]} />
      <BreakPoint />
      <Battles />
    </div>
  );
};

export default Tests;
