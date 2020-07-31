import React, { useRef, useLayoutEffect } from "react";
import coding from "../images/coding.png";
import "./css/services.css";

export default function Service() {
  return (
    <div className="ser-set">
      <div className="container">
        <Para />
      </div>
    </div>
  );
}

function Para() {
  var pic = useRef(null);
  useLayoutEffect(() => {
    var keyframes = [
      { transform: "translate3d(0, 0, 0)", offset: 0 },
      { transform: "translate3d(-10px, 0, 0)", offset: 0.1 },
      { transform: "translate3d(10px, 0, 0)", offset: 0.2 },
      { transform: "translate3d(-10px, 0, 0)", offset: 0.3 },
      { transform: "translate3d(10px, 0, 0)", offset: 0.4 },
      { transform: "translate3d(-10px, 0, 0)", offset: 0.5 },
      { transform: "translate3d(10px, 0, 0)", offset: 0.6 },
      { transform: "translate3d(-10px, 0, 0)", offset: 0.7 },
      { transform: "translate3d(10px, 0, 0)", offset: 0.8 },
      { transform: "translate3d(-10px, 0, 0)", offset: 0.9 },
      { transform: "translate3d(0, 0, 0)", offset: 1 }
    ];
    var timing = { duration: 900, iterations: Infinity };
    pic.current.animate(keyframes, timing);
  });
  return (
    <div className="ser-flex">
      <div>
        <div className="ser-head">
          <h2>Our Services</h2>
        </div>
        <div>
          <ul className="ser-list">
            <li>Web Development</li>
            <li>UI / UX Desigining</li>
            <li>Mobile App Development</li>
          </ul>
        </div>
      </div>
      <div ref={pic}>
        <img className='ser-img' src={coding} alt="coding" height="400px" width="400px" />
      </div>
    </div>
  );
}
