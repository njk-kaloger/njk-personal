import React from "react";

export default function Buttons(props) {
  const label = props.timingEvents.length % 2 === 0 ? "start" : "Stop";

  return (
    <div className="buttons">
      <button onClick={props.startTimer}>{label}</button>
      <button onClick={props.stopTimer}>Reset</button>
    </div>
  );
}
