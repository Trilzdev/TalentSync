import React from 'react'
import bot from '../assets/bot.png'
import group from '../assets/group.png'
import star from '../assets/Star.png'
import peoplegrid from '../assets/peoplegrid.png'
const Section1 = () => {
    return (
        <section className='mx-32 max-2xl:mx-16 max-xl:mx-8  max-md:mx-4 max-xl:flex-col max-xl:gap-16 max-xl:items-start max pl-8 py-[160px] pt-[180px] max-md:py-12 max-md:pt-[130px] flex justify-between z-40 relative'>
            <div className=' flex flex-col gap-12 w-[780px] max-md:w-full'>
                <div className=' flex flex-col gap-6'>
                    <p className='text-[64px] max-md:text-4xl text-gray-800 leading-[72px] tracking-[-1.28px] font-semibold'>Uniting the world,<br /> one video call at a time</p>
                    <p className=' text-gray-500 leading-8 text-2xl max-sm:text-xl font-normal'>
                        Experience the future of communication with ClearLink –<br className='max-md:hidden' /> where crystal-clear video conferencing meets<br className='max-md:hidden'/> unparalleled simplicity.
                    </p>
                </div>
                <div className='flex items-center gap-5 max-md:flex-col max-md:items-start'>
                    <button className=' bg-blue-700 hover:bg-blue-900 duration-200 text-white rounded-[100px] px-7 py-4  font-semibold text-lg'>Start your free trial</button>
                    <button className='font-semibold text-lg items-center hover:text-blue-900 duration-200 text-blue-700 flex gap-[12px]'><img src={bot} alt="" />Discover AI assistant</button>
                </div>
                <div className='flex gap-4'>
                    <div><img src={group} className='min-w-[152px] min-h-[40px]' alt="" /></div>
                    <div>
                        <div className='flex gap-2 items-center'>
                            <div className='flex gap-1 items-center'>
                                <img src={star} className='min-w-max min-h-max' alt="" />
                                <img src={star} className='min-w-max min-h-max' alt="" />
                                <img src={star} className='min-w-max min-h-max' alt="" />
                                <img src={star} className='min-w-max min-h-max' alt="" />
                                <img src={star} className='min-w-max min-h-max' alt="" />
                            </div>
                            <span className='text-gray-600 leading-6 font-semibold'>5.0</span>
                        </div>
                        <div><p className='text-gray-600 leading-6 font-medium'>from 3,000+ reviews</p></div>
                    </div>
                </div>
            </div>
            <div className=''>
                <img src={peoplegrid} alt="" />
            </div>
        </section>
    )
}

export default Section1