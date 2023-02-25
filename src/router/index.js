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
                {/* <Route path="/" element={<About />} />
                <Route path="/" element={<People />} />
                <Route path="/" element={<Person />} />             */}
            </Routes>
        </Router>
        
    );
};

export default ReactRouter;