import React from 'react'

export default function List(props) {
  return (
    <>
    <div className='fa-solid todo_style'>
    <a className='xyz' onClick={
        ()=>{
            props.onSelect(props.id)
        }
    } > x </a>
    {/* <i class="fa-solid fa-circle-xmark fa-xl " style={{color: '#8566aa'}} onClick={
        ()=>{
            props.onSelect(props.id)
        }
    }>

    </i> */}
    
     
        <li>{props.text}</li>
    </div>
        
    </>
  )
}
