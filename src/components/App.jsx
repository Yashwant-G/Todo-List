import React, { useState } from "react";
import TodoItem from "./todo";
import InputArea from "./inputArea";

function App() {
  const [items, setItem] = useState([]);

  function addItem(inputText) {
    setItem((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((item, index) => (
            <TodoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
