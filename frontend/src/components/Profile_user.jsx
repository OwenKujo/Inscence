import React from 'react'

import test_user from '../assets/test_user/Alice.svg';
import emoji_hi from '../assets/recommend/emoji_hi.png';

const Profile_user = () => {
  // ข้อมูลแบบ hardcoded
  const user = {
    name: "Arya Muller"
  };

  return (

    <div className="font-body4">
      {/* กรอบข้อมูล */}
      <div className='flex flex-row items-center justify-start gap-4'>
        {/* รูป Profile */}
        <img src={test_user} alt="user_test" className='w-[52px] h-[52px] object-cover rounded-full border-[2px] border-[#3ccaf9]' />
        {/* ข้อมูล */}
        <div className='flex flex-col'>
          <span className='text-[#3ccaf9] text-[16px] font-body4 font-bold flex gap-1'>Hi <img src={emoji_hi} alt="emoji_hi" className='w-[20px] h-[20px] items-center' />,</span>
          <p className="text-[#1E1E1E] text-[16px] font-body4 font-bold">{user.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile_user