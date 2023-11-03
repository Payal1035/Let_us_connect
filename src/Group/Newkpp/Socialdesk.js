import React from 'react'

export const users = [
    {
        id: "1",
        Name: "Diane Cooper",
        Gender: "Female",
        Email: "diane.cooper@example.com",
        Post: "15",
        YoutubeImage:
            "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        InstagramImage:
            "https://images.pexels.com/photos/4099414/pexels-photo-4099414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

        Education: "@dianecooper12",
        UserName: "@dianecooper12",
        MonthlyViews: "5.5K",
        YoutubeName: "Musical Cooper",
        InstagramName: "cooper12",
        Subscribers: "1.2K",
        Videos: "42",
        InstagramPost: "102",
        InstagramFollowers: "2.5K",

        Followers: "200",
        DOB: "24th Feb, 1997",
        City: "Chandigarh",
        Skills: "Singing, Dancing",
        Languages: "English, French",
        Instagram: "diane.cooper12",
        Upcoming: "2",
    },
];

function Socialdesk() {
    return (
        <div><div className="">
            <div className="flex flex-col  w-full  my-6  ">
                <div className="  flex flex-col items-center bg-[#fffdfe] rounded-lg lg:px-8 py-4 p-8">
                    <h1 className="font-bold text-red-600 stroke-black  text-5xl mb-4">
                        Youtube
                    </h1>
                    <div className=' px-7 py-3 mb-3  cursor-pointer  bg-gray-200  text-gray-400 hover:text-gray-500 text-6xl rounded-full  hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset]'>
                    +
                    </div> 

                    <button className='bg-red-600 px-4 py-1 rounded-lg my-3 text-white '>Login</button>
                </div>
                
                <div className=" flex flex-col items-center bg-[#fffdfe] rounded-lg lg:px-8 py-4 p-8 mt-6">
                    <h1 className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-5xl h-[4.5rem]">
                        Instagram
                    </h1>

                    <div className=' px-7 py-3 mb-3 cursor-pointer  bg-gray-200  text-gray-400 hover:text-gray-500 text-6xl rounded-full  hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset]'>
                    +
                    </div>

                    <button className='bg-gradient-to-r from-purple-400 to-pink-600 px-4 py-1 rounded-lg my-3 text-white '>Login</button>

                </div>
            </div>
        </div></div>
    )
}

export default Socialdesk
