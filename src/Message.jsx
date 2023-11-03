import React, { useState } from "react";
import { BiSearch, BiXCircle } from "react-icons/bi";
import { RiCheckDoubleLine } from "react-icons/ri";


function Message() {
  const[open, setOpen] = useState(false);
  return (
   
      <div className={(open ? "hidden" : "block") + " text-black bg-slate-100 w-[300px] h-[570px] px-5 py-6  m-auto rounded-3xl  items-center justify-center   shadow-2xl "}>
        {/* first section  */}

        <div className="flex justify-between items-center mb-8 ">
          <BiSearch className="bg-white rounded-full p-2 text-3xl" />
          
          <button onClick={() => setOpen(!open)} className="cursor-pointer">
          <div className='text-red-400'><BiXCircle /></div>
          {/* <RiBallPenLine  className="bg-white rounded-full p-2 text-3xl" /> */}
          </button>
        </div>

        {/* section section  */}

        <div className="flex flex-col">

                {/* chat num  */}
          <div className="flex  justify-between items-center mb-6 ">
            <div className="flex gap-3 ">
              <img
                className="rounded-full  object-cover h-10 w-10 "
                src="https://i.pinimg.com/564x/1f/70/91/1f709145966a0a5cc1a7b5a836e906bd.jpg"
                alt=""
              />

              <div>
                <h1>Anushka naik</h1>
                <p className="text-xs">How about your  project?</p>
              </div>
            </div>
          <div>
            <p className="text-xs">15:20 PM </p>
            <h1 className="text-xs bg-red-700 text-white px-1 rounded-full float-right ">3</h1>
          </div>
          </div>
                   {/* chat end  */}
                {/* chat num  */}
          <div className="flex  justify-between items-center mb-6 ">
            <div className="flex gap-3 ">
              <img
                className="rounded-full  object-cover h-10 w-10 "
                src="https://i.pinimg.com/564x/1f/70/91/1f709145966a0a5cc1a7b5a836e906bd.jpg"
                alt=""
              />

              <div>
                <h1>Anushka naik</h1>
                <p className="text-xs">How about your  project?</p>
              </div>
            </div>
          <div>
            <p className="text-xs">15:20 PM </p>
            <h1 className="text-sm text-green-700  px-1 rounded-full float-right "><RiCheckDoubleLine/></h1>
          </div>
          </div>
                   {/* chat end  */}
                {/* chat num  */}
          <div className="flex  justify-between items-center mb-6 ">
            <div className="flex gap-3 ">
              <img
                className="rounded-full  object-cover h-10 w-10 "
                src="https://i.pinimg.com/564x/1f/70/91/1f709145966a0a5cc1a7b5a836e906bd.jpg"
                alt=""
              />

              <div>
                <h1>Anushka naik</h1>
                <p className="text-xs">How about your  project?</p>
              </div>
            </div>
          <div>
            <p className="text-xs">15:20 PM </p>
            <h1 className="text-xs bg-red-700 text-white px-1 rounded-full float-right ">3</h1>
          </div>
          </div>
                   {/* chat end  */}
                {/* chat num  */}
          <div className="flex  justify-between items-center mb-6 ">
            <div className="flex gap-3 ">
              <img
                className="rounded-full  object-cover h-10 w-10 "
                src="https://i.pinimg.com/564x/1f/70/91/1f709145966a0a5cc1a7b5a836e906bd.jpg"
                alt=""
              />

              <div>
                <h1>Anushka naik</h1>
                <p className="text-xs">How about your  project?</p>
              </div>
            </div>
          <div>
            <p className="text-xs">15:20 PM </p>
            <h1 className="text-xs bg-red-700 text-white px-1 rounded-full float-right ">3</h1>
          </div>
          </div>
                   {/* chat end  */}
                {/* chat num  */}
          <div className="flex  justify-between items-center mb-6 ">
            <div className="flex gap-3 ">
              <img
                className="rounded-full  object-cover h-10 w-10 "
                src="https://i.pinimg.com/564x/1f/70/91/1f709145966a0a5cc1a7b5a836e906bd.jpg"
                alt=""
              />

              <div>
                <h1>Anushka naik</h1>
                <p className="text-xs">How about your  project?</p>
              </div>
            </div>
          <div>
            <p className="text-xs">15:20 PM </p>
            <h1 className="text-sm text-green-700  px-1 rounded-full float-right "><RiCheckDoubleLine/></h1>
          </div>
          </div>
                   {/* chat end  */}
                {/* chat num  */}
          <div className="flex  justify-between items-center mb-6 ">
            <div className="flex gap-3 ">
              <img
                className="rounded-full  object-cover h-10 w-10 "
                src="https://i.pinimg.com/564x/1f/70/91/1f709145966a0a5cc1a7b5a836e906bd.jpg"
                alt=""
              />

              <div>
                <h1>Anushka naik</h1>
                <p className="text-xs">How about your  project?</p>
              </div>
            </div>
          <div>
            <p className="text-xs">15:20 PM </p>
            <h1 className="text-sm text-green-700  px-1 rounded-full float-right "><RiCheckDoubleLine/></h1>
          </div>
          </div>
                   {/* chat end  */}
               
        </div>

        {/* second section end  */}

        {/* third section */}
        {/* <div className="flex  text-lg text-gray-500 rounded-lg   items-center justify-around h-20 bg-white ">

              
                <AiOutlineMessage className="hover:text-[#FB7F6B]"/>
                <BiPhone className="hover:text-[#FB7F6B]"/>
                <BiVideo className="hover:text-[#FB7F6B]"/>
                <BiUser className="hover:text-[#FB7F6B]"/>

        </div> */}
        {/* third section end*/}
      </div>
    /* </div> */
  );
}

export default Message;
