import React, { useRef } from "react";

const Planets: React.FC = () => {
  const planetNeptun = useRef(null);

  console.log(planetNeptun.current);
  return (
    <div className="planets">
      <div ref={planetNeptun} className="planets__neptun-orbit">
        <div className="planet neptun"></div>
      </div>
      <div className="planets__uranus-orbit">
        <div className="planet uranus"></div>
      </div>
      <div className="planets__saturn-orbit">
        <div className="planet saturn"></div>
      </div>
      <div className="planets__jupiter-orbit">
        <div className="planet jupiter"></div>
      </div>
      <div className="planets__mars-orbit">
        <div className="planet mars"></div>
      </div>
      <div className="planets__earth-orbit">
        <div className="planet earth"></div>
      </div>
      <div className="planets__venus-orbit">
        <div className="planet venus"></div>
      </div>
      <div className="planets__mercury-orbit">
        <div className="planet mercury"></div>
      </div>
      <div className="planet sun"></div>
    </div>
  );
};

export default Planets;
