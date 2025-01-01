
import React from "react";
import "./App.css";
import Navbar from "../src/Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/Signin";
import Profie from "./Components/Profile";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route exact path="/profile" element={<Profie />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;