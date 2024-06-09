import React from 'react';

const SlotM = (props) =>{
  // let x='😄';
  // let y='😄';
  // let z='🥶';
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if( (props.x===props.y) && (props.x===props.z)){
    return(
      <>
        <div className='slot_inner'>
          <h1>{" "}{x}{y}{z}{" "}</h1>
          <h1>This is Matching.</h1>
          <hr />
        </div>
      </>
    );
  }else{
    return(
      <>
        <div className='slot_inner'>
          <h1>{" "}{x}{y}{z}{" "}</h1>
          <h1>This is not Matching.</h1>
          <hr />
        </div>
      </>
    );
  }
}
const Footer = () =>
{
  return (

  <>
      <p className='footer'>if there is same then Matching otherwise not Matching using passing props</p>
  </>
  )
 
}
const  App = () =>{
  return <>
    <h1 className='heading_style'>
       🎰 Welcome to <span style={{fontWeight:"bold"}}>
         Slot machine game</span> 🎰
        </h1>,
        <div className='container'>
        <SlotM  x='😄' y='😄' z='😄'/>
  <SlotM x='😄' y='😄' z='😄'/>
  <SlotM x='😄' y='😄' z='😄'/>
        </div>
<Footer/>

 
  </>;
}

export default App