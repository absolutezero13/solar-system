import React, { useContext, useState } from "react";
import PlanetContext from "../Context/PlanetContext";

const Planets: React.FC = () => {
  const { miliSeconds } = useContext(PlanetContext);

  return (
    <div className="planets">
      <div
        style={{ animationDuration: `${miliSeconds * 165}ms` }}
        className="planets__neptun-orbit"
      >
        <div className="planet neptun"></div>
      </div>
      <div
        style={{ animationDuration: `${miliSeconds * 84}ms` }}
        className="planets__uranus-orbit"
      >
        <div className="planet uranus"></div>
      </div>
      <div
        style={{ animationDuration: `${miliSeconds * 29}ms` }}
        className="planets__saturn-orbit"
      >
        <div className="planet saturn"></div>
      </div>
      <div
        style={{ animationDuration: `${miliSeconds * 12}ms` }}
        className="planets__jupiter-orbit"
      >
        <div className="planet jupiter"></div>
      </div>
      <div
        style={{ animationDuration: `${miliSeconds * 2}ms` }}
        className="planets__mars-orbit"
      >
        <div className="planet mars"></div>
      </div>
      <div
        style={{ animationDuration: `${miliSeconds}ms` }}
        className="planets__earth-orbit"
      >
        <div className="planet earth"></div>
      </div>
      <div
        style={{ animationDuration: `${(miliSeconds * 2) / 3}ms` }}
        className="planets__venus-orbit"
      >
        <div className="planet venus"></div>
      </div>
      <div
        style={{ animationDuration: `${miliSeconds / 4}ms` }}
        className="planets__mercury-orbit"
      >
        <div className="planet mercury"></div>
      </div>
      <div className="planet sun"></div>
    </div>
  );
};

export default Planets;
