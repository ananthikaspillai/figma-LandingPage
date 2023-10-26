import React from 'react'
import  panel from "../../assets/panel.svg"
import  imunify from "../../assets/imunify.svg"
import  litespeed from "../../assets/litespeed.svg"
import  softaculs from "../../assets/softaculs.svg"
import  wordpress from "../../assets/wordpress.svg"
import  cloudflair from "../../assets/cloudflair.svg"
function BannerSecond() {
  return (
        <div className="self-stretch mt-24 px-5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-zinc-900 text-5xl font-extrabold leading-[133.333%] max-md:max-w-full max-md:text-4xl">
                  True Cloud Web Hosting
                </div>
                <div className="text-zinc-900 text-lg leading-[177.778%] mt-6 max-md:max-w-full">
                  <br />
                  True Cloud Web Hosting All of the hosting packages we offer aredeployed instantly on our SSD powered cloud. We don’t usededicated servers that operate on single pieces of hardware. Ourentire infrastructure is built to be reliable, secure, andscalable.
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
              <div className="grow my-auto max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col mt-2 max-md:mt-10">
                      <img
                        src={panel}
                        className="aspect-[4.7] object-cover object-center w-[141px] overflow-hidden self-center max-w-full"
                      />
                      <img
                        src={softaculs}
                        className="aspect-[1.87] object-cover object-center w-full overflow-hidden self-stretch grow mt-14 max-md:mt-10"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col mt-1 max-md:mt-10">
                      <img
                        src={imunify}
                        className="aspect-[2.5] object-cover object-center w-[125px] overflow-hidden self-center max-w-full"
                      />
                      <img
                        src={wordpress}
                        className="aspect-[3] object-cover object-center w-full overflow-hidden self-stretch grow mt-14 max-md:mt-10"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col max-md:mt-10">
                      <img
                        src={litespeed}
                        className="aspect-[2.31] object-cover object-center w-[125px] overflow-hidden max-w-full"
                      />
                      <img
                        src={cloudflair}
                        className="aspect-[3.04] object-cover object-center w-full overflow-hidden grow mt-14 max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    

export default BannerSecond