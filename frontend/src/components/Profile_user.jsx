import React from 'react'

import test_user from '../assets/test_user/Alice.svg';

const Profile_user = () => {
    // ข้อมูลแบบ hardcoded
    const user = {
        name: "Arya Muller"
    };

    return (

      <div className="font-body">
        {/* กรอบข้อมูล */}
        <div className='flex flex-row items-center justify-start gap-2'>
            {/* รูป Profile */}
            <img src={test_user} alt="user_test" className='w-[37px] h-[37px] object-cover rounded-full'/>
            {/* ข้อมูล */}
            <p className="text-[#1E1E1E] text-[14px] font-medium"><span className='text-[#50cbf5]'>Hello. </span>{user.name}</p>
        </div>
      </div>
  )
}

export default Profile_user