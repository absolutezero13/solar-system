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
  setmiliSeconds: (ms: number) => void;
  planetInfos: PlanetInfos[];
};

const PlanetContext = createContext<ContextProps>({} as ContextProps);

export default PlanetContext;
