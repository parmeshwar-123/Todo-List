import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    todosReducer,
    usersReducer,
    authReducer
});

export default rootReducer;