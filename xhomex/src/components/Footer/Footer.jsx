import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
   <section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
            <img src="./logo2.png" alt="" width={120} />
            <span className="secondaryText">
                Our vision is to make all people <br/>
                the best place to live for them
            </span>
        </div>

        <div className="flexColStart absf-right">
            <span className='primaryText'>
                Information
            </span>
            <span className='secondaryText'>
                145 Gujarat, FL 1190, INDIA
            </span>
            <div className="flexCenter f-menu">
                <span>Property</span>
                <span>Servies</span>
                <span>Product</span>
                <span>About Us</span>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Footer