import React from "react";
//importing css file
import "./Alert.css";
export default function Alert(props) {
  //style object for light mode
  const lightStyle = {
    backgroundColor: "white",
    color: "black",
    border: "2px solid black",
  };
  //style object for dark mode
  const darkStyle = {
    backgroundColor: "black",
    color: "white",
    border: "2px solid white",
  };
  return (
    <div style={{height:'60px', border:`2px solid ${props.mode?'white':'black'}`}}>
      {/*in the below syntax if the statement before && is not (null,undefined)
      and evaluates as true the statement after && will be runed else ignored*/}
      {props.message && <div className="alertBox" style={props.mode ? lightStyle : darkStyle}>
        <strong>{props.message}</strong>
      </div>}
      </div>
  );
}
