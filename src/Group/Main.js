import React from 'react';
import Leftupper from './Left/Leftupper';
import Leftmid from './Left/Leftmid';
import Leftbottom from './Left/Leftbottom';
import Inputpost from './Center/Inputpost';
import Posts from './Center/Posts';
import Grouplist from './Right/Grouplist';
import Request from './Right/Request';

function Main() {

    

    return (
        <div className="h-full  bg-[#eff1f7]  py-5 px-0  overflow-hidden text-base relative">
            <div className='w-full flex text-black'>
                {/**Leftside */}
                <div className="w-1/4 overflow-hidden ml-3 ">
                    {/* upperside */}

                    <Leftupper />

                    {/* Middle */}

                    <Leftmid/>

                    {/**Bottom */}

                    <Leftbottom/>
                </div>
                {/**Left end */}
                {/**Center */}
                <div className="w-1/2 overflow-hidden px-4">
                    <Inputpost/>
                     {/* 1st layer end */}
                    <Posts/>
                </div>
                {/**Right Side */}
                <div className='w-[23%]'>
                    <Grouplist/>
                    <Request/>

                </div>

            </div>

            
        </div>
    )
}

export default Main
