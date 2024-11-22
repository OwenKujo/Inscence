import React from 'react';
import Comingsoon1 from "../assets/comingsoon/Comingsoon3.svg";


const ComingSoon = () => {
  return (
    <div className="flex mt-[50px] items-center justify-center h-screen">
      <img
        src={Comingsoon1}
        alt="Comingsoon1"
        className="max-w-full h-auto object-contain"
      />
    </div>
  );
};

export default ComingSoon;
