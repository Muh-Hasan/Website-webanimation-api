import React from "react";
import "./css/between.css";
import face from "../images/avatar.png";
import face1 from "../images/avatar1.png";
import face2 from "../images/avatar2.png";

export default function Between() {
  return (
    <div className="between">
      <div className=" container">
        <Betpara />
        <Worker />
      </div>
    </div>
  );
}

function Betpara() {
  return (
    <div className='bet-para'>
      <h2 className="bet-h2">We Are</h2>
      <p className="bet-p">
        Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Donec
        pharetra quam sit Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec pharetra quam sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        pharetra quam sit Lorem ipsum dolor sit amet, consectetur
      </p>
    </div>
  );
}

function Worker() {
  return (
    <div className="bet-worker">
      <div>
        <img src={face} alt="face" />
        <div className="description-worker">
          <h6>Abdul</h6>
          <p>CTO - Cheif Techincal Officer</p>
        </div>
      </div>
      <div>
        <img src={face1} alt="face1" />
        <div className="description-worker">
          <h6>Mahnoor</h6>
          <p>Director General</p>
        </div>
      </div>
      <div>
        <img src={face2} alt="face2" />
        <div className="description-worker">
          <h6>Abdul</h6>
          <p>CEO - Cheif Excuetive Officer</p>
        </div>
      </div>
    </div>
  );
}
