import React, { useState } from 'react'
import Adminpage from './Adminpage'

function Oversetting() {
    let [open, setOpen] = useState(false);
    return (
        <div className='w-[100%]'>
            <div className='flex w-[100%]'>
                <div className="p-4 bg-white text-black w-[35%]">
                    <div className="font-bold text-xl p-4 pb-2">Settings</div>
                    <div className="p-1 pt-2 w-[100%]">
                       
                        <div onClick={() => setOpen(!open)} className="flex  p-2 border-b-2 border-gray-700 mt-1 pb-4 text-sm cursor-pointer">
                            <img src="images/acc.png" alt="" className="w-8 h-9 p-1 " />
                            <div className="flex-cloumn">
                                <div className="font-bold p-2">Account Settings</div>
                                <div className="pl-2">Personal  Informations , E- mail</div>
                            </div>
                            <img src="https://img.icons8.com/material-sharp/24/000000/chevron-right.png"
                                className="w-8 m-3 h-9 pt-3" />
                        </div>
                        <div className="flex  p-2 border-b-2 border-gray-700 pt-4 mt-1 pb-4 text-sm">
                            <img src="images/fav.png" alt="" className="w-8 h-9 p-1 " />
                            <div className="flex-cloumn">
                                <div className="font-bold p-2">Appereances</div>
                                <div className="pl-2">Dark and light mode, Font size</div>
                            </div>
                            <img src="https://img.icons8.com/material-sharp/24/000000/chevron-right.png"
                                className="w-8 m-3  h-9 pt-3" />
                        </div>
                        <div className="flex  p-2 border-b-2 border-gray-700 mt-1 pb-4 text-sm">
                            <img src="images/security.png" alt="" className="w-8 h-9 p-1 " />
                            <div className="flex-cloumn">
                                <div className="font-bold p-2">Security</div>
                                <div className="pl-2">Dark and light mode, Font size</div>
                            </div>
                            <img src="https://img.icons8.com/material-sharp/24/000000/chevron-right.png"
                                className="w-8 m-3 h-9 pt-3" />
                        </div>
                        <div className="flex p-2 border-b-2 border-gray-700 mt-1 pb-4 text-sm">
                            <img src="images/fav.png" alt="" className="w-8 h-9 p-1 " />
                            <div className="flex-cloumn">
                                <div className="font-bold p-2">Appereances</div>
                                <div className="pl-2">Dark and light mode, Font size</div>
                            </div>
                            <img src="https://img.icons8.com/material-sharp/24/000000/chevron-right.png"
                                className="w-8 m-3 h-9 pt-3" />
                        </div>
                        <div className="flex  p-2 mt-1 pb-4 text-sm">
                            <img src="images/home.png" alt="" className="w-8 h-9 p-1 " />
                            <div className="flex-cloumn">
                                <div className="font-bold p-2">Account Settings</div>
                                <div className="pl-2">Dark and light mode, Font size</div>
                            </div>
                            <img src="https://img.icons8.com/material-sharp/24/000000/chevron-right.png"
                                className="w-8 m-3 h-9 pt-3" />
                        </div>

                    </div>
                </div>
                <div className=" bg-white text-black p-4 pt-1 md:w-8/12 border-l-2 border-gray-700 w-[70%]">
                    <div className="text-black font-bold m-8 text-xl  ">Account Settings</div>
                    <div>
                        <div className="font-bold m-8  ml-2 pl-6 border-t-2 border-gray-700 pt-4">Personal informations</div>
                        <div className="text-gray-1 ml-8 -mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                        <form className="ml-8 mt-6">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-first-name">
                                        First Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="text" placeholder="Jane" />

                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-last-name">
                                        Last Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-white text-black border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="gmail">
                                        Email
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-gmail" type="email" placeholder="*************@gmial.com" />

                                </div>
                            </div>

                        </form>

                    </div>
                    <div className="mt-5 border-b-2 border-t-2 border-gray-700">
                        <div className="font-bold m-8">Notifications</div>
                        <div className="text-gray-1 ml-8 -mt-5">Choose type of notifications you want to recieve</div>
                        <div className="mt-2  ">
                            <div className="flex">
                                <div className="flex justify-center">
                                    <div className="flex m-8 -mt-2 ">
                                        <div className="form-check p-2 mt-1 ">
                                            <input
                                                className="form-check-input appearance-none h-4 w-4 border border-gray-700 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox" value="" id="flexCheckDefault" checked />
                                            <label className="form-check-label inline-block text-black" for="flexCheckDefault">
                                                Default checkbox
                                            </label>
                                        </div>
                                        <div className="form-check p-2 ml-24 mt-1">
                                            <input
                                                className="form-check-input appearance-none h-4 w-4 border border-gray-700 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox" value="" id="flexCheckChecked" />
                                            <label className="form-check-label inline-block text-black" for="flexCheckChecked">
                                                Checked checkbox
                                            </label>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="flex">
                                <div className="flex justify-center">
                                    <div className="flex m-8 -mt-2">
                                        <div className="form-check p-2 -mt-3">
                                            <input
                                                className="form-check-input appearance-none h-4 w-4 border border-gray-700 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label inline-block text-black" for="flexCheckDefault">
                                                Default checkbox
                                            </label>
                                        </div>
                                        <div className="form-check p-2 ml-24 -mt-3">
                                            <input
                                                className="form-check-input appearance-none h-4 w-4 border border-gray-700 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox" value="" id="flexCheckChecked" checked />
                                            <label className="form-check-label inline-block text-black" for="flexCheckChecked">
                                                Checked checkbox
                                            </label>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="flex">
                                <div className="flex justify-center">
                                    <div className="flex m-8 -mt-2">
                                        <div className="form-check p-2 -mt-3">
                                            <input
                                                className="form-check-input appearance-none h-4 w-4 border border-gray-700 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label inline-block text-black" for="flexCheckDefault">
                                                Default checkbox
                                            </label>
                                        </div>
                                        <div className="form-check p-2 ml-24 -mt-3">
                                            <input
                                                className="form-check-input appearance-none h-4 w-4 border border-gray-700 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox" value="" id="flexCheckChecked" checked />
                                            <label className="form-check-label inline-block text-black" for="flexCheckChecked">
                                                Checked checkbox
                                            </label>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="flex pl-6 pt-3 justify-center">
                        <div className="p-4">
                            <button className="bg-white hover:bg-[#525298] text-black font-bold py-2 px-12 border border-[#262837] rounded-3xl">
                                Discard Changes
                            </button>
                        </div>
                        <div className="p-4">
                            <button className="bg-[#525298] hover:bg-[#525298] text-black font-bold py-2 px-12 border border-[#262837] rounded-3xl">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={(open ? "right-0" : "-right-full") + ' absolute top-0 z-50 w-[66%]'}>
                <Adminpage />
            </div>
        </div>
    )
}

export default Oversetting
