import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

    // Check if current route starts with "/portfolio"
    const isPortfolioActive = location.pathname.startsWith("/portfolio");

    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <header>
                <nav>

                <div className="md:fixed top-0 left-0 w-full z-[999] bg-[#101e31]/80 backdrop-blur-sm shadow-xl">

                    <div className="w-full md:h-18 h-15 flex items-center justify-between px-3 ">

                        <div><h1></h1></div>

                        <div className="hidden md:block">
                            <ul className="flex  gap-8">
                                <li>
                                    <NavLink

                                        to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0ff6b4]" : "text-[#fafafc]"}   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                        }
                                    >
                                      <h1 className="text-xl">About</h1>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink

                                        to="/resume"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0ff6b4]" : "text-[#fafafc]"}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                        }
                                    >
                                     <h1 className="text-xl">Resume</h1>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/portfolio/all"
                                        className={`block py-2 pr-4 pl-3 duration-200 ${isPortfolioActive ? "text-[#0ff6b4]" : "text-[#fafafc]"
                                            } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`}
                                    >
                                         <h1 className="text-xl">Portfolio</h1>
                                    </NavLink>

                                </li>

                                {/* <li>
                                    <NavLink

                                        to="/achievement"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0ff6b4]" : "text-[#fafafc]"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                        }
                                    >
                                         <h1 className="text-xl">Achievement</h1>
                                    </NavLink>
                                </li> */}

                                <li>
                                    <NavLink

                                        to="/testimonial"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0ff6b4]" : "text-[#fafafc]"}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                        }
                                    >
                                        <h1 className="text-xl">Testimonial</h1>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink

                                        to="/contact"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0ff6b4]" : "text-[#fafafc]"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                        }
                                    >
                                        <h1 className="text-xl">Contact</h1>
                                    </NavLink>
                                </li>
                            </ul>

                        </div>

                        <div className="flex items-center justify-end md:invisible " >
                            <button onClick={handleToggle}><i className="fa-solid fa-bars text-green-400 text-2xl me-3.5"></i></button>
                        </div>


                    </div>
                     
                     </div>

                </nav>

                {/* drop-down menu */}

                {isVisible && (
                    <div>
                        <div className="w-full flex justify-end fixed  top-0 right-0 z-10">
                        
                            <div className="py-4 border-3 border-[#20f6a733]  bg-[#0A1223] flex flex-col  w-[260px] h-screen ">

                                <div className=" flex w-full h-[45px] items-center justify-end ">
                                    <button onClick={handleToggle}><i className="fa-solid fa-xmark text-3xl pe-2  hover:text-red-400"></i></button>
                                </div>

                                <div>
                                    <ul className="flex flex-col">
                                        <li className="px-[24px] py-[9px] hover:bg-[#0E262F] hover:text-[#0ff6b4]">
                                            <NavLink

                                                to="/"
                                                className={({ isActive }) =>
                                                    `block py-2   duration-200 ${isActive ? "text-[#0ff6b4]" : "text-white"}   lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                                }
                                            >
                                              <h2 className="text-lg">About</h2>
                                            </NavLink>
                                        </li>

                                        <li className="px-[24px] py-[9px] hover:bg-[#0E262F] ">
                                            <NavLink

                                                to="/resume"
                                                className={({ isActive }) =>
                                                    `block py-2 pr-4 duration-200 ${isActive ? "text-[#0ff6b4]" : "text-white"}  border-gray-100  lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                                }
                                            >
                                              <h2 className="text-lg  hover:bg-[#0E262F] ">Resume</h2>
                                            </NavLink>

                                        </li>


                                        <li className="px-[24px] py-[9px] hover:bg-[#0E262F]">
                                            <NavLink

                                                to="/portfolio"
                                                className={({ isActive }) =>
                                                    `block py-2 pr-4  duration-200 ${isActive ? "text-[#0ff6b4]" : "text-white"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                                }
                                            >
                                              <h2 className="text-lg">Portfolio</h2>
                                            </NavLink>
                                        </li>

                                        {/* <li className="px-[24px] py-[12px]  hover:bg-[#0E262F] ">
                                            <NavLink

                                                to="/achievement"
                                                className={({ isActive }) =>
                                                    `block py-2 pr-4 duration-200 ${isActive ? "text-[#0ff6b4]" : "text-white"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                                }
                                            >
                                             <h2 className="text-lg">Achievement</h2>
                                            </NavLink>
                                        </li> */}

                                        <li className="px-[24px] py-[9px]  hover:bg-[#0E262F] ">
                                            <NavLink

                                                to="/testimonial"
                                                className={({ isActive }) =>
                                                    `block py-2 pr-4  duration-200 ${isActive ? "text-[#0ff6b4]" : "text-white"}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4]  lg:p-0`
                                                }
                                            >
                                             <h2 className="text-lg">Testimonial</h2>
                                            </NavLink>
                                        </li>


                                        <li className="px-[24px] py-[9px]  hover:bg-[#0E262F] ">
                                            <NavLink

                                                to="/contact"
                                                className={({ isActive }) =>
                                                    `block py-2 pr-4  duration-200 ${isActive ? "text-[#0ff6b4]" : "text-white"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0ff6b4] lg:p-0`
                                                }
                                            >
                                             <h2 className="text-lg">Contact</h2>
                                            </NavLink>
                                        </li>
                                    </ul>



                                </div>

                            </div>

                        </div>

                    </div>
                )}


            </header>

        </>
    )
}

export default Header;