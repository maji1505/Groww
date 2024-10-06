
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Invite() {
    const [invest, setInvest] = useState(500);
    const [returnRate, setReturnRate] = useState(5);
    const [timePeriod, setTimePeriod] = useState(1);
    const navigate=useNavigate();
 

    return (
        <div className='w-full h-full text-center '>
            <div><p className=' text-2xl text-white text-center pt-4'>Mutual Fund Return Calculator</p></div>
            <div className='flex w-full justify-evenly pt-6 flex-wrap'>
                <div className='flex flex-col p-4 w-96 items-center gap-4'>
                    <div className='w-full'>
                        <div className='flex justify-between'>
                            <p className='text-white'>Total Investment</p>
                            <p className='text-white'>{invest}</p>
                        </div>
                        <div className='w-full'>
                            <input
                                type="range"
                                className='w-full accent-blue-600'
                                min={500}
                                max={10000}
                                value={invest}
                                onChange={(e) => setInvest(parseInt(e.target.value, 10))} 
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-between'>
                            <p className='text-white'>Expected Return Rate (%)</p>
                            <p className='text-white'>{returnRate}%</p>
                        </div>
                        <div className='w-full'>
                            <input
                                type="range"
                                className='w-full accent-blue-600'
                                min={1}
                                max={20}
                                value={returnRate}
                                onChange={(e) => setReturnRate(parseFloat(e.target.value))} 
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-between'>
                            <p className='text-white'>Time Period (Years)</p>
                            <p className='text-white'>{timePeriod} Years</p>
                        </div>
                        <div className='w-full'>
                            <input
                                type="range"
                                className='w-full accent-blue-600'
                                min={1}
                                max={30}
                                value={timePeriod}
                                onChange={(e) => setTimePeriod(parseInt(e.target.value, 10))} 
                            />
                        </div>
                    </div>

                  
                    <div className='text-white flex gap-20'>
                        <div className='text-center'>
                            <p className='text-slate-400'>Total Investment</p>
                            <b className='text-white'>{invest}</b>
                        </div>
                        <div className='text-center'>
                            <p className='text-slate-400'>Est. Returns</p>
                            <b className='text-white'>{(invest * returnRate * timePeriod / 100).toFixed(2)}</b>
                        </div>
                    </div>
                    <div className='text-slate-400 justify-center'>
                        Total Value <b className='text-white'>{(invest + invest * returnRate * timePeriod / 100).toFixed(2)}</b>
                    </div>
                </div>

                <div className=' flex flex-col items-center p-4 gap-3'>
                   
                    <div>
                        <div className='flex items-center gap-2'> <p className='h-2 w-8 bg-blue-700'></p> <p className='text-sm text-slate-400'>Total investment</p>
                            <p className='h-2 w-8 bg-green-400 '></p> <p className='text-sm text-slate-400'>Total investment</p>
                        </div>
                    </div>
                    <div>
                       
                    </div>
                    <div>
                        <div
                            className='h-60 w-60 bg-white rounded-full border-[30px] transition-all duration-500 ease-in-out '
                            style={
                                invest < 2000
                                  ? { borderTopColor: "#4ade80" }
                                  : invest >= 2000 && invest < 5000
                                  ? { borderTopColor: "#4ade80", borderRightColor: "#4ade80" } 
                                  : invest >= 5000 && invest < 7000
                                  ? { borderTopColor: "#4ade80", borderRightColor: "#4ade80", borderBottomColor: "#4ade80" } 
                                  : invest >= 7000
                                  ? { borderTopColor: "#4ade80", borderRightColor: "#4ade80", borderBottomColor: "#4ade80", borderLeftColor: "#4ade80" } 
                                  : {}
                              }
                           ></div>
                    </div>
                    <div ><button className='bg-cyan-400 px-4 py-2 rounded-md hover:text-white' >INVEST NOW</button></div>
                </div>
            </div>
            <div> <button className='py-2 px-4 font-bold rounded-md bg-pink-600 text-2xl hover:text-white' onClick={()=>navigate('/home')}>Home</button></div>
        </div>
    )
}

export default Invite;


