const initState= {
    todos: []
}
const todosReducer = (state = initState, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {todos: [...state.todos, action.payload]}
        case "DELETE_TODO":
            return {todos: state.todos.filter((todo) => todo.id != action.payload.id)}
        default: 
        return  state;
    }
}

export default todosReducer;