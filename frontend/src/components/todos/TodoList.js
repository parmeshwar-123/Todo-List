import React from 'react'
import TodoItem from './TodoItem'
import { Box, Typography } from '@mui/material'

const TodoList = ({todoItems}) => {
  return (
    <Box>
        { todoItems?.length > 0 ?
            todoItems?.map((item, index) => {
                return <TodoItem key={index} item={item}/>
            }) : <Typography variant='h5' textAlign="center" color="error">No Task found, please add new tasks.</Typography>
        }
    </Box>
  )
}

export default TodoList