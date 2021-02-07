// reducer listens to all the actions that fire into the datalayer


// initial state of the user is null
export const initialState = {
    user: null,
}

// When somebody logs in, we SET_USER
export const actionTypes = {
    SET_USER: "SET_USER"
}

// state: what the datalayer currently looks like
// action: what we perform on the datalayer
const reducer = (state, action) => {
    console.log(action)

    
    switch(action.type) {
        // If we get an actionType SET_USER, we need to return what the new datalayer looks like (in other word, we update new state of the datalayer)
        case actionTypes.SET_USER:
        return {
            ...state,
            user: action.user
        }
        // Catch unexpected cases
        default:
            return state;

    }
}

export default reducer