import React from 'react'
import whitelogo from "../../assets/whitelogo.svg"
function Footer() {
return (
    <div className="bg-red-700 self-stretch flex w-full flex-col mt-28 pt-16 pb-20 px-5 max-md:max-w-full max-md:mt-10">
     <div className="self-center w-full max-w-[1218px] max-md:max-w-full">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    <div className="flex flex-col items-stretch w-[73%] max-md:w-full max-md:ml-0">
    <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
    <div className="w-[795px] max-w-full">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
    <div className="flex flex-col max-md:mt-10">
        <img
         src={whitelogo}
        className="aspect-[1.51] object-cover object-center w-[121px] overflow-hidden max-w-full"    />
    <div className="text-neutral-200 text-base leading-[200%] mt-2.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enim praesent elem
     </div>
    </div>
                  </div>
    <div className="flex flex-col items-stretch w-[23%] ml-5 max-md:w-full max-md:ml-0">
    <div className="flex grow flex-col mt-6 max-md:mt-10">
    <div className="text-white text-base font-bold leading-[150%]">Service
    </div>
    <div className="text-neutral-200 text-base leading-[200%] mt-6">Domain</div>
    <div className="text-neutral-200 text-base leading-[200%] mt-7">Shared Hosting
    </div>
    <div className="text-neutral-200 text-base leading-[200%] mt-6">Cloud Hosting</div>
    <div className="text-neutral-200 text-base leading-[200%] mt-6"> Private Hosting</div>
    </div>
                  </div>
    <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
        <div className="flex grow flex-col mt-6 max-md:mt-10">
        <div className="text-white text-base font-bold leading-[150%]">
                        Hosting
        </div>
        <div className="text-neutral-200 text-base leading-[200%] mt-5">
                        Cheap Hosting
        </div>
        <div className="text-neutral-200 text-base leading-[200%] mt-6">
                        Hosting Wordpress
        </div>
        <div className="text-neutral-200 text-base leading-[200%] mt-6">
                        Email Hosting
        </div>
        <div className="text-neutral-200 text-base leading-[200%] mt-6">
                        Hosting Unlimited
        </div>
        </div>
         </div>
        </div>
        </div>
         <div className="text-white text-base leading-[200%] mt-24 max-md:mt-10">
            <span className="text-white">Built by Jeremiah with </span>love{" "}
         <span className="text-white">in Lagos. Copyright 2021</span>
          </div>
         </div>
        </div>
          <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-[301px] max-w-full items-start justify-between gap-5 mt-6 max-md:mt-10">
              <div className="flex flex-col">
                <div className="text-white text-base font-bold leading-[150%]">
                  Company
                </div>
                <div className="text-neutral-200 text-base leading-[200%] mt-5">
                  About
                </div>
                <div className="text-neutral-200 text-base leading-[200%] mt-7">
                  Career
                </div>
                <div className="text-neutral-200 text-base leading-[200%] mt-7">
                  Contact Us
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-white text-base font-bold leading-[150%]">
                  Help
                </div>
                <div className="text-neutral-200 text-base leading-[200%] mt-5">
                  FAQ
                </div>
                <div className="text-neutral-200 text-base leading-[200%] mt-7">
                  Help support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer

