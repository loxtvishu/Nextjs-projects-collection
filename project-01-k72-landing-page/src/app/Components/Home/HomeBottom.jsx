import React from 'react'
import Link from 'next/link'

const HomeBottom = () => {
  return (
    <div className='font-[font2] uppercase flex items-center justify-center gap-5 pb-1 '>
      <Link className='hover:border-[#D3FD50] hover:text-[#D3FD50] text-[6vw] tracking-wider border-5 border-white px-10 rounded-full leading-tight' href="./Pages/Work">work</Link>
      <Link className='hover:border-[#D3FD50] hover:text-[#D3FD50] text-[6vw] tracking-wider border-5 border-white px-10 rounded-full leading-tight' href="./Pages/Agency">Agency</Link>
    </div>
  )
}

export default HomeBottom