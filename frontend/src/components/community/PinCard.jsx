import React from "react";
import { Link } from "react-router-dom";

const PinCard = ({ pin }) => {
  return (
    <div className="mt-[70px]">
      <div className="bg-white overflow-hidden shadow rounded-lg relative group cursor-pointer">
        {/* Image for the pin */}
        <img
          src={pin.image.url}
          alt={pin.title || "Pin Image"}
          className="w-full h-[200px] object-cover transition-transform duration-300 transform group-hover:scale-105"
          style={{ aspectRatio: "auto" }}  // This keeps the image's natural aspect ratio
        />

        
        {/* Overlay with View Post link */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <Link
              to={`/pin/${pin._id}`}
              aria-label={`View post: ${pin.title}`}
              className="bg-[#23b1e1] hover:bg-[#2e8cae] text-white font-body px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              View Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinCard;
