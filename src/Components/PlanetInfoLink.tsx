import React, { useContext, useState } from "react";
import PlanetContext from "../Context/PlanetContext";
import PlanetInfos from "./PlanetInfos";
const PlanetInfoLink: React.FC = () => {
  const { planetInfos } = useContext(PlanetContext);

  return (
    <div className="planet-info-link">
      <ul className="planet-list">
        {planetInfos!.map((planetInfo) => {
          const {
            planetName,
            svg,
            distanceFromSun,
            averageTemperature,
            radius,
          } = planetInfo;

          return (
            <PlanetInfos
              key={planetName}
              planetName={planetName}
              svg={svg}
              distanceFromSun={distanceFromSun}
              averageTemperature={averageTemperature}
              radius={radius}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PlanetInfoLink;
