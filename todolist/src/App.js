import React, { useState } from "react";
import List from "./list";

const App = () => {
  const [inputList, setInputList] = useState('');
  const [Items, setItems] = useState([]);

  const itemEvent = (abc) => {
    setInputList(abc.target.value);
  }
  const listOfItems = () => {
    setItems((olditems) => {
      return [...olditems, inputList]
    })
    setInputList("");
  }
 const deleteItems=(id)=>{
      
      setItems((olditems) => {
        return olditems.filter((arrElem,index)=>{
               return index !== id;

        })
      })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1><br />
          <input type="text" placeholder="Enter a Item" value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>
          <ol>
            {Items.map((abc,index) => {
              return <List
              key = {index}
              id = {index}
              text={abc}
              onSelect={deleteItems}
              />
            })
            }
          </ol>

        </div>

      </div>

    </>

  );
};

export default App