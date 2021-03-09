import { createContext } from "react";

type ContextProps = {
  miliSeconds: any;
  setmiliSeconds: any;
  planetInfos: any;
};

const PlanetContext = createContext<Partial<ContextProps>>({});

export default PlanetContext;
