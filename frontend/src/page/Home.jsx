// import React from 'react'
import Profile_user from '../components/Profile_user'
import Card_recommend from '../components/Card_recommend'
import Card_All_show from '../components/Card_All_show'

const Home = () => {
  return (
    <div>
      {/* user */}
      <Profile_user />
      {/* Recommend */}
      <div className='mt-[20px]'>
          <h1 className='text-[20px] font-body4 font-bold text-[#000000] mb-4'>
            Recommend Movies categories
          </h1>
          <div className="gap-6">
          <Card_recommend />
          </div>
      </div>
      {/* All Show */}
      <div className='mt-[15px]'>
          <h1 className='text-[20px] font-body4 font-bold text-[#000000] mb-4'>
            All Show
          </h1>
          <div className="gap-6">
          <Card_All_show />
          </div>
      </div>
  
    </div>
  )
}

export default Home