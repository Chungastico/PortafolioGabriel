import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

const App = () => {
    return (
        <Router>
            <div className="font-bebas-neue">
                <Navbar />
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre-mi" element={<AboutMe />} />
                <Route path="/proyectos" element={<Projects />} />
                <Route path="/contacto" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;