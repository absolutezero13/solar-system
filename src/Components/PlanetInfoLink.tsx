import React from "react";
import { planetInfos } from "../Data/PlanetInfos";
import PlanetInfos from "./PlanetInfos";
const PlanetInfoLink: React.FC = () => {
  return (
    <div className="planet-info-link">
      <ul className="planet-list">
        {planetInfos.map((planetInfo) => {
          const {
            planetName,
            svg,
            distanceFromSun,
            averageTemperature,
            radius,
            isDisplayed,
          } = planetInfo;

          return (
            <PlanetInfos
              key={planetName}
              planetName={planetName}
              svg={svg}
              distanceFromSun={distanceFromSun}
              averageTemperature={averageTemperature}
              radius={radius}
              isDisplayed={isDisplayed}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PlanetInfoLink;
