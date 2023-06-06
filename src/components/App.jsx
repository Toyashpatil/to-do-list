import React, { useState } from "react";
import ToDo from "./todoItems";
import Input from "./inputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }
  function deleteItem(id){
    setItems(prevValues =>{
      return prevValues.filter((item,index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem,index) => (
           <ToDo key={index} id={index} onChecked={deleteItem} text={todoItem} /> 
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
