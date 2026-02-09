import { useState, useEffect } from "react";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faNavicon } from "@fortawesome/free-solid-svg-icons";


export const SideModel = ({ ref , setSideBar}) => {

    return (
      <>
        {ref && <div onClick={() => setSideBar(false)} className="w-full h-screen absolute top-10 left-0 bg-[#111111b5] ">chal raha ia </div>}
      </>
    )

}

export default function App() {
  const [sideBar, setSideBar] = useState(false);



  return (
   <>
    <div className="fixed z-10 top-0 left-0 h-10 lg:h-15 w-screen the border  border-b-[#8b8989a9] bg-[#01011f] flex items-center">
      <h1 className="ml-4 text-[20px] lg:text-[30px] font-bold text-white font-[Arial] ">SahilCode<span className="text-[#00eeff]">X</span></h1>
      <div className="hidden lg:visible absolute right-2 lg:flex items-center gap-1 lg:gap-1 lg:pr-4">
        <li className=" uppercase lg:py-1.5 list-none text-[12px] lg:text-[18px] hover:bg-[#2423236b] rounded-[5px] lg:rounded-[18px] duration-300 text-white px-1 lg:px-5 font-[Arial] cursor-pointer">Home</li>
        <li className=" uppercase lg:py-1.5 list-none text-[12px] lg:text-[18px] hover:bg-[#2423236b] rounded-[5px] lg:rounded-[18px] duration-300 text-white px-1 lg:px-5 font-[Arial] cursor-pointer">projects</li>
        <li className=" uppercase lg:py-1.5 list-none text-[12px] lg:text-[18px] hover:bg-[#2423236b] rounded-[5px] lg:rounded-[18px] duration-300 text-white px-1 lg:px-5 font-[Arial] cursor-pointer">about</li>
        <li className=" uppercase lg:py-1.5 list-none text-[12px] lg:text-[18px] hover:bg-[#2423236b] rounded-[5px] lg:rounded-[18px] duration-300 text-white px-1 lg:px-5 font-[Arial] cursor-pointer">Contact</li>
      </div>

      <button onClick={() => setSideBar(true)} className="flex items-center absolute top-10.5 left-0.5 px-1.5 duration-200 py-2 rounded-[50%] active:bg-[#7474743b]">
        <FontAwesomeIcon icon={faNavicon} className="scale-[1.3] text-[white]"/>
      </button>
      <SideModel setSideBar={setSideBar} ref={sideBar}/>
      <div className={`absolute z-20 top-10 duration-300 ${sideBar ? "left-0" : "-translate-x-45"} h-screen pl-2 pr-3 bg-white flex flex-col w-43 pt-1`}>
        <button onClick={() => setSideBar(false)} className="items-center w-fit transform -translate-x-1 ml-0 px-1.5 duration-200 py-1 rounded-[50%] active:bg-[#2121213b]">
          <FontAwesomeIcon icon={faNavicon} className="scale-[1.3]"/>
        </button>
        <button className="flex font-bold pl-2 uppercase text-[15px] border-b border-b-gray-500 pt-3 font-[Arial] active:bg-[#7474743b] mb-1  w-full">Home</button>
        <button className="flex font-bold pl-2 uppercase text-[15px] border-b border-b-gray-500 pt-3 font-[Arial] active:bg-[#7474743b] mb-1 w-full">projects</button>
        <button className="flex font-bold pl-2 uppercase text-[15px] border-b border-b-gray-500 pt-3 font-[Arial] active:bg-[#7474743b] mb-1 w-full">about</button>
        <button className="flex font-bold pl-2 uppercase text-[15px] border-b border-b-gray-500 pt-3 font-[Arial] active:bg-[#7474743b] mb-1 w-full">Contact</button>
      </div>
    </div>
    <div className="absolute lg:top-15 top-10 bg-linear-to-br to-[#00001d]  from-[darkblue] w-full h-full">
      
    </div>
    
   </>
  );
}
