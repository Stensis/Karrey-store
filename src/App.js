// import logo from './logo.svg';
// import './App.css';import React from "react";
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home"
import Announcements from "./Announcements";
import Slider from "./Slider";
import Login from "./Login"

function App() {
  return (
    <div>
      <Home />
        <Announcements />
        <NavBar />
        <Slider />
        <Login />
    </div>
  );
}

export default App;
