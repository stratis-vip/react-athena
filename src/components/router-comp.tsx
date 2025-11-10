import {
  BrowserRouter as Router,
  Link,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import React, { useState } from "react";

import { FaBars } from "react-icons/fa";

import Title from "./title.tsx";
import Home from "./home.tsx";
import Rules from "./rules.tsx";
import Champions from "./champions.tsx";
import Program from "./program/index.tsx";
import CTeams from "./c-teams/index.tsx";
import Guides from "./guides.tsx";
import TimeTable from "./time-table.tsx";
import Tests from "./tests.tsx";

const ToLink: React.FC<{ path: string; title: string }> = ({ path, title }) => {
  return (
    <div className={"py-0 px-1"}>
      <Link className="text-xl" to={path}>
        {title}
      </Link>
    </div>
  );
};

const RouterComponent: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Router>
      <div
        id="navbar-top"
        className={`bg-primary p-1   my-0 text-white flex flex-col sm:flex-row sm:items-center`}
      >
        <div id="navbar" className={"flex justify-between"}>
          <div id="badge-top" className={"py-1"}>
            <Title />
          </div>
          <div id="burger" className="sm:hidden self-center mr-1">
            <FaBars
              size={25}
              onClick={() => {
                setOpen(!open);
              }}
            />
            as JSX.Element
          </div>
        </div>
        <div
          id="menuchoices"
          className={`${open ? "hidden" : ""} sm:flex flex flex-col sm:justify-around sm:flex-1 sm:flex-row`}
        >
          <ToLink path={"/"} title="News" />
          <ToLink path={"/rules"} title="Rules" />
          <ToLink path={"/champions"} title="Champions" />
          <ToLink path={"/guides"} title="Guides" />
          <ToLink path={"c-teams"} title="Counters" />
          <ToLink path={"/program"} title="War Schedule" />
          <ToLink path={"/time-table"} title="Time Table" />
          {/*} <!--  <ToLink path={"/tests"} title="Tests" /> --> */}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rules" element={<Rules />} />
        <Route path="champions" element={<Champions />} />
        <Route path="guides" element={<Guides />} />
        <Route path="c-teams" element={<CTeams />} />
        <Route path="program" element={<Program />} />
        <Route path="time-table" element={<TimeTable />} />
        <Route path="tests" element={<Tests />} />
      </Routes>

      <Outlet />
    </Router>
  );
};

<ToLink path={"/"} title="News" />;

export default RouterComponent;
