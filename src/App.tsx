import React from "react";
import Planets from "./Components/Planets";
import SideBar from "./Components/SideBar";
import TimeInput from "./Components/TimeInput";

const App = () => {
  return (
    <div className="App">
      <SideBar />
      <Planets />
    </div>
  );
};

export default App;
