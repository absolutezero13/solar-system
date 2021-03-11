import { createContext } from "react";

interface PlanetInfos {
  planetName: string;
  radius: string;
  distanceFromSun?: string;
  numberOfMoons?: string;
  averageTemperature: string;
  svg: string;
}

type ContextProps = {
  miliSeconds: number;
  setmiliSeconds: any;
  planetInfos: PlanetInfos[];
};

const PlanetContext = createContext<Partial<ContextProps>>({});

export default PlanetContext;
