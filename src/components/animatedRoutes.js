import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";
import About from "../pages/About/About";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/HomeFs" element={<Home />} />
          <Route path="/ContactFs" element={<Contact />} />
          <Route path="/ProjectsFs" element={<Projects />} />
          <Route path="/ResumeFs" element={<Resume />} />
          <Route path="/AboutFs" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
export default AnimatedRoutes;
