// help to wrap our app with datalayer which we can push & pull info into it
// Specifically, the StateProvider act as a BRIDGE which always "listens" to all changes from the login pages (reducers) and "tells" them to all the component inside our app (App)
import React, { createContext, useContext, useReducer } from "react";


export const StateContext = createContext()

//Datalayer: is a global-scope variable bucket (You can access to this global bucket from anywhere inside the {children})
// children is out App.js which is wrapped around by StateContext.Provider (a datalayer). 
// This gonna push the user data in the login into the datalayer, then we could pull the user's data from wherever inside the app ({children}) 
// reducer: listen to every action that you shoot/perform on the datalayer (Exp: here is the user data -> SetUser event)
// initialState: what the datalayer looks like at the beginning
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)


//this is a user-defined hook: this allows us to use a state value from the datalayer
export const useStateValue = () => useContext(StateContext)