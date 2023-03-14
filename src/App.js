import React from "react";

import AnimatedRoutes from "./components/animatedRoutes";
import "flag-icon-css/css/flag-icons.min.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./style.css";

const App = () => {
  return (
    <>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </>
  );
};

export default App;
