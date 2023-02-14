import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../data";

const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "TESTING") {  
        console.log("inside if statement");      
        return {            
            ...state,
            people: data,
            isModalOpen: true,
            modalContent: 'item added'
        };
    }
    return state;
};

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ""
};

const Index = () => {
    const [name, setName] = useState("");
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name) {
            dispatch({ type: "TESTING" });
        } else {
            
        }
    };

    return (
        <>
            {state.isModalOpen && (<Modal modalContent = { state.modalContent } />)}
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                </div>
                <button type="submit">Add</button>
            </form>
            { state.people.map((person) => {
                return (
                    <div key={person.id} className="item">
                        <h4>{person.name}</h4>
                    </div>
                );
            })}
        </>
    );
};

export default Index;