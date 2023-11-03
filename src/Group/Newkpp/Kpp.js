
import { useState } from "react";
import "./kpp.css";
import { BsThreeDots } from "react-icons/bs";
import Socialdesk from "./Socialdesk";
import { NavLink, useNavigate } from 'react-router-dom';

export const users = [
  {
    id: "1",
    Name: "Payal Kumari Rajput",
    Gender: "Female",
    Email: "payalkumari1035@gmail.com",
    Post: "15",
    YoutubeImage:
      "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    InstagramImage:
      "https://images.pexels.com/photos/4099414/pexels-photo-4099414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    Education: "@dianecooper12",
    UserName: "payalkumari@",
    MonthlyViews: "5.5K",
    YoutubeName: "Musical Cooper",
    InstagramName: "cooper12",
    Subscribers: "1.2K",
    Videos: "42",
    InstagramPost: "102",
    InstagramFollowers: "2.5K",

    Followers: "200",
    DOB: "10th April, 2001",
    City: "Bokaro",
    Skills: "Singing, Dancing",
    Languages: "English, French",
    Instagram: "diane.cooper12",
    Upcoming: "2",
  },
];


function Kpp() {
  const [popup, setPop] = useState(false)
  const handleClickOpen = () => {
    setPop(!popup)
  }
  const closePopup = () => {
    setPop(false)
  }

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };



  return (
    <div className="App">
      <div className="flex w-full">
        <div className="flex lg:w-[325px] ">
          <SideBar />
        </div>

        <div className="flex flex-col w-full h-screen ">
          <div className="flex flex-col w-full  h-full pl-5">
            <div className="flex     ">
              <div className="flex flex-col lg:flex-row w-full h-[90%] bg-[#fffdfe] rounded-xl mx-6 my-2   ">
                <div onClick={handleClickOpen} className="cursor-pointer flex w-full justify-end pt-2 pr-3 absolute z-6 top-5 ml-20"><i class="bi bi-pencil-fill"></i></div>
                <div className="lg:w-1/3  flex flex-col items-center lg:p-4 p-8">
                  {users.map(user => (<>
                    <img
                      src="data:image/jpeg;base64,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"
                      className="lg:h-24 mb-2 lg:w-24 border-4 border-solid border-gray-300   h-20 w-20 rounded-full"
                      alt=""
                    />
                    <h1 className="text-2xl  font-bold ">{user.Name}</h1>
                    <h2 className="text-[#888d91] font-bold mb-3 text-sm">
                      {user.UserName}
                    </h2>
                    <div className="flex mb-3">
                      <div className="flex flex-col items-center">
                        <h1 className="font-bold">{user.Post}</h1>
                        <h2 className="text-[#888d91] font-bold text-[12px]">
                          Post
                        </h2>
                      </div>
                      <hr className=" bg-[#d6dce1] w-[2px] mx-8 h-full " />
                      <div className="flex flex-col items-center">

                        <h1 className="font-bold">{user.Followers}</h1>
                        <h2 className="text-[#888d91] font-bold text-[12px]">
                          Followers
                        </h2>
                      </div>

                    </div>
                    <NavLink to='/Chat'>
                    <button className=" px-8 border-4 rounded-xl mb-2 text-xl font-bold hover:bg-red-300 border-[#d6dce1] w-full h-12 ">
                      Message
                    </button>
                    </NavLink>
                  </>

                  ))}
                </div>
                <hr className=" bg-[#f6f7f9] w-[4px]  h-full " />
                <div className="lg:w-2/3 ">
                  <div className="grid lg:grid-cols-3 grid-cols-2 gap-10 h-full p-8">
                    {
                      users.map(user => (<>



                        <div className="flex flex-col border-b-2 border-[#eff4f8]">
                          <h1 className="font-bold text-[#888d91] text-sm ">
                            Name
                          </h1>
                          <h2 className="text-sm">{user.Name}</h2>
                        </div>
                        <div className="flex flex-col border-b-2 border-[#eff4f8]">
                          <h1 className="font-extrabold text-[#888d91] text-sm ">
                            Gender
                          </h1>
                          <h2 className="text-sm  ">{user.Gender}</h2>
                        </div>
                        <div className="flex flex-col border-b-2 border-[#eff4f8]">
                          <h1 className="font-bold text-[#888d91] text-sm">
                            DOB
                          </h1>
                          <h2 className="text-sm">{user.DOB}</h2>
                        </div>
                        <div className="flex flex-col border-b-2 border-[#eff4f8] overflow-hidden">
                          <h1 className="font-bold text-[#888d91] text-sm">
                            Email
                          </h1>
                          <h2 className="text-sm">{user.Email}</h2>
                        </div>

                        <div className="flex flex-col border-b-2 border-[#eff4f8]">
                          <h1 className="font-bold text-[#888d91] text-sm">
                            City
                          </h1>
                          <h2 className="text-sm">{user.City}</h2>
                        </div>
                        <div className="flex flex-col border-b-2 border-[#eff4f8]">
                          <h1 className="font-bold text-[#888d91] text-sm">
                            Skills
                          </h1>
                          <h2 className="text-sm">{user.Skills}</h2>
                        </div>
                        <div className="flex flex-col border-b-2 border-[#eff4f8]">
                          <h1 className="font-bold text-[#888d91] text-sm">
                            Languages
                          </h1>
                          <h2 className="text-sm">{user.Languages}</h2>
                        </div>

                      </>
                      ))
                    }

                  </div>
                </div>
              </div>
            </div>


            <div className="flex b bg-[#fffdfe] h-full mx-6  py-6 rounded-xl">
              <div className="flex flex-col w-full lg:px-8" >
                <div className="hidden lg:flex bg-[#eff1f7] w-full rounded-lg h-8 mb-3 justify-items-center ">
                  <button
                    onClick={() => toggleTab(1)}
                    type="button"
                    className={(toggleState === 1 ? "bg-gray-100 text-blue-700 font-extrabold  " : "") + " text-sm font-medium text-[#0d53fd] w-full h-[28px] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 mt-[2px] "}
                  >
                    Members
                  </button>
                  <button
                    onClick={() => toggleTab(2)}
                    type="button"
                    className={(toggleState === 2 ? "bg-gray-100 text-blue-700 font-extrabold " : "") + " text-sm font-medium text-[#0d53fd] w-full h-[28px] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 mt-[2px] "}
                  >
                    Post Approve
                  </button>
                  <button
                    onClick={() => toggleTab(3)}
                    type="button"
                    className={(toggleState === 3 ? "bg-gray-100 text-blue-700 font-extrabold " : "") + " text-sm font-medium text-[#0d53fd] w-full h-[28px] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 mt-[2px] "}
                  >
                    Blocked
                  </button>
                </div>
                

                <div className={(toggleState === 1 ? "block" : "hidden") + " flex flex-col h-full  bg-[#eff1f7] b   lg:p-4 p-2 "}>
                  <div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-green-500 font-[600]">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-green-500 font-[600]">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-green-500 font-[600]">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-green-500 font-[600]">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-green-500 font-[600]">@gmail.com</div>
                      </div>
                    </div>

                  </div>
                </div>
                
                <div className={(toggleState === 2 ? "block" : "hidden") + " flex flex-col h-full  bg-[#eff1f7] b   lg:p-4 p-2 "}>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex justify-between">
                      <div className="flex">
                        <div className="w-12 h-12"><img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-500" /></div>
                        <div className="font-bold mt-2 ml-2">Ravi Raunak</div>
                      </div>
                      <div><BsThreeDots /></div>
                    </div>
                    <div className="text-left font-bold my-4 mx-2">We live life to enjoy it to it's fullest. </div>
                    <div className="h-64 px-3"><img src="./images/BUILD.jpg" className="h-full w-full rounded-2xl" /></div>
                    <div className="flex justify-center gap-4 my-4">
                      <button className="w-32 h-9 bg-blue-400 text-white rounded-xl font-bold px-2">Approve</button>
                      <button className="w-32 h-9 bg-red-400 text-white rounded-xl font-bold px-2">Decline</button>
                    </div>

                  </div>
                </div>
               
                <div className={(toggleState === 3 ? "block" : "hidden") + " flex flex-col h-full  bg-[#eff1f7] b   lg:p-4 p-2 "}>
                  <div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-red-400">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-red-400">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-red-400">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-red-400">@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div className="text-red-400">@gmail.com</div>
                      </div>
                    </div>

                  </div>



                </div>
                
              </div>
            </div>
          </div>
        </div>
        <Socialdesk />
      </div>
      

      {
        popup ?
          <div className="absolute w-[82%] top-0 ml-[18%] z-[5] h-[100%] rounded-lg border-2">

            
            <div className="shadow-[20px_20px_60px_0px_rgba(240,240,240,0.8)]">
              <div className='font-[Smooch] w-[70%] my-[1.5rem] ml-[10%]  p-4 border border-gray-400 bg-[#f6f6f8] rounded-lg   shadow-[-20px_-20px _60px_0px_rgba(203,203,203,0.5)]'> {/**shadow-[4px_4px_10px_0px_rgba(0,0,0,0.2)]  */}
                <div className='flex w-full justify-between text-2xl'>
                  <div className="flex text-xl font-semibold px-3 text-blue-700">Edit Details</div>
                  <h1 onClick={closePopup} className="flex justify-end px-2 text-sm pt-1 font-extrabold cursor-pointer text-red-600 border border-gray-400 bg-[#eff1f7]  hover:shadow-[-2px_-2px_5px_0px_rgba(0,0,0,0.2)_inset] rounded">X</h1>
                </div>
                <hr className="mt-2" />
                <form className="px-6">
                  <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-4">
                    <div>
                      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">First Name</label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div>
                      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">Last name</label>
                      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                    </div>
                    <div>
                      <label for="Gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">Gender</label>
                      <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Male/Female" required />
                    </div>
                    <div>
                      <label for="dob" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">Date of Birth</label>
                      <input type="date" id="dob" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    <div>
                      <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">City</label>
                      <input type="text" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your city" required />
                    </div>
                    <div>

                    </div>
                  </div>
                  <div class="mb-6 ">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">Email address</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                  </div>
                  <div class="mb-6">
                    <label for="skill" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">Skills</label>
                    <input type="text" id="skill" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                  </div>
                  <div class="mb-6">
                    <label for="lang" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left px-2">Languages</label>
                    <input type="text" id="lang" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                  </div>

                  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
              </div>
            </div>
            
          </div> : ""
      }
      
    </div>
  );
}

