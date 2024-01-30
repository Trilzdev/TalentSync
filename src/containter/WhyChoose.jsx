import React from 'react'
import video from '../assets/video.png'
import audio from '../assets/audio.png'
import calendar from '../assets/calendar.png'
import lock from '../assets/lock.png'
import peoplerect from '../assets/peoplerect.png'
import drawnarrow from '../assets/drawnarrow.png'
const WhyChoose = () => {
    return (
        <section className=' bg-white mx-32 max-2xl:mx-16 max-xl:mx-8  max-md:mx-4 px-8 flex flex-col gap-20 justify-center py-24'>
            <div className=' flex flex-col gap-5 '>
                <div className='flex flex-col gap-3'>
                    <p className=' font-semibold text-lg text-blue-700 leading-7'>The ClearLink Advantage</p>
                    <p className=' font-semibold text-gray-800 text-5xl max-md:text-3xl leading-[60px] tracking-[-0.96px]'>Why choose ClearLink?</p>
                </div>
                <p className='text-gray-500  text-2xl max-md:text-xl'>In a world where connection is everything, ClearLink takes the lead. Our<br className='max-sm:hidden' /> cutting-edge video conferencing app offers:</p>

            </div>
            <div className=' flex justify-between max-xl:flex-col max-xl:gap-20 gap-20 items-center max-xl:items-start'>
                <div className='grid grid-cols-2 gap-y-[60px] max-sm:grid-cols-1 gap-x-10 max-xl:order-2'>
                    <div className=' flex flex-col gap-5'>
                        <div className='p-4 flex justify-center items-center border border-gray-200 bg-gray-50 rounded-full w-fit'>
                            <img src={video} alt="" />
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <p className='text-gray-900 text-2xl max-md:text-xl font-semibold'>Crystal-clear HD video</p>
                            <p className=' text-gray-600 text-lg max-md:text-base'>No more pixelation or blurriness – just<br /> stunning, lifelike clarity that brings your<br /> team closer in meetings.</p>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5'>
                        <div className='p-4 flex justify-center items-center border border-gray-200 bg-gray-50 rounded-full w-fit'>
                            <img src={audio} alt="" />
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <p className='text-gray-900 text-2xl max-md:text-xl font-semibold'>Noise-canceling audio</p>
                            <p className=' text-gray-600 text-lg max-md:text-base'>Say goodbye to distractions with our<br /> advanced audio tech for crisp,<br /> interruption-free conversations.</p>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5'>
                        <div className='p-4 flex justify-center items-center border border-gray-200 bg-gray-50 rounded-full w-fit'>
                            <img src={calendar} alt="" />
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <p className='text-gray-900 text-2xl max-md:text-xl font-semibold'>Scheduling made easy</p>
                            <p className=' text-gray-600 text-lg max-md:text-base'>Streamline your agenda with ClearLink's<br /> intuitive scheduling. Set up meetings,<br /> send invitations, and receive reminders in<br /> one place.</p>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5'>
                        <div className='p-4 flex justify-center items-center border border-gray-200 bg-gray-50 rounded-full w-fit'>
                            <img src={lock} alt="" />
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <p className='text-gray-900 text-2xl max-md:text-xl font-semibold'>Bank-grade security</p>
                            <p className=' text-gray-600 text-lg max-md:text-base'>Your privacy is our priority with bank-<br />grade security protocols safeguarding<br /> your meetings and data from unwanted<br /> intruders.</p>
                        </div>
                    </div>
                </div>
                <div className='relative max-xl:order-1'>
                    <img src={peoplerect} alt=""  />
                    <div className='absolute top-[-210px] left-[50px] max-xl:hidden'>
                        <img src={drawnarrow} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose