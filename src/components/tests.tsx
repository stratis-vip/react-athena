import AvatarTitan from "./avatar-titan";
import { allTitans, type TitanTeam } from "herowars-library";
import TeamOfTitans from "./c-teams/battles/team-of-titans";

const Tests: React.FC = () => {
  const tTeam: TitanTeam = {
    id: 1,
    name: "first",
    power: 100,
    titanLineUp: ["ara", "vul", "ign", "vul", "ten"],
    totem: [
      {
        totemType: "f",
        stars: 6,
        level: 130,
        fusion: [
          {
            skill: "",
            level: 1,
          },
        ],
      },
    ],
  };
  return (
    <div>
      <h1>Tests Page</h1>

      <AvatarTitan titan={allTitans[0]} />
      <TeamOfTitans
        date="20251011"
        parentTeam={tTeam}
        reverse={false}
        points={20}
      />
    </div>
  );
};

export default Tests;
