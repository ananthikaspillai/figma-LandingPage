import React from 'react'
import piping from "../../assets/piping.svg"
import branding from "../../assets/branding.svg"
function BannerFifth() {
    return (
        <div className="self-center w-[920px] max-w-full ml-10 px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:max-w-full max-md:mt-8">
                <div className="items-start flex w-[445px] max-w-full flex-col">
                  <div className="text-zinc-900 text-5xl font-extrabold leading-[133.333%] max-md:max-w-full max-md:text-4xl">
                    Real Stories from Real Customers
                  </div>
                  <div className="text-zinc-900 text-lg leading-[177.778%] mt-2 max-md:max-w-full">
                    Get inspired by these stories.
                  </div>
                </div>
                <div className="shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] bg-white flex w-[350px] max-w-full grow flex-col mt-6 pt-28 pb-24 px-5 rounded-lg">
                  <div className="items-start self-center flex w-[286px] max-w-full gap-4">
                    <img
                     src={piping}
                      className="aspect-[1.14] object-cover object-center w-4 opacity-30 overflow-hidden max-w-full"
                    />
                    <div className="items-start flex flex-col grow shrink-0 basis-auto">
                      <div className="text-black text-base leading-[200%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                        aliquam, purus sit amet luctus venenatis, lectus magna
                        fringilla urna, porttitor rhoncus dolor purus non enim
                        praesent elem
                      </div>
                      <div className="items-start flex w-[127px] max-w-full grow flex-col mt-6">
                        <div className="text-zinc-900 text-lg font-bold leading-[155.556%]">
                          Floyd Miles
                        </div>
                        <div className="text-gray-400 text-sm font-medium leading-[171.429%]">
                          Vice President, CLI
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col mt-12 max-md:max-w-full max-md:mt-10">
                <div className="shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] bg-white flex w-[445px] max-w-full flex-col pt-10 pb-3.5 px-5 rounded-lg">
                  <div className="self-center flex w-[381px] max-w-full flex-col">
                    <img
                    src={branding}
                      className="aspect-[1.58] object-cover object-center w-[79px] overflow-hidden max-w-full ml-8 max-md:ml-2.5"
                    />
                    <div className="items-start flex w-full gap-4 mt-4">
                      <img
                        src={piping}
                        className="aspect-[1.14] object-cover object-center w-4 opacity-30 overflow-hidden max-w-full"
                      />
                      <div className="items-start flex flex-col grow shrink-0 basis-auto">
                        <div className="text-black text-base leading-[200%]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                          aliquam, purus sit amet luctus venenatis, lectus magna
                          fringilla urna, porttitor rhoncus dolor purus non enim
                          praesent elem
                        </div>
                        <div className="items-start flex w-[111px] max-w-full grow flex-col mt-6">
                          <div className="text-zinc-900 text-lg font-bold leading-[155.556%]">
                            Jane Cooper
                          </div>
                          <div className="text-gray-400 text-sm font-medium leading-[171.429%]">
                            CEO, JPNL
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] bg-white flex w-[350px] max-w-full grow flex-col mt-8 pt-10 pb-8 px-5 rounded-lg">
                  <div className="self-center flex w-[286px] max-w-full flex-col">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[1.9] object-cover object-center w-[120px] overflow-hidden max-w-full ml-6 max-md:ml-2.5"
                    />
                    <div className="items-start flex w-full gap-4">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="aspect-[1.14] object-cover object-center w-4 opacity-30 overflow-hidden max-w-full"
                      />
                      <div className="items-start flex flex-col grow shrink-0 basis-auto">
                        <div className="text-zinc-900 text-lg leading-[177.778%]">
                          LemonWares saved our time in Hosting my company page.
                        </div>
                        <div className="items-start flex w-[211px] max-w-full grow flex-col mt-6">
                          <div className="text-zinc-900 text-lg font-bold leading-[155.556%]">
                            Kristin Watson
                          </div>
                          <div className="text-gray-400 text-sm font-medium leading-[171.429%]">
                            Co-Founder, LeeveOn Branding
                          </div>
                        </div>
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
    
    export default BannerFifth
    