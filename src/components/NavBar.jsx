import React from 'react'
import logo from '../assets/Logo.png'
import downarrow from '../assets/chevron-down.png'
const NavBar = () => {
  return (
    
    <div className='px-8 py-4 flex justify-between bg-gray-100 border  border-gray-300 rounded-[100px] mx-32 max-md:mx-4 max-xl:mx-8 max-2xl:mx-16 shadow-md items-center sticky top-10 max-md:top-5 z-50'>
        <div className='flex gap-2 items-center'>
            <img src={logo} alt="" className='h-[28px] w-[25.384px]'  />
            <p className='  text-2xl font-semibold text-gray-900'>ClearLink<span className='text-blue-400'>.</span></p>
        </div>
        <div className=' flex gap-10 max-xl:hidden' >
            <a href="" className=' text-lg font-semibold text-gray-500 leading-7 duration-200 hover:text-gray-600 active:text-gray-800 flex gap-[6px] items-center'>Products<img src={downarrow} className='w-[18px] h-[18px]' alt=''/></a>
            <a href="" className=' text-lg font-semibold text-gray-500 leading-7 duration-200 hover:text-gray-600 active:text-gray-800 flex gap-[6px] items-center'>Solutions<img src={downarrow} className='w-[18px] h-[18px]' alt=''/></a>
            <a href="" className=' text-lg font-semibold text-gray-500 leading-7 duration-200 hover:text-gray-600 active:text-gray-800 flex gap-[6px] items-center'>Resources<img src={downarrow} className='w-[18px] h-[18px]' alt=''/></a>
            <a href="" className=' text-lg font-semibold text-gray-500 leading-7 duration-200 hover:text-gray-600 active:text-gray-800 flex gap-[6px] items-center'>Pricing</a>
        </div>
        <div className='flex items-center gap-2 max-md:hidden'>
            <button className=' border-gray-400 text-gray-900 bg-white hover:bg-gray-200 duration-200 active:bg-gray-300 font-semibold leading-6 rounded-[100px] shadow-sm px-6 py-[14px]'>Talk to sales</button>
            <button className=' bg-blue-700  text-white  font-semibold hover:bg-blue-800 active:bg-blue-950 duration-200 leading-6 rounded-[100px] shadow-sm px-6 py-[14px]'>Sign up for free</button>
          <div className=' flex flex-col gap-2 xl:hidden ml-4  '>
            <div className='bg-gray-900 h-[2px] w-8'></div>
            <div className='bg-gray-900 h-[2px] w-8'></div>
            <div className='bg-gray-900 h-[2px] w-8'></div>
          </div>
        </div>
        <div className=' flex flex-col gap-2 md:hidden p-3 rounded-lg cursor-pointer border border-gray-300 bg-white'>
          <div className='bg-gray-900 h-[2px] w-8'></div>
          <div className='bg-gray-900 h-[2px] w-8'></div>
          <div className='bg-gray-900 h-[2px] w-8'></div>
        </div>
    </div>
  )
}

export default NavBar