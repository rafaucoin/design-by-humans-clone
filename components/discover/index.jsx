import React from "react";
import Image from "next/image";
function Discover() {
  return (
    <section className="relative flex flex-col ">
      <div className=" flex items-center justify-center top-[-20px] left-[40%] md:left-[47%] right-[50%]  absolute h-[90px] w-[90px] bg-white rounded-full">
        <span className="h-[80px] w-[80px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <title>Design By Humans</title>
            <path
              fill="currentColor"
              d="M15.096,1.401c-2.298-1.362-4.988-1.747-7.576-1.084C2.181,1.681-1.054,7.139,0.314,12.479 c1.364,5.341,6.824,8.573,12.165,7.208c5.341-1.368,8.574-6.825,7.208-12.165C19.025,4.936,17.393,2.761,15.096,1.401z M16.844,14.054c-1.084,1.829-2.815,3.125-4.872,3.652c-4.249,1.086-8.591-1.486-9.676-5.733c-1.09-4.247,1.482-8.589,5.731-9.675 c2.059-0.529,4.199-0.222,6.025,0.863c1.827,1.08,3.125,2.81,3.652,4.867c0.261,1.021,0.318,2.062,0.176,3.073 C17.737,12.133,17.388,13.134,16.844,14.054z M11.326,15.564c-2.47,0.634-4.334-0.36-5.028-3.066L5.37,8.864l2.021-0.516l0.915,3.58 c0.382,1.496,1.33,2.081,2.567,1.763c1.231-0.316,1.791-1.254,1.417-2.714l-0.933-3.646l2.024-0.517l0.914,3.569 C15.009,13.165,13.793,14.932,11.326,15.564 M8.074,5.763c0.153,0.605-0.212,1.225-0.82,1.379C6.647,7.3,6.03,6.933,5.874,6.325 C5.72,5.719,6.086,5.101,6.694,4.947C7.301,4.791,7.917,5.156,8.074,5.763 M11.709,4.865c0.156,0.608-0.211,1.228-0.816,1.38 c-0.607,0.156-1.225-0.212-1.38-0.817C9.356,4.82,9.721,4.203,10.329,4.049C10.936,3.892,11.553,4.258,11.709,4.865"
            ></path>
          </svg>
        </span>
      </div>
      <div className=" pb-20 mt-[90px] flex justify-center font-small text-gray-500 text-xl">
        <em>
          Discover apparel and accessories from independent artists, content
          creators, and your favorite brands all in one place.
        </em>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 p-5 ">
        <div className="group md:col-span-2 overflow-hidden relative">
          <img
            src="/blocks/1.png "
            className="transition-all duration-700 ease-in-out transform group-hover:scale-[1.008] bg-blue-200 "
          />
        </div>
        <div className="group md:row-span-2 overflow-hidden relative">
          <img
            src="/blocks/2.png "
            className="h-full transition-all duration-700 ease-in-out transform group-hover:scale-[1.008] bg-blue-200 "
          />
          <div className="absolute bg-black bg-opacity-50  w-full h-full flex items-center top-0 justify-center ">
            <h1 className="font-bold opacity-1 text-md	md:text-3xl text-white">
              SHOP MEN&aposS
            </h1>
          </div>
        </div>
        <div className="group  overflow-hidden relative">
          <img
            src="/blocks/3.png "
            className="transition-all duration-700 ease-in-out transform group-hover:scale-[1.008] bg-blue-200 "
          />
          <div className="absolute bg-black bg-opacity-50  w-full h-full flex items-center top-0 justify-center ">
            <img src="/blocks/star.png" />
          </div>
        </div>
        <div className="group  overflow-hidden  relative">
          <img
            src="/blocks/4.png "
            className="transition-all duration-700 ease-in-out transform group-hover:scale-[1.008] bg-blue-200 "
          />
          <div className="absolute bg-black bg-opacity-50  w-full h-full flex items-center top-0 justify-center ">
            <img src="/blocks/marvel.png" />
          </div>
        </div>
        <div className="group md:row-span-2 overflow-hidden  relative	">
          <img
            src="/blocks/5.png "
            className=" h-full transition-all duration-700 ease-in-out transform group-hover:scale-[1.008] bg-blue-200 "
          />
          <div className="absolute bg-black bg-opacity-50  w-full h-full flex items-center top-0 justify-center ">
            <h1 className="font-bold opacity-1 text-md	md:text-3xl text-white">
              SHOP WOMEN&aposS
            </h1>
          </div>
        </div>
        <div className="group md:col-span-2 overflow-hidden relative	">
          <img
            src="/blocks/6.png "
            className="transition-all duration-700 ease-in-out transform group-hover:scale-[1.008] bg-blue-200 "
          />
          <div className="absolute bg-black bg-opacity-50  w-full h-full flex items-center top-0 justify-center ">
            <h1 className="font-bold opacity-1 text-md	md:text-3xl text-white">
              SHOP TRENDING DESIGNS
            </h1>
          </div>
        </div>
        <div className="group overflow-hidden relative">
          <img
            src="/blocks/7.png "
            className="transition-all duration-700 ease-in-out transform group-hover:scale-[1.008] bg-blue-200 "
          />
          <div className="absolute bg-black bg-opacity-50  w-full h-full flex items-center top-0 justify-center ">
            <h1 className="font-bold opacity-1 text-md	md:text-3xl text-white">FANSHOPS</h1>
          </div>
        </div>
        <div className="group overflow-hidden	 relative">
          <img
            src="/blocks/8.png "
            className="transition-all duration-700 ease-in-out transform group-hover:scale-[1.008] bg-blue-200 "
          />
        </div>
      </div>
    </section>
  );
}

export default Discover;
