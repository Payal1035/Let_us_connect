import React from 'react'
import { NavLink } from 'react-router-dom'

function Leftmid() {
    return (
        <div>
            <div className="bg-white p-6 pb-2 rounded-lg mt-2 ">
                <div className="flex gap-2 mb-5">
                    <img
                        className="object-cover rounded-full w-10"
                        src="https://miro.medium.com/max/1400/1*ii5coEmEhfnjRQRWp8RjfQ.jpeg"
                        alt=""
                    />
                    <div className='w-36'>
                        <h2>Post Pending</h2>
                        <p className='text-slate-500 text-sm'>10 post</p>
                    </div>
                    <button className="text-black bg-[#eff1f7] px-3 rounded-full font-bold w-1/3 h-8 ml-2 mt-2"> {/**onClick={() => pagedown(!pageup)}  */}
                        Approve
                    </button>
                </div>
                <div className="flex gap-2 mb-5">
                    <img
                        className="object-cover rounded-full w-10"
                        src
                        ="https://miro.medium.com/max/1400/1*ii5coEmEhfnjRQRWp8RjfQ.jpeg"
                        alt=""
                    />
                    <div className=' w-36'>
                        <h2>Members</h2>
                        <p className='text-slate-500 text-sm'>122</p>
                    </div>
                    <button className="text-black bg-[#eff1f7] px-3 rounded-full font-bold w-1/3 h-8 ml-2 mt-2">
                        View list
                    </button>
                </div>
                <NavLink to="/Kpp">
                <h2 className="text-blue-400 font-bold">Show More</h2>
                </NavLink>
            </div>
        </div>
    )
}

export default Leftmid
