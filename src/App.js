import React from "react";
import "./styles.css";


// components
import NavBar from "./components/navbar";
import Front from "./components/front";
import Between from "./components/between";
import Service from "./components/services";
import Require from "./components/require";
import Footer from "./components/footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <Front />
      <Between />
      <Service />
      <Require />
      <Footer />
    </div>
  );
}
