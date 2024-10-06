import { FaPlus } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { MdQuestionMark } from "react-icons/md";
import React from 'react'

function Navbar() {
  return (
    <div className="flex  w-full  drop-shadow-lg border-blue-200  justify-between p-3 items-center  bg-slate-900 flex-wrap">
        <div className='flex flex-wrap '>
            <p className=' text-lg pr-3 text-white'>Dashboard</p>
            <ul className='flex gap-3 flex-wrap text-slate-500'>
            <li className="flex items-center gap-1"><span className="text-black p-2 rounded-full  text-sm bg-slate-300"><FaPlus  /></span><span>Create course</span></li>
            <li className="flex items-center gap-1"><span className="text-black p-2 rounded-full  text-sm bg-slate-300"><FaRegEye /></span><span>Preview home page</span></li>
            <li className="flex items-center gap-1"><span className="text-black p-2 rounded-full  text-sm bg-slate-300"><FaRegEye /></span><span>preview after login page</span></li>
            <li className="flex items-center gap-1"><span className="text-black p-2 rounded-full  text-sm bg-slate-300"><FaPowerOff /></span><span>view welcome screen</span></li>
            </ul>
            
        </div>
        <div className="flex items-center ">
          <span className="text-white p-1 text-xl bg-cyan-400 rounded-full"><MdQuestionMark /></span>  <span className="text-white pr-2 pl-1">Help</span>
        </div>
    </div>
  )
}

export default Navbar