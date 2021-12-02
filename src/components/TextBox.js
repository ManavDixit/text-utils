import React, { useState } from "react";
import "./TextBox.css";
import PropTypes from "prop-types";

export default function TextBox(props) {
  //useState() returns an array with one variable and one function
  //useState(text) will set value of first variable the given variable and second variable will be set as a fuction to update the first variable as first variable cannot be updated directly
  const [text, setText] = useState("");
  //text='manav';//this will throw error

  //function to convert in uppercase
  const upperCase = () => {
    setText(text.toUpperCase());
    props.showAlert('Text changed to uppercase');
  };
  //function to convert in lowercase
  const lowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert('Text changed to lowercase');
  };
  //function to clear text
  const clearText = () => {
    setText("");
    props.showAlert('Text cleared');
  };
  //function to remove extra 'spaces
  const removeExtraSpaces = () => {
    //replacing all the spaces with a single space using regular expression
    setText(text.replace(/[\s]+/g, " "));
    props.showAlert('Extra-spaces removed');
  };
  //function to copy text
  const copyText=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied');
  }
  const changed = (event) => {
    //setting text as value of textare every time it's change to make the change visible
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1 className="heading"> {props.heading} </h1>
        <textarea
          style={{
          backgroundColor:props.mode ? "white" : "black",
          color:props.mode ? "black" : "white",
          border:`2px solid ${props.mode ? "black" : "white"}`
          }}
          placeholder="enter text here"
          name="text"
          id="textBox"
          onChange={changed}
          value={text}
          cols="20"
          rows="20"
        ></textarea>
        <button disabled={text===''} className="btn" id="upperCase" onClick={upperCase}>
          {props.btn1Txt}
        </button>
        <button disabled={text===''} className="btn" id="lowerCase" onClick={lowerCase}>
          {props.btn2Txt}
        </button>
        <button disabled={text===''} className="btn" id="clearText" onClick={clearText}>
          {" "}
          {props.btn3Txt}{" "}
        </button>
        <button
        disabled={text===''}
          className="btn"
          id="removeExtraSpaces"
          onClick={removeExtraSpaces}
        >
          {" "}
          {props.btn4Txt}{" "}
        </button>
        <button disabled={text===''} className="btn" id="copyText" onClick={copyText}>{props.btn5Txt}</button>
      </div>

      <div className="container">
        <h1 className="heading">Text information</h1>
        <p>
          {" "}
          {text.trim() === "" ? "0" : text.trim().split(/\s+/).length} words and{" "}
          {text.length} characters
        </p>
        {/* getting time to read text by mutiplying no. of second taken to read one word (information taken by google) and then dividing them by 60 to get time in sec and then rounding of it by Math.floor() to get value in integer*/}
        <p>
          time required to read:
          {Math.floor((2.08 * text.split(" ").length) / 60)} minutes
        </p>
        <h3 className="heading">Preview</h3>
        <p>{text || 'Nothing to preview'}</p>
      </div>
    </>
  );
}

TextBox.defaultProps = {
  heading: "Heading",
  btn1Txt: "text",
};

TextBox.propTypes = {
  heading: PropTypes.string.isRequired,
  btn1Txt: PropTypes.string.isRequired,
};
