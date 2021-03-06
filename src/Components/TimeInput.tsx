import React, { useRef, useState } from "react";
interface TimeProps {
  miliSeconds: number;
  setmiliSeconds: any;
}
const TimeInput: React.FC<TimeProps> = ({ miliSeconds, setmiliSeconds }) => {
  const [value, setValue] = useState(10000);
  const input = useRef(null);
  const changeHandler = (e: any) => {
    setValue(e.target.value);
    if (!e.target.value) {
      setmiliSeconds(10000);
    } else {
      setmiliSeconds(e.target.value);
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
