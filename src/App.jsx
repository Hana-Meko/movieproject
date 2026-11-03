import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import DisplayRow from "./Components/DisplayRow/DisplayRow";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <DisplayRow />
      <Footer />
    </>
  );
}

export default App;
