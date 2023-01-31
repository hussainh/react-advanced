import React, { useState, useEffect } from "react";

const useEffectBasics = () => {
    const [value, setValue] = useState(0);
    useEffect(()=>{
        if (value > 0 ) {
            document.title = `New Messages(${value})`;
        }
    });
    console.log('render component');
    return (<>
        <h1>{value}</h1>
        <button className="btn" onClick={()=> setValue(value + 1)}>click me</button>
    </>);
};

export default useEffectBasics;