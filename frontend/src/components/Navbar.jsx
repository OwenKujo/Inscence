import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { HiOutlineHome } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import { FiMenu, FiX } from "react-icons/fi";
import { GrAchievement } from "react-icons/gr";
import { UserData } from "../context/UserContext"; // Import UserContext
import Logo from "../assets/Logo/Logo1.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuth, user } = UserData(); // Access authentication status and user data
  const location = useLocation(); // Access current location

  // Define paths where the navbar should be hidden
  const hideNavbarPaths = ["/login", "/signin"];
  if (hideNavbarPaths.includes(location.pathname)) {
    return null; // Don't render the Navbar on login or signin pages
  }

  const navLists = [
    { name: "Home", path: "/", icon: <HiOutlineHome className="text-2xl" /> },
    { name: "Community", path: "/community", icon: <IoCalendarOutline className="text-2xl" /> },
    { name: "Search", path: "/search", icon: <LuSearch className="text-[22px]" /> },
    { name: "Messages", path: "/messages", icon: <AiOutlineMessage className="text-2xl" /> },
    { name: "Achievement", path: "/Achievement", icon: <GrAchievement className="text-2xl" /> },
    isAuth
      ? { name: `Profile (${user?.name || "User"})`, path: "/accountprofile", icon: <HiOutlineUser className="text-2xl" /> }
      : { name: "Login", path: "/login", icon: <HiOutlineUser className="text-2xl" /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="text-[#4c4e4f] font-body bg-white shadow-gray-400 fixed w-full p-4 z-40 flex justify-between items-center h-16 border">
        {/* Left Section */}
        <div className="container mx-auto flex justify-between items-center h-16">
          <div className="text-xl object-cover items-center">
            <img src={Logo} alt="Logo" className="w-full h-[45px]" />
          </div>

          {/* Render "Create" only on Community Page */}
          <div className="mx-auto ml-10">
          {location.pathname === "/community" && (
            <div>
              <a
                href="/create"
                className="text-sm font-medium text-white bg-[#23b1e1] px-4 py-2 rounded-md hover:bg-[#2e8cae] transition"
              >
                Create Post
              </a>
            </div>
          )}
          </div>
        </div>

        {/* Hamburger Menu Button for small screens */}
        <button onClick={toggleMenu} className="lg:hidden text-white text-2xl focus:outline-none">
          {isMenuOpen ? <FiX className="text-[#4c4e4f]" /> : <FiMenu className="text-[#4c4e4f]" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:hidden lg:flex ">
          {navLists.map((list, index) => (
            <a
              href={list.path}
              key={index}
              className="flex items-center space-x-2 px-3 py-2 hover:text-[#24BAEC] rounded-md transition"
            >
              {list.icon}
              <span className="text-[7D848D]">{list.name}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Sidebar Menu for small screens */}
      <div
        className={`fixed top-[64px] left-0 h-full bg-white shadow-lg z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-[65%] sm:w-1/2 lg:hidden`}
      >
        <div className="flex flex-col p-4 h-full">
          <ul className="flex flex-col space-y-4 text-lg">
            {navLists.map((list, index) => (
              <li
                key={index}
                onClick={() => {
                  toggleMenu();
                }}
              >
                <a className="flex gap-4 items-center" href={list.path}>
                  {list.icon}
                  <span>{list.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
