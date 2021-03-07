import React from "react";

interface PlanetInfosProps {
  planetName: string;
  averageTemperature: string;
  distanceFromSun?: string;
  radius: string;
  svg: string;
  isDisplayed: boolean;
}
const PlanetInfoCard: React.FC<PlanetInfosProps> = ({
  planetName,
  svg,
  distanceFromSun,
  averageTemperature,
  radius,
}) => {
  return (
    <div className="planet-info-card">
      <div className="planet-info-card__header">
        <img
          className="planet-info-card__header__image"
          src={svg}
          alt={planetName + "logo"}
        />
        <h3>{planetName}</h3>
      </div>

      <div className="planet-info-card__info">
        {distanceFromSun && (
          <div className="planet-info-card__info__distance">
            <p>
              <b>Distance From Sun</b>
            </p>
            <p>{distanceFromSun}</p>
          </div>
        )}
        <div className="planet-info-card__info__temperature">
          <p>
            <b>Avg. Temperature</b>{" "}
          </p>
          <p>{averageTemperature}</p>
        </div>
        <div className="planet-info-card__info__radius">
          <p>
            <b>Radius</b>
          </p>
          <p>{radius}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanetInfoCard;
