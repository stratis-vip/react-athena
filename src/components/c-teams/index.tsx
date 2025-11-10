import Battles from "./battles/battles";
import HerCounters from "./counters/hero-counters.tsx";

// import { useState } from "react"
const CTeams = () => {
  return (
    <>
      <div className="flex flex-col items-center ">
        <HerCounters />
        <Battles />
      </div>
    </>
  );
};

export default CTeams;
