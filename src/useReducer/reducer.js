export const reducer = (state, action) => {
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
    
    if (action.type === "REMOVE_ITEM") {
        
        const personName = action.payload.name;
        
        const newListOfPeople = state.people.filter( 
            (person) => person.id !== action.payload.id
        );

        return {
            ...state,
            isModalOpen: true,
            modalContent: personName + " removed",
            people: newListOfPeople
        };
    }

    throw new Error("no matching action type");
};