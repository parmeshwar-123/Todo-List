import { Box, Typography } from "@mui/material";
import React from "react";
import TodoList from "../components/todos/TodoList";
import { useSelector } from "react-redux";
import "./Todos.css"

const Todos = () => {
  const todo = [
    {
      id: 1,
      task: "Task 1",
    },
    {
      id: 2,
      task: "Task 2",
    },
    {
      id: 3,
      task: "Task 3",
    },
    {
      id: 4,
      task: "Task 4",
    },
    {
      id: 4,
      task: "Task 4",
    },
    {
      id: 4,
      task: "Task 4",
    },
    {
      id: 4,
      task: "Task 4",
    },
    
  ];
  const todosList = useSelector(state => state.todosReducer);
  console.log("todosList", todosList)
  return (
    <Box className="todos-container">
      <Typography className="todos-title" variant="h3">Todo List</Typography>
      <TodoList todoItems={todosList.todos} />
    </Box>
  );
};

export default Todos;
