import React from 'react'

import img1 from '../assets/Messages/Message.jpg';

const Messages = () => {
  return (
    <div className='flex justify-center items-center'>
      {/* img coming soon */}
      <img src={img1} alt="img1" className='mt-[50px] object-cover'/>
    </div>
  )
}

export default Messages