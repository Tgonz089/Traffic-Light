import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
  const [color, setColor] = useState("green");

  return (
    <div>
      <div className="trafficTop">a</div>
      <div className="traffic-light">
        <div
          onClick={() => setColor("red")}
          className={"light red" + (color === "red" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setColor("yellow")}
          className={"light yellow" + (color === "yellow" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setColor("green")}
          className={"light green" + (color === "green" ? " glow" : "")}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
