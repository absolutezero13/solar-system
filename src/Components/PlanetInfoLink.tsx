import React from "react";
import mercury from "../PlanetSVG/mercury.svg";
import venus from "../PlanetSVG/venus.svg";
import earth from "../PlanetSVG/earth.svg";
import mars from "../PlanetSVG/mars.svg";
import jupiter from "../PlanetSVG/jupiter.svg";
import saturn from "../PlanetSVG/saturn.svg";
import uranus from "../PlanetSVG/uranus.svg";
import neptune from "../PlanetSVG/neptune.svg";
import sun from "../PlanetSVG/sun.svg";
const PlanetInfoLink: React.FC = () => {
  const planets = [
    "Sun",
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  const planetSVGs = [
    sun,
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
  ];
  return (
    <div className="planet-info-link">
      <ul className="planet-list">
        {planets.map((planet, i) => {
          return (
            <li key={planet}>
              <img src={planetSVGs[i]} alt="planet-logo" /> <p>{planet}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlanetInfoLink;
