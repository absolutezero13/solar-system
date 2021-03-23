import React, { useState } from "react";
import PlanetInfoCard from "./PlanetInfoCard";
import { motion } from "framer-motion";
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
        <motion.img
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.8}
          src={svg}
          alt="planet-logo"
        />
        <p>{planetName}</p>
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
