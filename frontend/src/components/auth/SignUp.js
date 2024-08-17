import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CardHeader, TextField, Typography } from '@mui/material';
import { SignUpUser } from '../../action';
import "./SignUp.css";

const SignUp = ({setToggleForm}) => {
  const [userDetails, setUserDetails] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserDetails({...userDetails, [name]: value});
  }
  const users = useSelector(state => state.usersReducer);
  console.log("users", users)
  const signUp = (e) => {
    e.preventDefault();

    dispatch(SignUpUser(userDetails))
    login()
    setUserDetails({
      name: "",
      email: "",
      password: "",
    })
  }

  const login = () =>{
    setToggleForm(true);
  }

  return (
    <Box className="sign-up-container">
        <Card className="sign-up-card">
          <CardHeader title="Sign Up" titleTypographyProps={{variant:'h4' }} />
          <CardContent className="sign-up-card-content">
            <form className='sign-up-form'>
                <TextField className='textfield' fullWidth variant='outlined' label="Enter Name" name="name" id="name" onChange={handleChange} value={userDetails?.name} />
                <TextField autoComplete className='textfield' fullWidth variant='outlined' label="Enter Email" name="email" id="email" onChange={handleChange} value={userDetails?.email} />
                <TextField className='textfield' fullWidth variant='outlined' label="Password" name="password" id="passwod" onChange={handleChange} value={userDetails?.password} />
                <Button type="button" onClick={signUp} className='sign-up-button' variant='contained' colorr='success'>Sign Up</Button>
            </form>
            <Typography>Already have an account, <span className='login-link' onClick={login}>Login</span> Now!</Typography> 
          </CardContent>
        </Card>
    </Box>
  )
}

export default SignUp;