import React from 'react'
import piping from "../../assets/piping.svg"
import branding from "../../assets/branding.svg"
import glasses from "../../assets/glasses.svg"
import nadine from "../../assets/nadine.svg"
import scents from "../../assets/scents.svg"
 function Bottom1() {
return (
    <div className="self-center flex w-full max-w-[1194px] items-start justify-between gap-5 mt-20 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
      <div className="items-start self-center flex flex-col my-auto max-md:max-w-full">
        <div className="text-zinc-900 text-5xl font-extrabold leading-[133.333%] max-md:max-w-full max-md:text-4xl">
          We serve over 100
          <br />
          Nigerian Websites
        </div>
        <div className="text-zinc-900 text-lg leading-[177.778%] mt-2 max-md:max-w-full">
          Connect LemonWares with your favourite tools that you use daily and
          keep things on track.
        </div>
      </div>
      <div className="self-stretch grow shrink-0 basis-auto max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:mt-10">
              <img
               src={piping}
                className="aspect-square object-cover object-center w-full overflow-hidden self-stretch"
              />
              <img
                 src={branding}
                className="aspect-square object-cover object-center w-full overflow-hidden self-stretch grow"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img
            src={scents}
              className="aspect-[0.52] object-cover object-center w-full overflow-hidden grow mt-2.5 max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img
             src={glasses}
              className="aspect-[0.52] object-cover object-center w-full overflow-hidden grow mt-2.5 max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bottom1