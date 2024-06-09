import './App.css';
import Header from './header';
import CreateNote from './createnote';
import Note from './note';
import Footer from './footer';
import { useState } from 'react';

function App() {
  const [addItem,setaddItem]=useState([]);

  const addNote =(note)=>{
    setaddItem((prevData)=>{
      return [...prevData,note]
    })
  };
const onDelete = (id) =>{
  setaddItem((olddata) => 
  olddata.filter((currdata, indx)=>
  {
    return indx !== id;
  })
  )
}
  return (
    <>
      <Header />
      <CreateNote passNote={addNote}/>
      <br/>
      <hr/>
      <br/>
      {addItem.map((val,index)=>{ 
        if(val.title==="" && val.content===""){
          
        }
        else{
          return(
            <>
            <div className='container'>
            <Note 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
        />

            </div>
           

          </>
        );
        }
      
      })}
      <Footer />
    </>
  );
}

export default App;