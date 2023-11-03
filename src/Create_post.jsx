import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FcStackOfPhotos } from "react-icons/fc";
import { ImCross } from "react-icons/im";
import { IoIosColorPalette } from "react-icons/io";
import { MdLocationOn, MdPeopleAlt } from "react-icons/md";
import { ThreeDots } from "react-loader-spinner";

function Create_post() {
  return (
    <div className="h-full w-full p-40  bg-[#05141C] flex flex-col gap-36  justify-between font-Smooch   ">
      <div className=" text-black bg-white w-[641px] h-[400px] m-auto rounded-lg p-4  items-center justify-center ">
        <div className="flex justify-between border-b-2 border-gray-400 pb-4  ">
          <h1 className="text-xl font-bold ">Create post</h1>
          <ImCross className="bg-gray-400 text-gray-300 rounded-full font-light w-7 h-7 p-1"/>
        </div>

        <div className="py-4 flex gap-2 ">
          <img className="rounded-full w-14 h-14 object-cover" src="https://uswfoxtail.blob.core.windows.net/foxtail-prod-uploads/images/Thinkst.f8f644e6.fill-750x422.format-jpeg.jpegquality-80.jpg" alt="" />
          <div className="cn">
            <h1>Anmol Rathi</h1>
            <button className="flex text-white items-center gap-1 bg-gray-400 rounded-lg p-1 "><MdPeopleAlt/>Friends <AiFillCaretDown/></button>
          </div>
        </div>

        <p className="text-lg">What do you want to talk about?</p>

        <div className="flex justify-between text-2xl pt-16 pb-4">
          <IoIosColorPalette className="rounded-full text-white p-1 text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          <BiSmile />
        </div>

        <div className="flex border-2 border-gray-400 p-2 justify-between mb-4 rounded-lg">
          <input className="flex text-gray-300 font-normal" type="text" placeholder="Add your text" />
          <div className="flex text-xl gap-4 ">
            <FcStackOfPhotos className="" />
            <MdPeopleAlt className="text-blue-400" />
            <BiSmile className="text-yellow-400" />
            <MdLocationOn className=" text-red-700 "   />
            <FaMicrophoneAlt className="text-indigo-700" />
            <BsThreeDots/>
          </div>
        </div>

        <button className="w-full  text-center bg-gray-400 p-2 text-white rounded-lg">
                post
        </button>
      </div>

{/* dark mode */}


      <div className=" text-white bg-[#1B2730] w-[641px] h-[430px] m-auto rounded-lg p-4  items-center justify-center ">
        <div className="flex justify-between border-b-2 border-gray-500 pb-4  ">
          <h1 className="text-xl font-bold ">Create post</h1>
          <ImCross className="bg-gray-500  rounded-full font-light w-7 h-7 p-1"/>
        </div>

        <div className="py-4 flex gap-2 items-center ">
          <img className="rounded-full w-14 h-14 object-cover" src="https://uswfoxtail.blob.core.windows.net/foxtail-prod-uploads/images/Thinkst.f8f644e6.fill-750x422.format-jpeg.jpegquality-80.jpg" alt="" />
          <div className="cn">
            <h1>Elon Musk</h1>
            <p>@elonmusk</p>
            {/* <button className="flex text-white items-center gap-1 bg-gray-400 rounded-lg p-1 "><MdPeopleAlt/>Friends <AiFillCaretDown/></button> */}
          </div>
        </div>

        <p className="text-lg text-slate-200 font-medium ">What do you want to talk about?</p>

        <div className="flex justify-between text-2xl pt-20 pb-4">
          <IoIosColorPalette className="rounded-full text-white p-1 text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          <BiSmile />
        </div>

        <div className="flex items-center gap-5 border-2 border-gray-500 p-2 justify-between mb-4 rounded-lg">
          <input className="flex bg-gray-700 p-1 rounded-lg w-full text-gray-300 font-normal" type="text" placeholder="Add your text..." />
          <div className="flex text-xl gap-4 ">
            <FcStackOfPhotos className="" />
            <MdPeopleAlt className="text-blue-400" />
            <BiSmile className="text-yellow-400" />
            <MdLocationOn className=" text-red-700 "   />
            <FaMicrophoneAlt className="text-indigo-700" />
            <BsThreeDots/>
          </div>
        </div>

        <button className="w-full text-center bg-blue-400 p-2 text-white font-bold text-md rounded-lg">
                post
        </button>
      </div>
    </div>
  );
}

export default Create_post;
