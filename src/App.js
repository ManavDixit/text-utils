//import logo from "./logo.svg";
import "./App.css";
import TextBox from "./components/TextBox";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Alert from "./components/Alert/Alert";
import React, { useState } from "react";
//importing react routers components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  //creating state for changing dark/light mode
  const [lightMode, setMode] = useState(true);
  const changeMode = () => {
    if (lightMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      let buttons = document.getElementsByTagName("button");
      for (let button of buttons) {
        button.style.color = "white";
      }
      setMode(false);
      showAlert("Dark-Mode is enabled");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      let buttons = document.getElementsByTagName("button");
      for (let button of buttons) {
        button.style.color = "black";
      }
      setMode(true);
      showAlert("Light-Mode is enabled");
    }
  };
  //default alert message
  const [message, setmessage] = useState(null);
  //function to show alert
  const showAlert = (message) => {
    setmessage(message);
    //making the alert disapper after 2sec by making message null
    setTimeout(() => {
      setmessage(null);
    }, 2000);
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          navText1="About"
          changeMode={changeMode}
          mode={lightMode}
        />
          <Alert message={message} mode={lightMode} />
        <Routes>
          <Route
            exact
            path="/"
            element={
                <TextBox
                  heading="TextUtils"
                  btn1Txt="UpperCase"
                  btn2Txt="LowerCase"
                  btn3Txt="Clear text"
                  btn4Txt="remove Extra spaces"
                  btn5Txt="copy text"
                  mode={lightMode}
                  showAlert={showAlert}
                />
            }
          ></Route>
          <Route
            exact
            path="/About"
            element={<About heading="About Us" mode={lightMode} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
