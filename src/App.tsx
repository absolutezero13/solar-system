import React, { useState } from "react";
import Planets from "./Components/Planets";
import SideBar from "./Components/SideBar";
import PlanetContext from "./Context/PlanetContext";
import { planetInfos } from "./Data/PlanetInfos";
const App: React.FC = () => {
  const [miliSeconds, setmiliSeconds] = useState(10000);

  return (
    <PlanetContext.Provider
      value={{
        miliSeconds,
        setmiliSeconds,
        planetInfos,
      }}
    >
      <div className="App">
        <SideBar />
        <Planets />
      </div>
    </PlanetContext.Provider>
  );
};

export default App;
