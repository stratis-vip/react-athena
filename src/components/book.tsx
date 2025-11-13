import { useEffect, useMemo, useState } from "react";
import { resultsTitans } from "./c-teams/battles/titan-records";
import { findByShortName, fromYYYYMMDD } from "./functions";
import {
  type Battle,
  type TitanTeam,
  type Titan,
  allTitans,
} from "herowars-library";
import { areAllIn } from "./c-teams/battles/battles-utils";
import AvatarTitan from "./avatar-titan";

const parseTeam = (str: string): string[] => {
  try {
    const arr = JSON.parse(str);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
};

const Book: React.FC = () => {
  const dateOfRecords = String(resultsTitans.date);
  const [currentTeam, setCurrentTeam] = useState<string | undefined>(undefined);
  const [results, setResults] = useState<Battle<TitanTeam>[]>([]);

  useEffect(() => {
    const titans = currentTeam
      ?.split(" ")
      .filter((f) => f.trim() != "" && f.length === 3)
      .map((f) => f.toLowerCase());
    if (titans && titans?.length > 0 && titans?.length < 6) {
      const res = resultsTitans.records.filter((rec) =>
        areAllIn(titans!, rec.defender.titanLineUp),
      );
      setResults(res);

      console.log("found ", res.length);
    } else {
      setResults([]);
      console.log("No found teams");
    }
  }, [currentTeam]);

  // --- Compute win statistics ---
  const summary = useMemo(() => {
    const grouped = new Map<string, { wins: number; total: number }>();

    for (const rec of results) {
      const attacker = JSON.stringify(rec.attacker.titanLineUp);
      const entry = grouped.get(attacker) ?? { wins: 0, total: 0 };
      entry.total++;
      if (rec.points >= 20) entry.wins++;
      grouped.set(attacker, entry);
    }

    // Convert to sorted array (by win rate desc)
    const ret = Array.from(grouped.entries())
      .map(([team, { wins, total }]) => ({
        team,
        wins,
        total,
        winRate: total ? (wins / total) * 100 : 0,
      }))
      .sort((a, b) => b.winRate - a.winRate);
    console.log("Summaryy", ret);
    return ret;
  }, [results]);

  return (
    <>
      <div className="text-3xl font-bold">
        Some things about the Book.
        <ul className="text-base">
          <li>
            These statistics are from the batlles up to{" "}
            <span className="font-bold italic">
              {fromYYYYMMDD(dateOfRecords)}
            </span>
          </li>
          <li>
            It gets the records from our battles. Not only our attacks, but our
            opponents too.{" "}
          </li>
          <li>
            Every batlle is considered "fair". So the power difference must be
            less than 100.000 or the attacker must be weaker!{" "}
          </li>
        </ul>
      </div>
      <div>
        <div>Version: {fromYYYYMMDD(dateOfRecords)}</div>
        <div>Battles: {resultsTitans.records.length}</div>
      </div>
      <div>
        <input
          className="border rounded-lg"
          value={currentTeam}
          onChange={(e) => setCurrentTeam(e.currentTarget.value)}
        />
        <div>
          {results.length > 0 && (
            <div className="mt-4">
              <table className="min-w-full border-collapse border text-sm text-left">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border p-2">Attacker Team (Winner)</th>
                    <th className="border p-2">Win Rate</th>
                    <th className="border p-2">Filtered Team</th>
                  </tr>
                </thead>
                <tbody>
                  {summary.map((row) => (
                    <tr key={row.team}>
                      <td className="border p-2 font-mono flex">
                        {parseTeam(row.team).map((team) => (
                          <AvatarTitan
                            titan={
                              findByShortName<Titan>(allTitans, team) ?? null
                            }
                          />
                        ))}
                      </td>
                      <td className="border p-2">
                        {row.wins}/{row.total} ({row.winRate.toFixed(1)}%)
                      </td>
                      <td className="border p-2 font-mono flex">
                        {results[0]?.defender.titanLineUp.map((t) => (
                          <AvatarTitan
                            titan={findByShortName<Titan>(allTitans, t) ?? null}
                          />
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Book;
