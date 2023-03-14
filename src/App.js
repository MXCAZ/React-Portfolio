import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/animatedRoutes";
import "flag-icon-css/css/flag-icons.min.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./style.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </>
  );
};

export default App;
