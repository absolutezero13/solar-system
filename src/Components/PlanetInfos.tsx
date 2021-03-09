import React, { useContext, useState } from "react";
import PlanetContext from "../Context/PlanetContext";
import PlanetInfoCard from "./PlanetInfoCard";

interface PlanetInfosProps {
  planetName: string;
  averageTemperature: string;
  distanceFromSun?: string;
  radius: string;
  svg: string;
}

const PlanetInfos: React.FC<PlanetInfosProps> = ({
  planetName,
  svg,
  distanceFromSun,
  radius,
  averageTemperature,
}) => {
  const [displayStatus, setDisplayStatus] = useState(false);
  const displayPlanetInfo = () => {
    setDisplayStatus(!displayStatus);
  };

  return (
    <div onClick={displayPlanetInfo} className="planet-list__infos">
      <li>
        <img src={svg} alt="planet-logo" /> <p>{planetName}</p>
      </li>
      {displayStatus && (
        <PlanetInfoCard
          planetName={planetName}
          svg={svg}
          distanceFromSun={distanceFromSun}
          averageTemperature={averageTemperature}
          radius={radius}
        />
      )}
    </div>
  );
};

export default PlanetInfos;
