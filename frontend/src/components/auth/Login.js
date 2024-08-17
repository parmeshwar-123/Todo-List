import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CardHeader, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Login as LoginAction } from '../../action';
import "./Login.css";

const Login = ({setToggleForm}) => {
  const [userDetails, setUserDetails] = useState({});
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserDetails({...userDetails, [name]: value, token: "1212323"});
  }
const dispatch = useDispatch();
  const login = (e) => {
    e.preventDefault();
    console.log(userDetails)
    dispatch(LoginAction(userDetails))
    setUserDetails({
        email: "",
        password: "",
    })
  }

  const signUp = () => {
    setToggleForm(false);
  }


  return (
    <Box className="login-container">
        <Card className="login-card">
          <CardHeader title="Login" titleTypographyProps={{variant:'h4' }} />
          <CardContent className="login-card-content">
            <form className='login-form'>
                <TextField className='textfield' fullWidth variant='outlined' label="Enter Email" name="email" id="email" onChange={handleChange} value={userDetails?.email} />
                <TextField className='textfield' fullWidth variant='outlined' label="Password" name="password" id="passwod" onChange={handleChange} value={userDetails?.password} />
                <Button type="button" onClick={login}  className='login-button' variant='contained' colorr='success'>Login</Button>
            </form>
            <Typography>Don't have account, <span className='sign-up-link' onClick={signUp}>Sign Up</span> Now!</Typography>
          </CardContent>
        </Card>
    </Box>
  )
}

export default Login;