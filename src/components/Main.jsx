import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuUserCircle2 } from "react-icons/lu";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { PiTeaBagBold } from "react-icons/pi";

function Main() {
    return (
        <div className='flex py-3 px-4 w-full bg-blue-100 bg-slate-900 h-auto gap-20 flex-wrap md:flex-nowrap'>
            <div className='w-[750px]' >
                <nav className='flex justify-between '>
                    <p className='text-slate-600 flex items-center gap-1'> <span className='text-cyan-400 text-lg'><FaRegCalendarAlt /></span>  <span className='text-slate-200'>Your school</span></p>
                    <ul className='flex gap-4'>
                        <li className='text-slate-400 hover:text-slate-300 hover:cursor-pointer '>New signup</li>
                        <li className='text-slate-400 hover:text-slate-300 hover:cursor-pointer'>Revenue</li>
                        <li className='text-slate-400 hover:text-slate-300 hover:cursor-pointer'>Product sales</li>
                        <li className='text-slate-400 hover:text-slate-300 hover:cursor-pointer'>Active learners</li>
                        <li>
                            <select className='text-sm bg-slate-300 p-1 rounded-full border-none '>
                                <option value="">Last 7 days</option>
                                <option value="">Last 5 days</option>
                                <option value="">Last 3 days</option>
                            </select>
                        </li>
                    </ul>
                </nav>
<div className='pt-4'>
    <ul className='text-slate-400'>
        <li>1</li>
        <li>0.75</li>
        <li>0.5</li>
        <li>0.25</li>
        <li className='flex items-center '><p>0</p> <input className='w-full my-2 accent-cyan-400 font-thin border-none' step={5} type="range" /></li>
    </ul>
</div>
            </div>
            <div className='flex flex-col  gap-8'>
                 <div>
                    <ul className=' flex gap-10'>
                        <li className='flex flex-col items-center'>
                            <span className='text-cyan-400 text-2xl'><LuUserCircle2 /></span>
                            <p className='text-sm text-slate-400 '>All users</p>
                            <p className='text-slate-400'>1</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <span className='text-cyan-400 text-2xl'><BiMessageRounded /></span>
                            <p className='text-sm text-slate-400 '>Conversions</p>
                            <p className='text-slate-400'>0<sub className='text-sm text-slate-400'>%</sub></p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <span className='text-cyan-400 text-2xl'><AiOutlineShopping /></span>
                            <p className='text-sm text-slate-400 '>30 days sales</p>
                            <p className='text-slate-400'>1</p>
                        </li>
                    </ul>
                 </div>
                 <div>
                    <ul className=' flex gap-10'>
                        <li className='flex flex-col items-center'>
                            <span className='text-cyan-400 text-2xl'><MdOutlineTimer /></span>
                            <p className='text-sm text-slate-400 '>Avg time</p>
                            <p className='text-slate-400'>1</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <span className='text-cyan-400 text-2xl'><CgNotes/></span>
                            <p className='text-sm text-slate-400 '>Courses</p>
                            <p className='text-slate-400'>0<sub className='text-sm text-slate-400'>%</sub></p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <span className='text-cyan-400 text-2xl'><PiTeaBagBold /></span>
                            <p className='text-sm text-slate-400 '>Course categories</p>
                            <p className='text-slate-400'>1</p>
                        </li>
                    </ul>
                 </div>
            </div>
        </div>
    )
}

export default Main