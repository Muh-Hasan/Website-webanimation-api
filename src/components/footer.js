import React from "react";
import "./css/footer.css";

export default function Footer() {
  return (
    <div>
      <Main />
    </div>
  );
}

function Main() {
  return (
    <>
      <hr />
      <div className="foot-color-flex">
          <h6>Home</h6>
          <h6>About</h6>
          <h6>Services</h6>
          <h6>Contact</h6>
      </div>
    </>
  );
}
