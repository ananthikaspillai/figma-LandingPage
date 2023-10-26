import React from 'react'
import logo from "../../assets/logo.svg"
import phone from "../../assets/phone.svg"
import './NavBar.css'
function NavBar() {
  return (
//   <div style={{display:"flex",marginLeft:"100px"}}>
  
//       <div>
//       <img src={logo} style={{width:"50px",height:"60px",marginTop:"41px",marginRight:"10px"}}  />
//       </div>
//       <div>
//       <h2 style={{color:"black",fontFamily:"Poppins",fontSize:"15px",fontWeight:"600",width:"96px",height:"23px",marginTop:"59px"}}>Our Services</h2>
//       </div>

//     <div className='second'>
//       <h2>About</h2>
//       <h2>Blog&News</h2>
//       <h2>Contact</h2>
//     </div>
//     <div style={{color:"black",fontFamily:"Poppins",fontSize:"15px",fontWeight:"600",width:"96px",height:"23px",marginTop:"48px",marginLeft:"150px"}}>
//        <h2>Account</h2>
//       </div>

//        <div style={{color:"black",fontFamily:"Poppins",fontSize:"15px",fontWeight:"600",width:"96px",height:"23px",marginTop:"47px",marginLeft:"1px",display:"flex" ,gap:"10px"}}> 
//        <img src={phone}  style={{height:"17px",marginTop:"4px"}} />

//      <h2 > +2349067322844 </h2>

//     </div>
//  </div>
//   )
// }

  <div className="self-center flex w-full max-w-[1136px] items-start justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
    <div className="self-stretch flex w-[180px] max-w-full items-start justify-between gap-5 ml-[44px] mt-[30px]">
      <img
        src={logo}
        className="aspect-[1.52] object-cover object-center w-[90px]  overflow-hidden flex-1"
      />
      <div className="self-center flex flex-col my-auto">
        <div className="text-black text-base font-semibold self-stretch mt-[12px]">
          Our Services
        </div>
        <div className="bg-red-700 self-center flex w-[72px] h-0.5 flex-col mt-2.5 rounded-xl" />
      </div>
    </div>
    <div className="self-center flex w-[261px] max-w-full items-start justify-between gap-5 my-auto max-md:justify-center">
      <div className="text-black text-base font-semibold mt-[35px] ml-[0px]">About </div>
      <div className="text-black text-base font-semibold mt-[35px]">Blog&News</div>
      <div className="text-black text-base font-semibold mt-[35px]">Contact </div>
    </div>
    <div className="self-center flex items-start justify-between gap-1.5 my-auto max-md:justify-center">
      <div className="text-black text-base font-semibold self-center my-auto mt-[34px] ml-[10px] mr-[20px]">
        Account
      </div>
      <div className="bg-zinc-300 self-stretch flex w-px h-[19px] flex-col" />
      <img
      src={phone}
        className="aspect-square object-cover object-center w-[20px] h-[20px] mt-[35px] overflow-hidden self-stretch max-w-full"
      />
      <div className="text-black text-base font-semibold leading-[93.75%]">
        <br />
        +2349067322844
        <br />
      </div>
    </div>
  </div>
);
}
export default NavBar