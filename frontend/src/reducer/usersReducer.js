const initState = {
    users: []
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case "SIGN_UP":
            return {users : [...state.users, action.payload]}
        default:  
            return state;
    }
}

export default usersReducer;