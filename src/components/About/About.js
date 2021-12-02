import React from "react";
//importing css
import "./About.css";
export default function About(props) {
  //function to change mode(dark/light)
    /*
    const changeMode= ()=>{
        //change to darkMode if light mode is applied
        if(modeCss.backgroundColor==='white'){
            setMode(
                {
                    backgroundColor:'black',
                    color:'whitesmoke',
                    border:'1px solid white'
                }
            )
            setbtnTxt('Light mode')
        }
        else{
            setMode(
                {
                    backgroundColor:'white',
                    color:'black',
                }
            )
            setbtnTxt('Dark mode')
        }
    }
    //default css property
    let [modeCss,setMode] = useState({
        backgroundColor:'white',
        color:'black'
    })
    //state with default text of button
    const [btnTxt, setbtnTxt] = useState('Dark mode');
*/
  //object for style of lightMode
  const lightStyle={
      backgroundColor:'white',
      color:'black'
  }
  //object for style of dark mode
  const darkStyle={
      backgroundColor:'black',
      color:'white'
  }
  return (
    <div style={props.mode ? lightStyle : darkStyle}>
      <h1 className="heading"> {props.heading} </h1>
      <p className="para">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
        placeat totam dolor laudantium, autem impedit aliquid, eius modi
        recusandae doloribus quisquam atque nostrum non animi, corporis maiores
        voluptate! Porro earum cum qui expedita itaque dignissimos!
      </p>
      {/*<button style={modeCss} className="btn" onClick={changeMode} >{btnTxt}</button>*/}
    </div>
  );
}
