import React, { useState } from "react";

const UseStateCounter = () => {
    const [value, setValue] = useState(0);

    const resetCounter = () => {
        setValue(0);
    };

    return (    
        <>
            <section style={{margin: '4rem 0'}}>
                <h2>regular counter</h2>
                <h2>{value}</h2>
            </section>
            <button className="btn" onClick={() => setValue(value - 1)}>decrease</button>
            <button className="btn" onClick={resetCounter}>reset</button>
            <button className="btn" onClick={() => setValue(value + 1)}>increase</button>
        </>
    );
};

export default UseStateCounter;
