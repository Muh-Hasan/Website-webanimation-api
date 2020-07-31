import React from "react";
import require from "../images/require.png";
import "./css/require.css";

export default function Require() {
  return (
    <div className='main-req'>
      <div className='req-head'>
        <h2>Talk to our Expert about you requirement</h2>
      </div>
      <div className="req-flex">
        <Img />
        <Para />
      </div>
    </div>
  );
}
function Para() {
  return (
    <div className='req-para'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ph<br />aretra.Lorem ipsum dolor sit amet, consectetur adipiscing eli<br />t. Donec pharetra.<br />Lorem ipsum dolor sit amet<br />consectetur adipiscing elit. Donec pharetra.
      </p>
    </div>
  );
}
function Img() {
  return (
    <div>
      <img className='req-img' src={require} alt="requre" height="400px" width="400px" />
    </div>
  );
}
