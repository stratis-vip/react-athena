import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { adventures } from "../data/adventures.ts";
import type { Adventure, Notes, Paths } from "herowars-library";
import { useParams } from "react-router-dom";

const AdventureComp: React.FC<{ id: number }> = ({ id }) => {
  const params = useParams();
  const { aid } = params;
  const [adv, setAdventure] = useState<Adventure>();

  useEffect(() => {
    if (aid) {
      setAdventure(adventures.filter((a) => a.id === Number(aid))[0]);
    }
  }, [aid]);

  useEffect(() => {
    if (id) {
      setAdventure(adventures.filter((a) => a.id === Number(id))[0]);
    }
  }, [id]);

  if (adv == null) return null;

  // const { buffs } = adv;
  return (
    <>
      <h1 className="my-5 text-lg sm:text-4xl text-center text-primary">
        {adv?.name}
      </h1>

      <Section title={"Recommended Solution"} array={adv.paths}>
        <div className="left ml-2 ">
          <a href={adv?.images?.solution} target="_blank" rel="noreferrer">
            <img
              src={adv.images.thumb}
              width={150}
              height={89}
              alt="adventure"
            />
          </a>
        </div>
        <div className="right ml-2 sm:ml-10">
          {adv.paths.map((path, idx) => {
            return (
              <p key={idx}>
                {path.colour}: {path.numbers}
              </p>
            );
          })}
        </div>
      </Section>

      <Section title={"Notes"} array={adv.notes as Notes[]}>
        <div className="right ml-2 sm:ml-10">
          {adv.notes?.map((note) => (
            <p className="mb-1" key={note.id}>
              <span className="text-bold">{note.id}.</span> {note.description}
            </p>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AdventureComp;

const Section = (
  props: PropsWithChildren<{ title: string; array: Notes[] | Paths[] }>,
) => {
  return (
    <div className={`${props.array ? "block" : "hidden"}`}>
      <h1 className="font-bold text-center sm:text-xl mb-2">{props.title}</h1>

      <div className="flex justify-center sm:text-xl mb-10">
        {props.children}
      </div>
    </div>
  );
};