export default Kpp;

export const SideBar = () => {



  const [state, setstate] = useState(
    {
      activeObjects: null,
      objects: [
        {
          name: 'Home',
          class: 'bi bi-house-door-fill  text-[#cbd0d5]',
          id: '1',
          
        },
        {
          name: 'Bookmark',
          class: 'bi bi-bookmark-fill  text-[#cbd0d5]',
          id: '2'
        },
        {
          name: 'Messages',
          class: 'bi bi-envelope-fill text-[#cbd0d5]',
          id: '3'
        },
        {
          name: 'Logut',
          class: 'bi bi-chat-left-text-fill text-[#cbd0d5]',
          id: '4'
        },


      ]
    }
  )

  const activeHandler = (index) => {

    setstate({ ...state, activeObjects: state.objects[index] })
  }
  const navigate = useNavigate();

  const gotoinfo = () => {
    navigate('/Twitter');
  }



  return (
    
    <div>
      <div className="sidebar flex justify-between flex-col fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
   w-[250px] overflow-y-auto text-center bg-white shadow h-screen">
        <div className=" text-sm">
          <div className="p-2.5 mt-1 flex items-center rounded-md ">
            <i className="bi bi-app-indicator px-2 py-1 bg-red-300 rounded-md"></i>
            <h1 className="  ml-3 text-sm  font-bold">Navigate</h1>
            <i className="bi bi-x ml-20 cursor-pointer lg:hidden" onclick="Openbar()"></i>
          </div>


          <div className="mt-4">
            <a className=' '>
              <NavLink to="/">
                <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0 font-bold p-2 hover:border-l-4 hover:bg-[#eff1f7] hover:text-red-400 border-red-400 cursor-pointer'>

                  <div className='lg:mx-0 lg:ml-2  '>
                    <i className="bi bi-house-door text-slate-900 lg:text-base md:text-2xl py-2 lg:py-0"></i>
                  </div>
                  <div className='ml-2 lg:block hidden text-lg'>
                    <h5>Home</h5>
                  </div>


                </div>
              </NavLink>
            </a>
            <a>
              <NavLink to="/Twitter">
                <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0 font-bold p-2 hover:border-l-4 cursor-pointer hover:bg-[#eff1f7] hover:text-red-400 border-red-400'>

                  <div className='lg:mx-0 lg:ml-2  '>
                    <i className="bi bi-compass text-slate-900 lg:text-base md:text-2xl py-2 lg:py-0"></i>
                  </div>
                  <div className='ml-2 lg:block hidden text-lg'>
                    <h5>Explore</h5>
                  </div>

                </div>
              </NavLink>
            </a>
            <a>
              <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0 font-bold p-2 hover:border-l-4 cursor-pointer hover:bg-[#eff1f7] hover:text-red-400 border-red-400'>

                <div className='lg:mx-0 lg:ml-2  '>
                  <i className="bi bi-bell text-slate-900 lg:text-base md:text-2xl py-2 lg:py-0"></i>
                </div>
                <div className='ml-2 lg:block hidden text-lg'>
                  <h5>Notifications</h5>
                </div>

              </div>
            </a>
            <a>
              <NavLink to="/Chat" >
                <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0 font-bold p-2 hover:border-l-4 cursor-pointer hover:bg-[#eff1f7] hover:text-red-400 border-red-400'>

                  <div className='lg:mx-0 lg:ml-2  '>
                    <i className="bi bi-envelope text-slate-900 lg:text-base md:text-2xl py-2 lg:py-0"></i>
                  </div>
                  <div className='ml-2 lg:block hidden text-lg'>
                    <h5>Messages</h5>
                  </div>

                </div>
              </NavLink>
            </a>
            <a>
              <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0 font-bold p-2 hover:border-l-4 cursor-pointer hover:bg-[#eff1f7] hover:text-red-400 border-red-400'>

                <div className='lg:mx-0 lg:ml-2  '>
                  <i className="bi bi-bookmark text-slate-900 lg:text-base md:text-2xl py-2 lg:py-0"></i>
                </div>
                <div className='ml-2 lg:block hidden text-lg'>
                  <h5>Bookmarks</h5>
                </div>

              </div>
            </a>
            <a>
              <NavLink to="/Dashboard">
                <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0 font-bold p-2 hover:border-l-4 cursor-pointer hover:bg-[#eff1f7] hover:text-red-400 border-red-400'>

                  <div className='lg:mx-0 lg:ml-2  '>
                    <i className="bi bi-graph-up-arrow text-slate-900 lg:text-base md:text-2xl py-2 lg:py-0"></i>
                  </div>
                  <div className='ml-2 lg:block hidden text-lg'>
                    <h5>Analytics</h5>
                  </div>

                </div>
              </NavLink>
            </a>
            <NavLink to='/Wsidebar'>
              <a>
                <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0 font-bold p-2 hover:border-l-4 cursor-pointer hover:bg-[#eff1f7] hover:text-red-400 border-red-400'>

                  <div className='lg:mx-0 lg:ml-2  '>
                    <i className="bi bi-palette lg:text-base md:text-2xl py-2 lg:py-0 text-slate-900"></i>
                  </div>
                  <div className='ml-2 lg:block hidden text-lg'>
                    <h5>Post</h5>
                  </div>

                </div>
              </a>
            </NavLink>
            <a>
              <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0 font-bold p-2 hover:border-l-4 cursor-pointer hover:bg-[#eff1f7] hover:text-red-400 border-red-400'>

                <div className='lg:mx-0 lg:ml-2  '>
                  <i className="bi bi-gear text-slate-900 lg:text-base md:text-2xl py-2 lg:py-0"></i>
                </div>
                <div className='ml-2 lg:block hidden text-lg'>
                  <h5>Settings</h5>
                </div>

              </div>
            </a>
          </div>

        </div>



      </div>

    </div>
    

  )
}