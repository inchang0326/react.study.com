import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("Time Updated!");
  function increase() {
    setTime(time + 1);
  }

  return (
    <div>
      {time}번<button onClick={increase}>증가</button>
    </div>
  );
}

export default TimerComponent;
