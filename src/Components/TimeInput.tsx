import React, { useRef, useState, useContext } from "react";
import PlanetContext from "./../Context/PlanetContext";

const TimeInput: React.FC = () => {
  const { setmiliSeconds } = useContext(PlanetContext);
  const [value, setValue] = useState(10000);
  const input = useRef(null);
  const changeHandler = (e: any) => {
    const value = e.target.value;
    setValue(value);
    if (!e.target.value) {
      setmiliSeconds(10000);
    } else {
      setmiliSeconds(value);
    }
  };

  return (
    <div className="time-input">
      <p>Set how many miliseconds a year equals to.</p>
      <div>
        <input
          ref={input}
          value={value}
          onChange={changeHandler}
          className="time-input__input"
          type="number"
          min="1000"
          step="100"
        />
        <label htmlFor="input">ms</label>
        <p className="note">
          Note: It's 10000 (10 seconds) by default. It's not recommended to go
          below 100 miliseconds.
        </p>
      </div>
    </div>
  );
};

export default TimeInput;
