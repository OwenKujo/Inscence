import React, { useState } from 'react';
import { HiOutlineHome } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import { FiMenu, FiX } from "react-icons/fi";

import Logo from '../assets/Logo/Logo1.svg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLists = [
        { name: "Home", path: "/", icon: <HiOutlineHome className="text-2xl" /> },
        { name: "Community", path: "/community", icon: <IoCalendarOutline className="text-2xl" /> },
        { name: "Search", path: "/search", icon: <LuSearch className="text-[22px]" /> },
        { name: "Messages", path: "/messages", icon: <AiOutlineMessage className="text-2xl" /> },
        { name: "Profile", path: "/profile", icon: <HiOutlineUser className="text-2xl" /> },
        { name: "Login", path: "/Login", icon: <HiOutlineUser className="text-2xl" /> }
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
            <nav className="text-[#4c4e4f] font-body bg-white shadow-gray-400 fixed w-full z-40 flex justify-between items-center px-4 h-16 border">
                <div className="text-xl font-semibold object-cover items-center">
                    <img src={Logo} alt="Logo" className='w-full h-[45px]'/>
                </div>
                
                {/* Hamburger Menu Button for small screens */}
                <button onClick={toggleMenu} className="md:hidden text-white text-2xl focus:outline-none">
                    {isMenuOpen ? <FiX className='text-[#4c4e4f]' /> : <FiMenu className='text-[#4c4e4f]' />}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-4">
                    {navLists.map((list, index) => (
                        <a href={list.path} key={index} className="flex items-center space-x-2 px-3 py-2 hover:text-[#24BAEC] rounded-md transition">
                            {list.icon}
                            <span className='text-[7D848D]'>{list.name}</span>
                        </a>
                    ))}
                </div>
            </nav>

            {/* Sidebar Menu for small screens */}
            <div className={`fixed top-[64px] left-0 h-full bg-white shadow-lg z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-[65%] sm:w-1/2 lg:hidden`}>
                <div className="flex flex-col p-4 h-full">
                    
                    {/* Close Button inside Sidebar */}
                    {/* <button onClick={toggleMenu} className="self-end text-gray-800 mb-4">
                        <FiX className="h-6 w-6" />
                    </button> */}

                    {/* Sidebar Navigation Links */}
                    <ul className="flex flex-col space-y-4 text-lg">
                        {navLists.map((list, index) => (
                            <li key={index} onClick={() => {
                                scrollToSection(list.section);
                                toggleMenu();
                            }}>
                                <button className="flex items-center space-x-2 text-[#4c4e4f] hover:text-[#24BAEC] duration-100">
                                    <a className='flex gap-4 items-center' href={list.path}>{list.icon}<span>{list.name}</span></a>      
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
