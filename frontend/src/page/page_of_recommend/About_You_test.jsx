import React from 'react'
import Card_Sunset_About_You from '../../components/Card_Sunset_About_You'

const About_You_test = () => {
  return (
    <div>
      <p className='text-[20px] font-body font-bold text-[#000000]'>Recommend location from </p>
      <p className='text-[20px] font-body font-normal text-[#000000] mb-4'>“I Tell Sunset About You”</p>
      <div className="gap-6">
          <Card_Sunset_About_You/>
      </div>
    </div>
  )
}

export default About_You_test