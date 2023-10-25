import React from 'react'
import scroller from  "../../assets/scroller.svg"
import circle from  "../../assets/circle.svg"
import checkmark from  "../../assets/checkmark.svg"
function BannerFourth() {
return (
    <div className="self-center flex w-full max-w-[1097px] flex-col mt-36 px-5 max-md:max-w-full max-md:mt-10">
      <div className="text-black text-center text-5xl font-semibold leading-[120%] max-w-[650px] self-center ml-4 max-md:max-w-full max-md:text-4xl">
        Ready to get started with <br />
        Lemon Wares?
      </div>
      <div className="text-black text-center text-2xl leading-[100%] self-center max-w-[464px] ml-4 mt-14 max-md:max-w-full max-md:mt-10">
        Choose the package that suits you
      </div>
      <div className="self-center flex w-[428px] max-w-full items-start justify-between gap-5 ml-14 mt-14 max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <div className="text-black text-center text-2xl leading-[100%] self-center my-auto">
          Monthly
        </div>
        <div>
        <img
          src={scroller}
          className="aspect-[1.86] object-cover object-center w-[93px] overflow-hidden self-stretch max-w-full"
        />
        <img src={circle} className="color-blue w-7 h-7 bg-white rounded-full"/>
        </div>
        <div className="text-black text-center text-2xl leading-[100%] self-center my-auto">
          Yearly
        </div>
        <div className="text-black text-center text-xs font-medium leading-[90%] self-center bg-amber-200 w-[87px] max-w-full my-auto px-2.5 py-2 rounded-lg">
          20% discount
        </div>
      </div>
      <div className="self-center flex w-[551px] max-w-full items-start justify-between gap-5 ml-4 mt-16 max-md:flex-wrap max-md:mt-10">
        <div className="text-black text-center text-3xl font-semibold leading-[133.333%] self-stretch">
          Basic
        </div>
        <div className="text-black text-center text-3xl font-semibold leading-[133.333%] self-stretch">
          Premium
        </div>
      </div>
      <div className="bg-stone-300 self-center flex w-[856px] max-w-full flex-col mt-4 pr-5">
        <div className="bg-red-700 flex w-[443px] h-1 flex-col max-md:max-w-full" />
      </div>
      <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)_inset] bg-white flex w-full grow flex-col flex-1 mx-auto pt-9 pb-12 px-5 rounded-2xl border-[1.5px] border-solid border-stone-300 max-md:mt-10">
              <div className="self-center flex w-[237px] max-w-full flex-col">
                <div className="text-black text-center text-3xl font-semibold leading-[89.286%]">
                  Starter
                </div>
                <div className="text-black text-xs leading-[150%] mt-3">
                  with all your customers via all conversation channels in one
                  central dashboard.
                </div>
                <div className="text-black text-5xl font-semibold leading-[76.19%] mt-10 max-md:mt-10">
                  $2.80
                </div>
                <div className="text-black text-center text-sm font-light leading-[100%] mt-2.5">
                  Per month
                </div>
                <div className="bg-white flex w-full flex-col mt-9 p-5 rounded-xl border-2 border-solid border-black">
                  <div className="text-black text-center text-sm font-semibold leading-[228.571%] self-center">
                    Choose this Plan
                  </div>
                </div>
                <div className="flex w-[116px] max-w-full items-start justify-between gap-5 mt-9">
                  <img
                    src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-bold leading-[150%] self-center my-auto">
                    2GB SSD
                    <br />
                  </div>
                </div>
                <div className="flex w-[174px] max-w-full items-start justify-between gap-5 mt-4">
                  <img
                    src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    10GB Bandwidth
                  </div>
                </div>
                <div className="flex w-[188px] max-w-full items-start justify-between gap-5 mt-4">
                  <img
                  src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    15 Email Accounts
                  </div>
                </div>
                <div className="flex w-[204px] max-w-full items-start justify-between gap-5 mt-4">
                  <img
                   src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-bold leading-[150%] self-center my-auto">
                    Unlimited Database
                  </div>
                </div>
                <div className="flex w-[157px] max-w-full items-start justify-between gap-5 mt-4">
                  <img
                  src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    4 Subdomains
                  </div>
                </div>
                <div className="flex w-[175px] max-w-full items-start justify-between gap-5 mt-4">
                  <img
                   src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    1 Parked Domain
                  </div>
                </div>
                <div className="flex w-[132px] max-w-full items-start justify-between gap-5 mt-4">
                  <img
                   src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    2 Websites
                  </div>
                </div>
                <div className="flex w-[111px] max-w-full items-start justify-between gap-5 mt-6">
                  <img
                   src={checkmark}
                    className="aspect-[1.5] object-cover object-center w-[18px] fill-black overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%]">
                    Free SSL
                  </div>
                </div>
                <div className="flex w-[139px] max-w-full items-start justify-between gap-5 mt-5">
                  <img
                   src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] my-auto">
                    Softaculous
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)_inset] bg-white flex w-full grow flex-col flex-1 mx-auto pt-9 pb-12 px-5 rounded-2xl border-[1.5px] border-solid border-stone-300 max-md:mt-10">
              <div className="self-center flex w-[237px] max-w-full flex-col">
                <div className="text-black text-3xl font-semibold leading-[89.286%]">
                  Standard
                </div>
                <div className="text-black text-xs leading-[150%] mt-3">
                  with all your customers via all conversation channels in one
                  central dashboard.
                </div>
                <div className="text-black text-5xl font-semibold leading-[76.19%] mt-10 max-md:mt-10">
                  $4.20
                </div>
                <div className="text-black text-center text-sm font-light leading-[100%] mt-2.5">
                  Per month
                </div>
                <div className="bg-white flex w-full flex-col mt-9 p-5 rounded-xl border-2 border-solid border-black">
                  <div className="text-black text-center text-sm font-semibold leading-[228.571%] self-center">
                    Choose this Plan
                  </div>
                </div>
                <div className="flex w-[116px] max-w-full items-start justify-between gap-5 mt-9">
                  <img
                    src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-bold leading-[150%] self-center my-auto">
                    2GB SSD
                    <br />
                  </div>
                </div>
                <div className="flex w-[174px] max-w-full items-start justify-between gap-5 mt-4">
                  <img
                   src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    10GB Bandwidth
                  </div>
                </div>
                <div className="flex w-[188px] max-w-full items-start justify-between gap-5 mt-4">
                  <img
                    src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    15 Email Accounts
                  </div>
                </div>
                <div className="flex w-[204px] max-w-full items-start justify-between gap-5 mt-4">
                  <img
                   src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-bold leading-[150%] self-center my-auto">
                    Unlimited Database
                  </div>
                </div>
                <div className="flex w-[157px] max-w-full items-start justify-between gap-5 mt-4">
                  <img
                  src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    4 Subdomains
                  </div>
                </div>
                <div className="flex w-[175px] max-w-full items-start justify-between gap-5 mt-4">
                  <img
                   src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    1 Parked Domain
                  </div>
                </div>
                <div className="flex w-[132px] max-w-full items-start justify-between gap-5 mt-4">
                  <img
                  src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    2 Websites
                  </div>
                </div>
                <div className="flex w-[111px] max-w-full items-start justify-between gap-5 mt-6">
                  <img
                src={checkmark}
                    className="aspect-[1.5] object-cover object-center w-[18px] fill-black overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%]">
                    Free SSL
                  </div>
                </div>
                <div className="flex w-[139px] max-w-full items-start justify-between gap-5 mt-5">
                  <img
                    src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] my-auto">
                    Softaculous
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)_inset] bg-white flex w-full grow flex-col flex-1 mx-auto pt-9 pb-12 px-5 rounded-2xl border-[1.5px] border-solid border-stone-300 max-md:mt-10">
              <div className="self-center flex w-[238px] max-w-full flex-col">
                <div className="text-black text-3xl font-semibold leading-[89.286%]">
                  Suprem
                </div>
                <div className="text-black text-xs leading-[150%] mt-1.5 max-md:ml-px">
                  with all your customers via all conversation channels in one
                  central dashboard.
                </div>
                <div className="text-black text-5xl font-semibold leading-[76.19%] mt-10 max-md:ml-2 max-md:mt-10">
                  $7.00
                </div>
                <div className="text-black text-center text-sm font-light leading-[100%] mt-2.5 max-md:ml-2">
                  Per month
                </div>
                <div className="bg-white flex w-full flex-col mt-9 p-5 rounded-xl border-2 border-solid border-black max-md:ml-px">
                  <div className="text-black text-center text-sm font-semibold leading-[228.571%] self-center">
                    Choose this Plan
                  </div>
                </div>
                <div className="flex w-[116px] max-w-full items-start justify-between gap-5 mt-9 max-md:ml-px">
                  <img
                   src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-bold leading-[150%] self-center my-auto">
                    2GB SSD
                    <br />
                  </div>
                </div>
                <div className="flex w-[174px] max-w-full items-start justify-between gap-5 mt-4 max-md:ml-px">
                  <img
                   src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    10GB Bandwidth
                  </div>
                </div>
                <div className="flex w-[188px] max-w-full items-start justify-between gap-5 mt-4 max-md:ml-px">
                  <img
                  src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    15 Email Accounts
                  </div>
                </div>
                <div className="flex w-[204px] max-w-full items-start justify-between gap-5 mt-4 max-md:ml-px">
                  <img
                  src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-bold leading-[150%] self-center my-auto">
                    Unlimited Database
                  </div>
                </div>
                <div className="flex w-[157px] max-w-full items-start justify-between gap-5 mt-4 max-md:ml-px">
                  <img
                   src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    4 Subdomains
                  </div>
                </div>
                <div className="flex w-[175px] max-w-full items-start justify-between gap-5 mt-4 max-md:ml-px">
                  <img
                  src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    1 Parked Domain
                  </div>
                </div>
                <div className="flex w-[132px] max-w-full items-start justify-between gap-5 mt-4 max-md:ml-px">
                  <img
                 src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] self-center my-auto">
                    2 Websites
                  </div>
                </div>
                <div className="flex w-[111px] max-w-full items-start justify-between gap-5 mt-6 max-md:ml-1">
                  <img
                    src={checkmark}
                    className="aspect-[1.5] object-cover object-center w-[18px] fill-black overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%]">
                    Free SSL
                  </div>
                </div>
                <div className="flex w-[139px] max-w-full items-start justify-between gap-5 mt-5 max-md:ml-px">
                  <img
                   src={checkmark}
                    className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-zinc-500 text-base font-semibold leading-[150%] my-auto">
                    Softaculous
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 export default BannerFourth