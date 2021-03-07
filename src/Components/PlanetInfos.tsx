import React, { useEffect, useState } from "react";
import PlanetInfoCard from "./PlanetInfoCard";

interface PlanetInfosProps {
  planetName: string;
  averageTemperature: string;
  distanceFromSun?: string;
  radius: string;
  svg: string;
  isDisplayed: boolean;
}

const PlanetInfos: React.FC<PlanetInfosProps> = ({
  planetName,
  svg,
  distanceFromSun,
  averageTemperature,
  radius,
  isDisplayed,
}) => {
  const [displayStatus, setDisplayStatus] = useState(isDisplayed);

  const displayPlanetInfo = () => {
    setDisplayStatus(!displayStatus);
  };

  return (
    <div
      onClick={displayPlanetInfo}
      key={planetName}
      className="planet-list__infos"
    >
      <li>
        <img src={svg} alt="planet-logo" /> <p>{planetName}</p>
      </li>
      {displayStatus && (
        <PlanetInfoCard
          key={distanceFromSun}
          planetName={planetName}
          svg={svg}
          distanceFromSun={distanceFromSun}
          averageTemperature={averageTemperature}
          radius={radius}
          isDisplayed={isDisplayed}
        />
      )}
    </div>
  );
};

export default PlanetInfos;
