import React, { useContext } from "react";
import PlanetContext from "../Context/PlanetContext";
import PlanetInfoLink from "./PlanetInfoLink";
import TimeInput from "./TimeInput";

const SideBar: React.FC = () => {
  const { miliSeconds, setmiliSeconds } = useContext(PlanetContext);

  return (
    <div className="side-bar">
      <TimeInput />
      <PlanetInfoLink />
    </div>
  );
};

export default SideBar;
