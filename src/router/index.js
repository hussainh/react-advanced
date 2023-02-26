import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import People from './People';
import Person from './Person';
import Error from './Error';
import Navbar from './Navbar';

const ReactRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/people" element={<People />} />         
            </Routes>
        </Router>
        
    );
};

export default ReactRouter;