import React, { useState } from "react";
import Planets from "./Components/Planets";
import SideBar from "./Components/SideBar";

const App: React.FC = () => {
  const [miliSeconds, setmiliSeconds] = useState(10000);

  return (
    <div className="App">
      <SideBar miliSeconds={miliSeconds} setmiliSeconds={setmiliSeconds} />
      <Planets miliSeconds={miliSeconds} />
    </div>
  );
};

export default App;
