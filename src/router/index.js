import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import People from './People';
import Person from './Person';
import Error from './Error';
import Navbar from './Navbar';

const ReactRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/people" element={<People />} />         
                <Route path="/person/:id" element={<Person />} />         
                <Route path="*" element={<Error />} />         
            </Routes>
        </Router>
        
    );
};

export default ReactRouter;