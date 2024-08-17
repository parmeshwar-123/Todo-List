import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Todos from "./pages/Todos";
import AddTodo from "./pages/AddTodo";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Box, Typography } from "@mui/material";
import store from "./store";
import { useSelector } from "react-redux";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

function App() {
  const auth = useSelector((state) => state.authReducer);
  const [toggleForm, setToggleForm] = useState(true);

  console.log(auth);

  return (
    <Box className="App">
      {!auth.isLogged ? (
        <Box>
          <Typography className="auth-title" variant="h5">Todo List App</Typography>
          <Box className="center">
            {toggleForm ? (
              <Login setToggleForm={setToggleForm} />
            ) : (
              <SignUp setToggleForm={setToggleForm} />
            )}
          </Box>
        </Box>
      ) : (
        <Box>
          <Header />
          <main className="main-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todos" element={<Todos />} />
              <Route path="/addtodo" element={<AddTodo />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Box>
      )}
    </Box>
  );
}

export default App;
