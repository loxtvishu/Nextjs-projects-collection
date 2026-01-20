import React from 'react'
import Video from './Video'

const HomeTop = () => {
  return (
    <div className=' text-shadow-white font-[font1]'>
      <div className='text-[10vw] leading-[9vw] uppercase  flex justify-center items-center '>The spark for</div>
      <div className='text-[10vw] leading-[9vw] uppercase  flex justify-center items-center'>all <div className='h-[16vh] w-[15vw] rounded-full -mt-5 overflow-hidden '> <Video /> </div> things</div>
      <div className='text-[10vw] leading-[9vw] uppercase flex justify-center items-center '>creative</div>

    </div>
  )
}

export default HomeTop