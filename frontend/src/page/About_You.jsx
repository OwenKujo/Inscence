// import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // Import the left arrow icon
import { useNavigate } from 'react-router-dom';
import bg from '../assets/Detail/detail_bg.jpg';
import Box from '../assets/Detail/detail_button.png';

const About_You = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleBackClick = () => {
    navigate('/'); // Navigate to Home page
  };
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Back Icon */}
      <div
        className="absolute top-5 left-5 text-white text-3xl cursor-pointer"
        onClick={handleBackClick} // Attach the click handler to navigate back
      >
        <FaArrowLeft />
      </div>

      <h1 className="text-white text-3xl font-bold font-elegant ">
        I Told Sunset About You
      </h1>

      <div className="w-full flex justify-center mt-72">
        <img
          src={Box}
          alt="Box below text"
          className="w-auto h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default About_You;
