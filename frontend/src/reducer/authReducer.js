const initState = {
    isLogged: false,
    token: "",   
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                isLogged: true,
                token: action.payload.token
            }
        
        case "LOGOUT":
            return {
                isLogged: false,
                token: ""
            }

        default:
            return state;
    }
}

export default authReducer;