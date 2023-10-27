import React from 'react'
import uptime from "../../assets/uptime.svg"
import hosting from "../../assets/hosting.svg"
import certificates from "../../assets/certificates.svg"
import support from "../../assets/support.svg"
function BannerThird() {
return (
    <div className="self-center w-full max-w-[1180px] mt-[7px] px-4">
      <div className="gap-5 flex max-md:flex-col ">
        <div className=" w-[24%] ">
          <div className="flex grow flex-col ">
            <img
              src={uptime}
              className="aspect-[1.01] object-cover object-center w-[101px] overflow-hidden self-center max-w-full "
            />
            <div className="text-black text-xl font-bold self-center mt-5">
              99.9% Uptime
            </div>
            <div className="text-black text-center text-xs font-light mt-3">
              We Keep Your Web build Online 24x7x365.
              <br />
              Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col max-md:mt-10">
            <img
              src={hosting}
              className="aspect-square object-cover object-center w-[100px] overflow-hidden self-center max-w-full"
            />
            <div className="text-black text-xl font-bold self-stretch mt-6">
              Blazing Fast Web Hosting
            </div>
            <div className="text-black text-center text-xs font-light max-w-[252px] ml-3 mt-2.5 max-md:ml-2.5">
              We Keep Your Web build Online 24x7x365.
              <br />
              Downtime not only costs you lost visitors but also damages your
              reputation and search engine rankings.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col max-md:mt-10">
            <img
             src={certificates}
              className="aspect-[1.01] object-cover object-center w-[101px] overflow-hidden self-center max-w-full"
            />
            <div className="text-black text-center text-xl font-bold self-center mt-6">
              Free SSL Certificates
            </div>
            <div className="text-black text-center text-xs font-light mt-4">
              We Keep Your Web build Online 24x7x365.
              <br />
              Downtime not only costs you lost visitors but also damages your
              reputation and search engine rankings.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col max-md:mt-10">
            <img
              src={support}
              className="aspect-square object-cover object-center w-[100px] overflow-hidden self-center max-w-full"
            />
            <div className="text-black text-xl font-bold self-center mt-6">
              24x7 Friendly Support
            </div>
            <div className="text-black text-center text-xs font-light mt-3">
              We Keep Your Web build Online 24x7x365.
              <br />
              Downtime not only costs you lost visitors but also damages your
              reputation and search engine rankings.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerThird


  