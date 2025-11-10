import logo from "../athena.png";
import { useState, useEffect } from "react";
import json from "../../package.json";
import { users } from "../data/users";
import type { User } from "herowars-library";

const Title = () => {
  const [versionShow, setVersion] = useState<boolean>(true);
  const [activeUsers, setActiveUsers] = useState<User[]>([]);

  useEffect(() => {
    setActiveUsers(users.filter((user) => user.active));
  }, []);

  return (
    <div id="badge" className="flex sm:justify-center sm:align-center">
      <img src={logo} width={48} height={48} alt={"athena flag"} />
      <div className="">
        <h3
          className="text-lg"
          onMouseOver={() => setVersion(false)}
          onMouseLeave={() => setVersion(true)}
        >
          {" "}
          New Athena{" "}
          <span style={{ fontSize: "10px" }} hidden={versionShow}>
            {json.version}
          </span>
        </h3>
        <h5 className={`${!activeUsers ? "hidden" : "block"} font-thin`}>
          {" "}
          {activeUsers?.length} members
        </h5>
      </div>
    </div>
  );
};

export default Title;
