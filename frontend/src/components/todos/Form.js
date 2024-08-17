import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./Form.css";
import { CardHeader, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoItem } from "../../action";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [todoDetails, setTodoDetails] = React.useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const todos = useSelector(state => state.todosReducer);
    console.log(todos.todos.length)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setTodoDetails({...todoDetails, [name]: value, id: todos.todos.length + 1})
    }

    const handleAddTask = () => {
        dispatch(AddTodoItem(todoDetails));
        setTodoDetails({
            task: "",
            description: ""
        });

        navigate("/todos");
    }

  return (
    <Card sx={{ minWidth: 275 }} className="card-form">
        <CardHeader title="Add Todo Item"/>
      <CardContent className="cart-content-form">
      <TextField className="text-field" onChange={handleChange} value={todoDetails.task} id="task" name="task" fullWidth label="Enter Task Name." variant="outlined" />
      <TextField className="text-field" onChange={handleChange} value={todoDetails.description} id="description" name="description" fullWidth label="Enter Task Description." variant="outlined" />
      </CardContent>
      <CardActions>
        <Button className="add-button" onClick={handleAddTask}  variant="contained" color="success" >
          Add Task
        </Button>
      </CardActions>
    </Card>
  );
}

export default Form;