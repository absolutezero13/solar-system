import React from "react";
import PlanetInfoLink from "./PlanetInfoLink";
import TimeInput from "./TimeInput";

const SideBar: React.FC = () => {
  return (
    <div className="side-bar">
      <TimeInput />
      <PlanetInfoLink />
    </div>
  );
};

export default SideBar;
