import React from 'react'
import whatsapp from "../../assets/whatsapp.svg"
import element1 from "../../assets/element1.svg"
import element2 from "../../assets/element2.svg"
import element3 from "../../assets/element3.svg"
 function Bottom2() {
  return (
    <div className="bg-slate-50 self-center flex w-full max-w-[1232px] flex-col mt-28 pb-10 px-5 rounded-2xl max-md:max-w-full max-md:mt-10">
      <img
       src={element1}
        className="aspect-square object-cover object-center w-10 fill-red-700 overflow-hidden self-center ml-0 max-w-full"
      />
      <div className="text-zinc-800 text-center text-6xl font-semibold leading-[137.5%] self-center max-w-screen-lg ml-3.5 mt-8 max-md:max-w-full max-md:text-4xl">
        We're here to make your website awesome.
      </div>{" "}
      <div className="self-center flex w-full max-w-[1272px] items-start justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <img
            src={element2}
          className="aspect-square object-cover object-center w-10 fill-red-700 overflow-hidden max-w-full mt-2"
        />{" "}
        <div className="justify-center items-start bg-red-700 flex w-52 max-w-full gap-2.5 pl-4 pr-5 py-3 rounded-lg">
          <img
           src={whatsapp}
            className="aspect-square object-cover object-center w-[25px] fill-white fill-opacity-0 overflow-hidden self-stretch max-w-full"
          />{" "}
          <div className="text-white text-sm leading-[171.429%] self-center my-auto">
            Get in touch with us
          </div>
        </div>{" "}
        <img
         src={element3}
          className="aspect-square object-cover object-center w-[72px] fill-red-700 overflow-hidden max-w-full mt-6"
        />
      </div>
    </div>
  );
}
export default Bottom2