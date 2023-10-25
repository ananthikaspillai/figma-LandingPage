import React from 'react'
import logo from "../../assets/logo.svg"
import phone from "../../assets/phone.svg"
import './NavBar.css'
function NavBar() {
  return (
  <div style={{display:"flex",marginLeft:"100px"}}>
  
      <div>
      <img src={logo} style={{width:"50px",height:"60px",marginTop:"41px",marginRight:"10px"}}  />
      </div>
      <div>
      <h2 style={{color:"black",fontFamily:"Poppins",fontSize:"15px",fontWeight:"600",width:"96px",height:"23px",marginTop:"59px"}}>Our Services</h2>
      </div>

    <div className='second'>
      <h2>About</h2>
      <h2>Blog&News</h2>
      <h2>Contact</h2>
    </div>
    <div style={{color:"black",fontFamily:"Poppins",fontSize:"15px",fontWeight:"600",width:"96px",height:"23px",marginTop:"48px",marginLeft:"150px"}}>
       <h2>Account</h2>
      </div>

       <div style={{color:"black",fontFamily:"Poppins",fontSize:"15px",fontWeight:"600",width:"96px",height:"23px",marginTop:"47px",marginLeft:"1px",display:"flex" ,gap:"10px"}}> 
       <img src={phone}  style={{height:"17px",marginTop:"4px"}} />

     <h2 > +2349067322844 </h2>

    </div>
 </div>
  )
}

export default NavBar