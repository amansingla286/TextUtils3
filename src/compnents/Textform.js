import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleupclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleupclick2 = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleupclick3 = () => {
    let newText = '';
    setText(newText);
  };
  const handleupclick4 = () => {
    navigator.clipboard.writeText(text)
    document.getSelection().removeAllRanges();
  };
  const handleupclick5 = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handlechange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color:props.mode==="light"?"black":"white"}} >
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea 
            onChange={handlechange}
            style={{backgroundColor: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            value={text}
          ></textarea>
          <button onClick={handleupclick} className="btn btn-primary my-3 mx-1">
            convert to upper case
          </button>
          <button
            onClick={handleupclick2}
            className="btn btn-primary my-3 mx-1"
          >
            convert to Lower case
          </button>
          <button
            onClick={handleupclick3}
            className="btn btn-primary my-3 mx-1"
          >
            clear text
          </button>
          <button
            onClick={handleupclick4}
            className="btn btn-primary my-3 mx-1"
          >
        copy to clipboard
          </button>
          <button
            onClick={handleupclick5}
            className="btn btn-primary my-3 mx-1"
          >
        remove extra spaces
          </button>
        </div>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {" "}
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.length} Minutes</p>
        <h3>Your preview</h3>
        <p>{text.length>0?text:"enter somethig here to preview"}</p>
      </div>
    </>
  );
}
