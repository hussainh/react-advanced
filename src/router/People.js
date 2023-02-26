import React, { useState } from "react";
import { data } from './../data'

const People = () => {
    const [people, setPeople] = useState(data);
    return (
        <div>
            <h2>people page</h2>
            {people.map((person) => {
                return (
                    <div key={person.id} className="item">
                        <h4>{person.name}</h4>
                    </div>
                );
            })}
        </div>
    );    
};

export default People;