import React from 'react'

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
        <img src={user_test} alt="user_test" className='w-[37px] h-[37px] object-cover'/>
        {/* ข้อมูล */}
        <p className="text-[#1B1E28] text-[14px] font-medium">{user.name}</p>
    </div>
  </div>
)
}

export default Profile_user