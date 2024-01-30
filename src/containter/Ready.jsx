import React from 'react'
import check from '../assets/check-circle.png'
import mockup from '../assets/mockup.png'
const Ready = () => {
    return (
        <section className='ml-32 mr-0 max-xl:flex-col max-2xl:ml-16 max-xl:ml-8 max-md:ml-4 pl-8 flex gap-8 justify-between py-24 max-sm:py-0'>
            <div className='flex flex-col gap-10 py-10 '>
                <div className='text-gray-900 text-5xl max-md:text-2xl font-semibold leading-[60px]'>
                    <p>Ready to clear the path to<br/> perfect communication?</p>
                </div>
                <div className='pl-4 flex flex-col gap-5'>
                    <p className=' flex gap-3 text-gray-600 text-2xl max-md:text-lg font-normal leading-loose items-center'><img src={check} className='w-[28px] h-[28px]' alt="" />30 days free trial</p>
                    <p className=' flex gap-3 text-gray-600 text-2xl max-md:text-lg font-normal leading-loose items-center'><img src={check} className='w-[28px] h-[28px]' alt="" />Cancel at any time</p>
                    <p className=' flex gap-3 text-gray-600 text-2xl max-md:text-lg font-normal leading-loose items-center'><img src={check} className='w-[28px] h-[28px]' alt="" />Access to all features</p>
                    <p className=' flex gap-3 text-gray-600 text-2xl max-md:text-lg font-normal leading-loose items-center'><img src={check} className='w-[28px] h-[28px]' alt="" />Personalized onboarding</p>
                </div>
                <div className='flex items-center gap-2'>
                    <button className=" px-6 py-3.5 border-gray-400  text-gray-900 bg-white hover:bg-gray-200 duration-200 active:bg-gray-300 border rounded-[100px] shadow ">
                        <p className="text-black text-base font-semibold font-['Inter'] leading-normal">Start your free trial</p>
                    </button>
                    <button className=" px-6 py-3.5 bg-blue-700 hover:bg-blue-800 active:bg-blue-950 duration-200 rounded-[100px] shadow ">
                        <p className="text-white text-base font-semibold font-['Inter'] leading-normal">Start your free trial</p>
                    </button>
                </div>
            </div>
            <div>
                <img src={mockup} alt="" />
            </div>
        </section>
    )
}

export default Ready