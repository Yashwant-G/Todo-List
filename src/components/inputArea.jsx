import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInput] = useState("");

  function handleChange(event) {
    const newvalue = event.target.value;
    setInput(newvalue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInput("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
