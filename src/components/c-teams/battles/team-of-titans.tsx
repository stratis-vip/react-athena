import {
  allTitans,
  type Titan,
  type TitanTeam,
  type Info,
} from "herowars-library";
import { useEffect, useState } from "react";
import { findByShortName, fromYYYYMMDD } from "../../functions";
import AvatarTitan from "../../avatar-titan";

const TeamOfTitans: React.FC<{
  date: string;
  parentTeam: TitanTeam;
  reverse: boolean;
  points: number;
}> = ({ date, parentTeam, reverse, points }) => {
  const [info, setInfo] = useState<Info>(null as unknown as Info);
  const [attackerTitans, setAttackerTitans] = useState<Titan[]>([]);
  useEffect(
    () => {
      let teamAttackerTitans: Titan[] = [];
      if (parentTeam !== null) {
        const { id, name, power, titanLineUp } = parentTeam;
        setInfo({ date, id, name, power });
        teamAttackerTitans = titanLineUp
          .map((tit) => findByShortName(allTitans, tit))
          .filter((t): t is Titan => t !== undefined);
      }
      if (reverse) {
        teamAttackerTitans.reverse();
      }
      if (teamAttackerTitans.length === 0) {
        console.log("Team is empty");
        return;
      }
      setAttackerTitans(teamAttackerTitans);
    },
    // eslint-disable-next-line
    [parentTeam],
  );
  return (
    <div
      className={`flex items-center justify-end ${points !== 20 ? "bg-red-100 rounded-xl border-red-300 border-2 border-solid " : ""}`}
    >
      <div className="text-sm mr-2 flex flex-col items-end ">
        <div>{info ? fromYYYYMMDD(info.date) : null}</div>
        <div>{info ? info.name : null}</div>
        <div>{info ? Number(info.power).toLocaleString() : null}</div>
        <div>{info ? points : null}</div>
      </div>
      <div className="flex ">
        <div className={`flex  px-[5px] pb-[5px] rounded-xl items-end `}>
          {attackerTitans?.length > 0
            ? attackerTitans.map((t) => {
                if (t !== undefined) {
                  return <AvatarTitan titan={t} />;
                } else {
                  return null;
                }
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default TeamOfTitans;
