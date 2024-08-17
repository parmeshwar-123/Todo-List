import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { DeleteTodoItem } from "../../action";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const TodoItem = ({item}) => {
    const {id,task} = item;
    const dispatch = useDispatch();
    const deleteTodoItem = (task) => {
        dispatch(DeleteTodoItem(task));
    }
  return (
    <Card sx={{ minWidth: 275 }} className="card-todos">
      <CardContent className="cart-content-todos">
        <Typography variant="h5">{id}.</Typography>
        <Typography variant="h5" component="div">
          {task}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="edit-button" size="small" variant="contained" startIcon={<EditIcon/>}>
          Edit
        </Button>
        <Button className="delete-button" size="small" onClick={() => deleteTodoItem(item)} variant="contained" color="error" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default TodoItem;