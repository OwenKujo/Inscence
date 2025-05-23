// import React from 'react';
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/recommend/img1.jpg';
import img2 from '../assets/recommend/img2.jpg';
import img3 from '../assets/recommend/img3.jpg';
import img4 from '../assets/recommend/img4.jpg';
import img6 from '../assets/recommend/img6.jpg';
const dramaData = [
  {
    id: 1,
    title: "How to Make Millions Before Grandma Dies",
    location: "Talat Phlu, Thailand",
    image: img3,
    path: "/lhanma"
  },
  {
    id: 2,
    title: "Love Destiny",
    location: "Ayutthaya, Samut-Prakan, Lopburi, Saraburi, Thailand",
    image: img4,
    path: "/lovedestiny"
  },
  {
    id: 3,
    title: "My Cherie Amour",
    location: "Bangkok, Thailand",
    image: img2,
    path: "/My_Cherie_Amour"
  },
  {
    id: 4,
    title: "One for the Road",
    location: "Chonburi, Nakhon Ratchasima, Thailand",
    image: img1,
    path: "/OneRoad"
  },
  {
    id: 5,
    title: "I Tell Sunset About You",
    location: "Phuket, Thailand",
    image: img6,
    path: "/about_you"
  },
];

const Card_All_show = () => {
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
                  className="w-4 h-4 mr-1"
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

export default Card_All_show;