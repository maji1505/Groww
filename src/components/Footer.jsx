
import React from 'react'
import { LuUserCircle2 } from "react-icons/lu";
import { HiFaceSmile } from "react-icons/hi2";
import { AiOutlineProduct } from "react-icons/ai";
import { GrTime } from "react-icons/gr";
import { IoKeyOutline } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { NavLink, useNavigate } from 'react-router-dom';
function Footer() {

    const navigate=useNavigate();
    return (
        <div className='w-full  p-2 flex gap-2 flex-wrap'>
            <div className=' bg-slate-900 p-2 w-72 h-24'>
                <div className='flex items-center gap-2'> <span className='text-cyan-400 text-xl'><LuUserCircle2 /></span> <p className='text-slate-300'>New users </p> <p className='text-sm text-white bg-cyan-400 px-2 rounded-full'>See all</p></div>
                <div className='flex items-center '>
                    <div className='p-[3px] bg-slate-400 text-2xl'><HiFaceSmile /></div>
                    <div className='p-2'>
                        <p className='text-sm text-slate-400'>hubx</p>
                        <p className='text-sm text-slate-400 '>24 minutes</p>
                    </div>
                </div>
            </div>
            <div className=' bg-slate-900 p-2 h-52 w-72 '>
                <div className='flex items-center gap-2'> <span className='text-cyan-400 text-xl'><AiOutlineProduct /></span> <p className='text-slate-300'>How to sell courses blog </p> <p className='text-sm text-white bg-cyan-400 px-2 rounded-full'>See all</p></div>
                <div className='flex items-center '>
                    <ul className='text-cyan-200'>
                        <li className='w-64 text-sm py-2' >Blended Learning: what it is,why it Matters How to Apply</li>
                        <li className='w-64 text-sm py-2'> Join the Course Sales Bootcamp </li>
                        <li className='w-64 text-sm py-2'> 12 Steps to Creating Awesome Live Classes in 2021</li>
                       
                    </ul>
                </div>
            </div>
            <div className=' bg-slate-900 p-2  w-72 h-28'>
                <div className='flex items-center gap-2'> <span className='text-cyan-400 text-2xl'><GrTime /></span> <p className='text-white'>Events Log</p> <p className='text-sm text-white bg-cyan-400 px-2 rounded-full'>See all</p></div>
                <div className='flex flex-col pt-2 '>
                    <div className='flex items-center gap-1 '><span className='text-slate-400'><IoKeyOutline /></span> <p className='text-cyan-400 text-sm'>hubx</p></div>
                    <p className='text-sm text-slate-400 pl-4'>Logged in</p>
                    <p className='text-sm text-cyan-400 pl-4'>more info</p>
                </div>
            </div>
            <div>
                <div className=' bg-slate-900 p-2 h-auto w-72'>
                    <div className='flex justify-between'>
                        <div className='text-white'>Trial period</div>
                        <div className='text-2xl text-cyan-400'><GiSandsOfTime /></div>
                    </div>
                    <div className='flex pt-4 pb-2 items-end justify-between'>
                        <div className='h-20 w-20 flex items-center justify-center flex-col bg-cyan-400 border border-2 rounded-full text-center'><p className='text-sm text-white'>30 </p> <p className='text-sm text-white'>days left</p></div>
                        <div > <button className='px-2 py-1 bg-pink-700 rounded-full text-sm'>Upgrade now! &gt;&gt;</button></div>
                    </div>

                </div>
                <div className=' bg-slate-900 p-2 h-auto w-72 mt-2 '>
                    <div className='flex items-center gap-2 '> <span className='text-cyan-400 text-xl'><LuUserCircle2 /></span> <p>New users </p> <p className='text-sm text-white bg-cyan-400 px-2 rounded-full'>See all</p></div>
                    <div className='flex items-center p-2 '>
                        <div className='p-[3px] bg-slate-400 text-2xl relative'><HiFaceSmile /> <div className='w-1 h-1 rounded-full bg-green-800'></div></div>
                        <div className='p-2'>
                            <p className='text-sm text-cyan-400'>hubx</p>

                        </div>
                        <div className='pl-32'><button className='text-sm text-white bg-cyan-400 rounded-md px-2 py-[3px] text-center'>contact</button></div>
                    </div>
                 

                </div>
            </div>
            <div className='text-center m-auto mt-0'><button onClick={()=>navigate('/invite')} className='px-6 py-1 rounded-md hover:rounded-full text-2xl  active:text-cyan-800 text-white  bg-cyan-600'>Invite</button></div>
        </div>
    )
}

export default Footer