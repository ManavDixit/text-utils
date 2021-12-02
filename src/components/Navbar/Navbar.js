import React from "react";
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"; 
//including css file
import "./navbar.css";
export default function Navbar(props) {
  const changeToggle=(e)=>{
    e.target.classList.toggle("active");
    props.changeMode();
  }
  //css for darkmode
  const darkStyle={
    backgroundColor:'black',
    color:'white',
    border:'2px solid white'
  }
  //css for lightmode
  const lightStyle={
    backgroundColor:'white',
    color:'black',
  }
  //css for darkmode for text
  const darkTextStyle={
    backgroundColor:'black',
    color:'white'
  }
  return (
    <nav id="navbar" style={props.mode?lightStyle:darkStyle}>
      <h3 className="heading">{props.title}</h3>
      <h1>|</h1>
      <ul>
        <li>
          <Link to="/" style={props.mode?lightStyle:darkTextStyle}>Home</Link>
        </li>
      </ul>
    <ul>
        <li>
          <Link to='/About' style={props.mode?lightStyle:darkTextStyle}>{props.navText1}</Link>
        </li>
</ul>
      <div className="switchBox" style={props.mode?lightStyle:darkStyle}>
        <div className="innerCircle" onClick={changeToggle} style={props.mode?darkStyle:lightStyle}></div>
      </div>
    </nav>
  );
}
Navbar.defaultProps={
  title:'PageTitle',
  navText1:'navText'
}
Navbar.propTypes={
title:PropTypes.string,
navText1:PropTypes.string
}