import mercury from "../PlanetSVG/mercury.svg";
import venus from "../PlanetSVG/venus.svg";
import earth from "../PlanetSVG/earth.svg";
import mars from "../PlanetSVG/mars.svg";
import jupiter from "../PlanetSVG/jupiter.svg";
import saturn from "../PlanetSVG/saturn.svg";
import uranus from "../PlanetSVG/uranus.svg";
import neptune from "../PlanetSVG/neptune.svg";
import sun from "../PlanetSVG/sun.svg";

export const planetInfos = [
  {
    planetName: "Sun",
    radius: "696340 KM",
    averageTemperature: "5505°C",
    svg: sun,
    isDisplayed: false,
  },

  {
    planetName: "Mercury",
    radius: "2439 KM",
    distanceFromSun: "57,9 MILLION KM",
    numberOfMoons: "0",
    averageTemperature: "430°C",
    svg: mercury,
    isDisplayed: false,
  },
  {
    planetName: "Venus",
    radius: "6051 KM",
    distanceFromSun: "108,2 MILLION KM",
    numberOfMoons: "0",
    averageTemperature: "471°C",
    svg: venus,
    isDisplayed: false,
  },
  {
    planetName: "Earth",
    radius: "6378 KM",
    distanceFromSun: "149,6 MILLION KM",
    numberOfMoons: "1",
    averageTemperature: "16°C",
    svg: earth,
    isDisplayed: false,
  },
  {
    planetName: "Mars",
    radius: "3396 KM",
    distanceFromSun: "227,9 MILLION KM",
    numberOfMoons: "2",
    averageTemperature: "-28°C",
    svg: mars,
    isDisplayed: false,
  },
  {
    planetName: "Jupiter",
    radius: "71492 KM",
    distanceFromSun: "778,5 MILLION KM",
    numberOfMoons: "67",
    averageTemperature: "-108°C",
    svg: jupiter,
    isDisplayed: false,
  },
  {
    planetName: "Saturn",
    radius: "60268 KM",
    distanceFromSun: "1,42 BILLION KM",
    numberOfMoons: "62",
    averageTemperature: "-138°C",
    svg: saturn,
    isDisplayed: false,
  },
  {
    planetName: "Uranus",
    radius: "25559 KM",
    distanceFromSun: "2,87 BILLION KM",
    numberOfMoons: "27",
    averageTemperature: "-195°C",
    svg: uranus,
    isDisplayed: false,
  },
  {
    planetName: "Neptune",
    radius: "24764",
    distanceFromSun: "3,67 BILLION KM",
    numberOfMoons: "13",
    averageTemperature: "-201°C",
    svg: neptune,
    isDisplayed: false,
  },
];
