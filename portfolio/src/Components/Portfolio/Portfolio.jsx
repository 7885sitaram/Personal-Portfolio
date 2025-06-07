import { Link, NavLink, Outlet } from "react-router-dom"
import Portfolio_layout from "../Layout/Portfolio_layout";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

const Portfolio = () => {

 

    return (
        <>
<div className=" flex lg:flex-row flex-col">

                <div className="w-full">

                    <div className="w-full border-3 border-[#20f6a733] py-[30px] px-[10px] md:px-[25px] rounded-2xl shadow-2xl">

                        <div className="">

                            <h2 className="text-white text-[32px] font-bold mb-1">Portfolio</h2>
                            <h1 className="border-3 border-[#0cfdb4] w-[90px] mb-[16px]"></h1>

                        </div>

                        <div >
                            <ul className="flex gap-5 sm:flex-row flex-col" >
                                <li>
                                    <NavLink

                                        to="/portfolio/all"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0ff6b4]" : "text-[#fafafc]"}   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                        }
                                    >
                                        <h1 className="text-xl">All</h1>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink

                                        to="/portfolio/application"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0ff6b4]" : "text-[#fafafc]"}   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                        }
                                    >
                                        <h1 className="text-xl">Application</h1>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink

                                        to="/portfolio/webdesign"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0ff6b4]" : "text-[#fafafc]"}   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                        }
                                    >
                                        <h1 className="text-xl">Web Design</h1>
                                    </NavLink>
                                </li>


                            </ul>

                        </div>


                        <Outlet />
                    </div>

                </div>
            </div>

       



        </>
    )
}


export default Portfolio;