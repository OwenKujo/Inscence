import React from 'react';
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/sunset_about_you/img1.svg';
import img2 from '../assets/sunset_about_you/img2.svg';
import img3 from '../assets/sunset_about_you/img3.svg';
import img4 from '../assets/sunset_about_you/img4.svg';
import img5 from '../assets/sunset_about_you/img5.svg';
import img6 from '../assets/sunset_about_you/img6.svg';

const dramaData = [
  {
    id: 1,
    title: "Laem Ka Beach",
    location: "Mueang Phuket, Phuket",
    image: img1,
    path: "/about_you/"
  },
  {
    id: 2,
    title: "Thanon Talang",
    location: "Soi Romanee, Phuket",
    image: img6,
    path: "/about_you/"
  },
  {
    id: 3,
    title: "Dibuk Restaurant",
    location: "Mueang Phuket, Phuket",
    image: img5,
    path: "/about_you/"
  },
  {
    id: 4,
    title: "On On Hotel",
    location: "The Memory at On On Hotel, Phuket",
    image: img4,
    path: "/about_you/"
  },
];

const Card_Sunset_About_You = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto font-body">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {dramaData.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(item.path)}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer pb-2"
          >
            <div className="aspect-[4/3] relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-2">
              <h3 className="text-[13.5px] font-bold text-[#000000] mb-2">
                {item.title}
              </h3>
              
              <div className="flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-[4px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-[13px] font-medium">{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card_Sunset_About_You;