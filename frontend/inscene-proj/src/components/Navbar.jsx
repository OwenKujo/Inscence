import React from 'react'
import { HiOutlineHome } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navLists = [
        { name: "Home", path: "/", icon: <HiOutlineHome className="text-2xl" /> },
        { name: "Community", path: "/community", icon: <IoCalendarOutline className="text-2xl" /> },
        { name: "Search", path: "/search", icon: <LuSearch className="text-[22px]" /> },
        { name: "Messages", path: "/messages", icon: <AiOutlineMessage className="text-2xl" /> },
        { name: "Profile", path: "/profile", icon: <HiOutlineUser className="text-2xl" /> },
    ];

    return (
        <nav>
            <ul className="flex flex-row font-body border justify-center items-center gap-[6%] fixed bottom-0 w-full bg-white py-4 shadow-2xl">
                {
                    navLists.map((list, index) => (
                        <li key={index}>
                            <NavLink
                                to={list.path}
                                className={({ isActive }) =>
                                    isActive ? "text-[#24BAEC]" : "text-[#7D848D]"
                                }
                            >
                                <div className="flex flex-col items-center justify-center gap-[4px]">
                                    <div
                                        className={`${list.name === "Search" ? "bg-[#24baeceb] p-[14px] rounded-full text-white" : ""
                                            }`}
                                    >
                                        {list.icon}
                                    </div>
                                    {list.name !== "Search" && (
                                        <span className='text-[12px] font-normal'>{list.name}</span>
                                    )}
                                </div>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar;