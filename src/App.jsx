import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
    </>
  );
}

export default App;
