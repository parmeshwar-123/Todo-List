import { Box, Typography } from '@mui/material'
import React from 'react'
import Form from '../components/todos/Form'

const AddTodo = () => {
  return (
    <Box>
      <Typography className='add-todo-title' variant='h5'>Add here what you to do!</Typography>
      <Form />
    </Box>
  )
}

export default AddTodo