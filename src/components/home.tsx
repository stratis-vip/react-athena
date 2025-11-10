import React, { useEffect } from "react";
import { news } from "../data/news";
import type { News } from "herowars-library";

const Home: React.FC = () => {
  const [year, setYear] = React.useState<number>(new Date().getFullYear()); // 2025
  const [newsOfYear, setNewsOfYear] = React.useState<News[]>([]);

  const uniqueYears = Array.from(
    new Set(
      news.map((item) => {
        const date = new Date(item.date).getFullYear();
        if (!Number.isNaN(date)) {
          return new Date(item.date).getFullYear();
        } else {
          return undefined;
        }
      }),
    ),
  ).filter((year) => year !== undefined);

  useEffect(() => {
    setNewsOfYear(
      news.filter((item) => new Date(item.date).getFullYear() === year),
    ); // 2025
  }, [year]);

  return (
    <div className="flex flex-col items-center mt-5 sm:mt-10 text-xl">
      <div className={``}>
        <div className="flex justify-center items-center mb-3">
          <div className="text-3xl text-center">News of year</div>
          <div className="flex justify-center">
            <select
              className="mt-2 p-1 text-2xl border rounded-lg mx-2 shadow cursor-pointer"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
            >
              {uniqueYears.map((localYear, index) => (
                <option key={index} value={localYear}>
                  {localYear}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* <div className="text-3xl text-center col-start-2">News</div> */}
        <div id="news" className="text-lg sm:text-xl ">
          {newsOfYear.map((neo, index) => (
            <div
              id="newsTable"
              key={index}
              className="mb-3 text-lg sm:text-xl flex sm: w-[500px] lg:w-[750px] md:w-[600px] xl:w-[900px] 2xl:w-[1200px]"
            >
              <div className="w-36 text-right pr-2">
                <span className="font-extrabold text-primary">{neo.date}:</span>
              </div>
              <div className="flex-1">
                {neo.text}
                {neo.place && <span> ({neo.place}th place</span>}
                {neo.place && neo.points ? ` with ${neo.points} points)` : ""}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
