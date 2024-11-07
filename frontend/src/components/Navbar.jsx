import React, { useState } from 'react';
import { HiOutlineHome } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLists = [
        { name: "Home", path: "/", icon: <HiOutlineHome className="text-2xl" /> },
        { name: "Community", path: "/community", icon: <IoCalendarOutline className="text-2xl" /> },
        { name: "Search", path: "/search", icon: <LuSearch className="text-[22px]" /> },
        { name: "Messages", path: "/messages", icon: <AiOutlineMessage className="text-2xl" /> },
        { name: "Profile", path: "/profile", icon: <HiOutlineUser className="text-2xl" /> },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (section) => {
        // Custom scroll behavior (if you have section references or IDs)
        section && section.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {/* Top Navbar */}
            <nav className="bg-gray-800 text-white fixed w-full z-40 flex justify-between items-center px-4 h-16">
                <div className="text-xl font-semibold">Logo</div>
                
                {/* Hamburger Menu Button for small screens */}
                <button onClick={toggleMenu} className="md:hidden text-white text-2xl focus:outline-none">
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-4">
                    {navLists.map((list, index) => (
                        <a href={list.path} key={index} className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-700 transition">
                            {list.icon}
                            <span>{list.name}</span>
                        </a>
                    ))}
                </div>
            </nav>

            {/* Sidebar Menu for small screens */}
            <div className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-3/4 sm:w-1/2 lg:hidden`}>
                <div className="flex flex-col p-4 h-full">
                    
                    {/* Close Button inside Sidebar */}
                    <button onClick={toggleMenu} className="self-end text-gray-800 mb-4">
                        <FiX className="h-6 w-6" />
                    </button>

                    {/* Sidebar Navigation Links */}
                    <ul className="flex flex-col space-y-4 text-lg">
                        {navLists.map((list, index) => (
                            <li key={index} onClick={() => {
                                scrollToSection(list.section);
                                toggleMenu();
                            }}>
                                <button className="flex items-center space-x-2 text-gray-800 hover:font-semibold duration-100">
                                    {list.icon}
                                    <span>{list.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Sidebar Contact Button
                    <button className="mt-6 border border-blue-500 px-5 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition duration-200">
                        Contacts
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
