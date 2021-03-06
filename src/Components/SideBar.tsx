import React from "react";
import PlanetInfoLink from "./PlanetInfoLink";
import TimeInput from "./TimeInput";

interface SideBarProps {
  miliSeconds: number;
  setmiliSeconds: any;
}

const SideBar: React.FC<SideBarProps> = ({ miliSeconds, setmiliSeconds }) => {
  return (
    <div className="side-bar">
      <TimeInput miliSeconds={miliSeconds} setmiliSeconds={setmiliSeconds} />
      <PlanetInfoLink />
    </div>
  );
};

export default SideBar;
