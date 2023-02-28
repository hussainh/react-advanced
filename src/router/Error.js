import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Error page</h2>
            <Link to="/" className="btn">Back</Link>
        </div>
    );
};

export default ErrorPage;