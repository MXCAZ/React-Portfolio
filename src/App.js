// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import AnimatedRoutes from "./components/animatedRoutes";

// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import "./style.css";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <AnimatedRoutes />
//       <Footer />
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/animatedRoutes";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./style.css";

// Add the dotenv configuration here

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
};

export default App;
