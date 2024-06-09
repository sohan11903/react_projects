import React from 'react';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function Note(prop) {
  const deleteNote = () =>{
    prop.deleteItem(prop.id);

  }
  return (
    <>
        <div className='note'>
            <h1>{prop.title}</h1>
            <br/>
            <p>{prop.content}</p>
            <button className="btn"
            onClick={deleteNote}>
            <DeleteOutlinedIcon />

            </button>
            
        </div>
    </>
  )
}
