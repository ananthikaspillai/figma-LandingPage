import React from 'react'
import  panel from "../../assets/panel.svg"
import  imunify from "../../assets/imunify.svg"
import  litespeed from "../../assets/litespeed.svg"
import  softaculs from "../../assets/softaculs.svg"
import  wordpress from "../../assets/wordpress.svg"
import  cloudflair from "../../assets/cloudflair.svg"
function BannerSecond() {
  return (
        <div className=" mt-[80px] px-3 gap-5 flex max-md:flex-col  ">
          {/* <div className="gap-5 flex max-md:flex-col "> */}
            <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-zinc-900 text-4xl font-extrabold w-[594px] h-[65px]  ">
                 <h1 className="mr-[75px] "> True Cloud Web Hosting </h1>
                </div>
                <div className="text-zinc-900  w-[570px] h-[200px] leading-[177%] mt-2">
                 <h1 className="mr-[30px]"> True Cloud Web Hosting All of the hosting packages we offer are </h1> 
                 <h1 className="mr-[65px]">deployed instantly on our SSD powered cloud. We don’t use </h1>
                 <h1 className="mr-[30px]"> dedicated servers that operate on single pieces of hardware. Our </h1>
                  <h1 className="mr-[50px]"> entire infrastructure is built to be reliable, secure, andscalable. </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[51%] ml-5 ">
              {/* <div className="grow my-auto max-md:max-w-full max-md:mt-10"> */}
                <div className="gap-5 flex max-md">
                  <div className="flex flex-col items-stretch ">

                    <div className="flex grow flex-col  mr-20">
                      <img
                        src={panel}
                        className=" w-[140px]  h-[30px] "
                      />
                      <img
                        src={softaculs}
                        className="w-[160px] overflow-hidden self-stretch grow mt-14 "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex flex-col ">
                      <img
                        src={imunify}
                        className=" w-[125px] h-[50px]  mr-[60px] "
                      />
                      <img
                        src={wordpress}
                        className="  w-[150px] overflow-hidden self-stretch grow mt-14 "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[28%] mr-20">
                    <div className="flex flex-col ">
                      <img
                        src={litespeed}
                        className="  w-[125px] h-[53px] "
                      />
                      <img
                        src={cloudflair}
                        className="  w-[140px] overflow-hidden grow mt-[41px] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          // </div>
        // </div>
      );
    }
    
    

export default BannerSecond