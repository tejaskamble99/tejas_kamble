// App.js
import React from "react";
import NavBar from "./components/NavPages/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import ContactMe from "./components/pages/ContactMe";
import Project from "./components/pages/Projects";
import Home from "./components/pages/Home";
import Technologies from "./components/pages/Technologies";

function App() {
  return (
    <>
     
      <Router>
       
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path='/technologies' element={<Technologies />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
