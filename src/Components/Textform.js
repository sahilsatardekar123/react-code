
import React ,{useState} from 'react'


export default function Textform(props) {
  const handleAlterClick = () => {
    let alternate = text.charAt(0).toUpperCase();
    for (let i = 1; i < text.length; i++) {
      let previousChar = text.charAt(i - 1);
      if (previousChar === previousChar.toUpperCase()) {
        alternate += text.charAt(i).toLowerCase();
      } else if (previousChar === previousChar.toLowerCase()) {
        alternate += text.charAt(i).toUpperCase();
      }
    }
    setText(alternate);
    props.showAlert("Converted to Alternatecase!", "success");
  };
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }
  const handleDownClick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }

  const handleOnChange=(event)=>{
    console.log("on chance");
    setText(event.target.value)
  }
  const[text,setText]=useState('')
  //first text ki value..
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}} >
     
     <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey',color: props.mode === 'dark' ? 'white' : 'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-3 btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-3 btn-primary' onClick={handleDownClick}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-3 btn-primary' onClick={handleAlterClick}>Convert to Alternating Case</button>
      </div>
      <div className='container my-3 'style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>


      </div>
      </>
  )
}
