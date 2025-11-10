import { tips } from "../data/tips";
import type { Tip } from "herowars-library";

import Section from "./helpers/section";
import json from "../../package.json";
import AdventureComp from "./adventures";
import Strongford from "../data/strongfold.tsx";

const Guides = () => {
  return (
    <>
      <Section title={"Adventures"}>
        <div className=" text-center sm:text-xl text-red-500 italic mb-4">
          Doing adventure lower than level 11{" "}
          <span className="font-bold">is not </span>recommended by new athena.
          Resource are more limited.
          <p className="text-black">
            new athena recommends using auto adventure mode with HWA plugin
            ("skip batle" option enabled).
          </p>
        </div>
        <AdventureComp id={11} />
        <AdventureComp id={12} />

        <AdventureComp id={9} />
        <AdventureComp id={10} />
        <AdventureComp id={13} />
        <AdventureComp id={14} />
        {/* <div className="flex  flex-col justify-center items-center">
          <ul>
            {adventures.map((adv) => (
              <li className="sm:text-lg mt-1 ml-2" key={adv.id}>
                <a href={`/adventures/${adv.id}`}>{adv.name}</a>
              </li>
            ))}
          </ul>
        </div> */}
      </Section>
      <Section title={"Assorted Tips"}>
        <div className="my-2 flex flex-col sm:text-xl">
          {tips.map((tip: Tip) => (
            <div className="sm:mx-20 mx-2 my-1 mb-2" key={tip.id}>
              <span className="text-primary">{tip.category}: </span>
              {tip.tip}
            </div>
          ))}
        </div>
      </Section>
      <Section title={"Strongford Quiz"}>
        <div className="text-center">(Version {json.version})</div>
        <Strongford />
      </Section>
    </>
  );
};

export default Guides;
