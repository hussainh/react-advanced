import React, { useState, useEffect } from "react";

const useEffectBasics = () => {
    const [value, setValue] = useState(0);
    useEffect(()=>{
        document.title = `New Messages(${value})`;
    });
    console.log('call useEffect');
    return (<>
        <h1>{value}</h1>
        <button className="btn" onClick={()=> setValue(value + 1)}>click me</button>
    </>);
};

export default useEffectBasics;