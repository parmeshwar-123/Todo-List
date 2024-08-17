export const AddTodoItem = (payload) => {
    return {
        type: "ADD_TODO",
        payload
    }
}

export const DeleteTodoItem = (payload)=> {
    return {
        type: "DELETE_TODO",
        payload
    }
}

export const SignUpUser = (payload) => {
    return {
        type: "SIGN_UP",
        payload
    }
}

export const Login = (payload) => {
    return {
        type: "LOGIN",
        payload
    }
}

export const Logout = (payload) => {
    return {
        type: "LOGOUT",
        payload
    }
}