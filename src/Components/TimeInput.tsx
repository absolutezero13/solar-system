import React from "react";

const TimeInput: React.FC = () => {
  return (
    <div className="time-input">
      <p>Fast forwarding</p>
      <input
        className="time-input__input"
        type="text"
        placeholder="Default: 100x"
      />
    </div>
  );
};

export default TimeInput;
