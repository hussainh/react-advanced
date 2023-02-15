import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../data";

const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {  
        const newPerson = [...state.people, action.payload];    
        return {            
            ...state,
            people: newPerson,
            isModalOpen: true,
            modalContent: 'item added'
        };
    }
    
    if (action.type === "NO_VALUE") {
        return {
            ...state,
            isModalOpen: true,
            modalContent: "please enter a value"
        };
    }

    if (action.type === "CLOSE_MODAL") {
        return {
            ...state,
            isModalOpen: false
        };
    }

    throw new Error("no matching action type");
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
            const newPerson = {id: new Date().getTime().toString(), name};
            dispatch({ type: "ADD_ITEM", payload: newPerson });
            setName("");
        } else {
            dispatch({ type: "NO_VALUE" });            
        }
    };

    const closeModal = () => {
        dispatch({ type: "CLOSE_MODAL" });
    }

    return (
        <>
            {state.isModalOpen && (<Modal closeModal = { state.closeModal } modalContent = { state.modalContent } />)}
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