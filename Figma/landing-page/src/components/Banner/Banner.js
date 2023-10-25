

// import React from 'react';
// import photo from "../../assets/photo.svg";
// import './Banner.css'
// function Banner() {
//   return (
//     <div style={{display:"flex" }}>
//         <div style={{display:"flex",gap:"15px",marginTop:"50px",marginLeft:"100px"}}>
          
//                  <h2 style={{color:"#B00000",fontFamily:"Poppins",fontSize:"14px",fontWeight:"600",lineHeight:"normal"}} >Hosting</h2>
//                <h2 style={{color:"#D6D4D4E0",fontFamily:"Poppins",fontSize:"14px",fontWeight:"600",lineHeight:"normal"}} >Domain</h2>
//                 <h2 style={{color:"#D6D4D4E0",fontFamily:"Poppins",fontSize:"14px",fontWeight:"600",lineHeight:"normal"}} >SEO</h2>
//                 <h2 style={{color:"#D6D4D4E0",fontFamily:"Poppins",fontSize:"14px",fontWeight:"600",lineHeight:"normal"}} >Email</h2>
            
//      </div>
    
//       <div style={{ marginTop: "40px"}}>
//          <div style={{marginTop:"40px"}}>
//          <h1 style={{ color: "var(--text-title, #2E2E2E)", fontFamily: "Poppins", fontSize: "40px", fontWeight: "700", lineHeight: "55px",marginRight:"500px"  }}>Premium Web </h1>
//          </div>
//         <div>
//           <h2 style={{ color: "#808080", fontSize: "16px", fontFamily: "Inter", fontWeight: "400", letterSpacing: "0.8px",marginTop:"200px",marginRight:"400px" }}>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</h2>
//         </div>
//         <div>
//           <button style={{ color: "white", fontFamily: "Poppins", fontSize: "14px", fontWeight: "400", lineHeight: "22px", borderRadius: "8px", background: "#B00000", boxShadow: "0px 0px 64px 0px" }}>Create an Account</button>
//           <button style={{ color: "#000", fontFamily: "Poppins", fontSize: "14px", fontWeight: "400", lineHeight: "22px" }}>Choose your plan</button>
//         </div>
//       </div>
//       <div>
//         <img style={{ width: "260px", height: "260px" }} src={photo} alt='profile' />
//       </div>
//     </div>
//   );
// }

// export default Banner;

 import React from 'react';
 import photo from "../../assets/photo.svg";
 import './Banner.css'
function Banner() {
return (
  <div className="self-center w-full max-w-[1215px] mt-20 px-5 max-md:max-w-full max-md:mt-10">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
        <div className="flex flex-col max-md:max-w-full max-md:mt-10">
          <div className="flex w-[245px] max-w-full items-start justify-between gap-4 max-md:justify-center">
            <div className="text-red-700 text-base font-semibold">
              Hosting
            </div>
            <div className="text-neutral-300 text-opacity-90 text-base font-semibold">
              Domain
            </div>
            <div className="text-neutral-300 text-opacity-90 text-base font-semibold">
              SEO{" "}
            </div>
            <div className="text-neutral-300 text-opacity-90 text-base font-semibold">
              Email
            </div>
          </div>
          <div className="bg-neutral-200 flex w-[242px] max-w-full flex-col mt-1.5 pl-1 pr-5">
            <div className="bg-red-700 flex w-[47px] h-px flex-col" />
          </div>
          <div className="text-zinc-800 text-6xl font-bold leading-[121.094%] mt-6 max-md:max-w-full max-md:text-4xl">
            Premium Web Hosting for Your Website
          </div>
          <div className="text-zinc-500 text-base leading-[175%] tracking-wider mt-12 max-md:max-w-full max-md:mt-10">
            Blazing fast web hosting for individuals and businesses of all
            sizes backed by 24x7x365 Support.
          </div>
          <div className="flex w-[344px] max-w-full items-start justify-between gap-5 mt-16 max-md:mt-10">
            <div className="text-white text-sm leading-[171.429%] self-stretch justify-center items-center shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] bg-red-700 flex-1 pl-3.5 pr-3.5 py-3 rounded-lg">
              Create an Account
            </div>
            <div className="text-black text-sm leading-[171.429%] self-stretch justify-center items-center border border-[color:var(--base-black,#000)] flex-1 px-5 py-3 rounded-lg border-solid">
              Choose your plan
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
        <img className="aspect-[1.1] object-cover object-center w-full overflow-hidden grow mt-3 max-md:max-w-full max-md:mt-10" src={photo}
        />
      </div>
    </div>
  </div>
);
}
export default Banner






