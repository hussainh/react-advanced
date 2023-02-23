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
        <Routes>
            <Route path="/" element={<Home />} />
            
            {/* <Route path="/about">
                <About />
            </Route>

            <Route path="/people">
                <People />
            </Route>

            <Route path="/">
                <Home />
            </Route> */}
        </Routes>
        
    );
};

export default ReactRouter;