import { Outlet } from "react-router";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import AnimatedBackground from "../Bg-Styles/AnimatedBackground";
import { Link, NavLink } from "react-router-dom"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";


const Portfolio_layout = () => {

    

    return (
        <>


          <div className="relative min-h-screen overflow-hidden">
                {/* Animated Background positioned behind */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <AnimatedBackground />
                </div>

                <Header />
                <div className="container  mx-auto p-8">
                    <div className=" gap-10 flex lg:flex-row flex-col">

                        <div className="md:mt-20 mt-5" >
                            <Profile />
                        </div>

                        <div className="w-full md:mt-20 mt-5">


                            <div className="bg-[#11224080]/10 backdrop-blur-sm  rounded-xl border-2 border-[#20f6a733] shadow-xl ">

                                <div className="w-full  py-[30px] px-[10px] md:px-[15px] rounded-2xl shadow-2xl">

                                    <div >

                                        <h2 className="text-white text-[32px] font-bold mb-1">Portfolio</h2>
                                           <h1 className="border-3 border-[#0cfdb4] w-[90px] mb-[16px]"></h1>

                                    </div>

                                    <ul className="mb-[35px] flex gap-5 sm:flex-row flex-col">
                                        <li >
                                            <NavLink

                                                to="/portfolio/all"
                                                className={({ isActive }) =>
                                                    `block  duration-200 ${isActive ? "text-[#0ff6b4]" : "text-[#fafafc]"}    lg:hover:bg-transparent  lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                                }
                                            >
                                                <h1 className="text-xl">All</h1>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink

                                                to="/portfolio/application"
                                                className={({ isActive }) =>
                                                    `block  duration-200 ${isActive ? "text-[#0ff6b4] " : "text-[#fafafc]"}   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                                }
                                            >
                                                <h1 className="text-xl">Application</h1>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink

                                                to="/portfolio/webdesign"
                                                className={({ isActive }) =>
                                                    `block  duration-200 ${isActive ? "text-[#0ff6b4] " : "text-[#fafafc]"}   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                                }
                                            >
                                                <h1 className="text-xl">Web Design</h1>
                                            </NavLink>
                                        </li>




                                    </ul>

                                    <div className="w-[100%] ">
                                        <Outlet />

                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>

                            

        </>
    )
}


export default Portfolio_layout;