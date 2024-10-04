import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import GitHubCalendarComponent from "./Components/GithubCalender/GithubCalender";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <GitHubCalendarComponent />
      <Contact />
    </>
  );
}

export default App;
