import React from 'react'
import {  useNavigate } from 'react-router-dom';


function Leftupper() {

    const navigate = useNavigate();

    const gotoinfo = () => {
        navigate('/Wsidebar');
    }
    return (
        <div>
        <div className={"bg-white text-center rounded-lg "}>
            <div className="h-20 w-full bg-red-300 rounded-lg pb-6" ></div>
            <img className="z-1 rounded object-cover w-[80%] h-24 relative bottom-9 m-auto " src='https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />

            <div className='pt-1 -mt-5'>
                <div className='text-2xl'>Payal Kumari Rajput</div>
                <p>payalkumari@</p>
            </div>
            <h2 className="my-3 font-medium ">
                ✨Think before you work<br /> penting posting✨
            </h2>

            <div className="flex justify-around text-base my-2 border-y-2 border-gray-700 py-2 ">
                <div>
                    <h1>64</h1>
                    <p>Members</p>
                </div>
                <div>
                    <h1>6,664</h1>
                    <p>Followers</p>
                </div>
            </div>
            <div onClick={() => gotoinfo()}>
            <h1  className=" mb-0 mt-2 font-bold pb-3 w-full cursor-pointer text-blue-400 hover:text-red-400 animate-bounce">My Info </h1>
            </div>
        </div>
        </div>
    )
}

export default Leftupper
