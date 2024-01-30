import React from 'react'
import logo from '../assets/Logo.png'
import googleplay from '../assets/googleplay.png'
import appstore from '../assets/appstore.png'
import insta from '../assets/insta.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
const FooterComponent = () => {
    return (
        <footer className=' pt-24 '>
            <div className='flex gap-[100px] max-sm:gap-[50px] justify-between pb-12 mx-32 max-2xl:mx-16 max-xl:mx-8  max-md:mx-10 flex-wrap'>
                <div className='flex flex-col gap-8'>
                    <div className='flex gap-2 items-center'>
                        <img src={logo} alt="" className='h-[28px] w-[25.384px]' />
                        <p className='  text-2xl font-semibold text-gray-900'>ClearLink<span className='text-blue-400'>.</span></p>
                    </div>
                    <p className=' text-gray-600 text-lg'>ClearLink is your gateway to effortless, high-<br />quality video conferencing. Join us in shaping<br /> the future of communication!</p>
                </div>
                <div className='flex gap-10 gap-y-16 max-lg:flex-wrap'>
                    <div className='flex flex-col gap-4 w-[160px] max-sm:w-[140px]'>
                        <p className='text-gray-500 font-semibold'>Product</p>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Overview</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Features</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Solutions</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Tutorials</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Pricing</a>
                    </div>
                    <div className='flex flex-col gap-4 w-[160px] max-sm:w-[140px]'>
                        <p className='text-gray-500 font-semibold'>Company</p>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>About us</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Careers</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Press</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>News</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Contact</a>
                    </div>
                    <div className='flex flex-col gap-4 w-[160px] max-sm:w-[140px]'>
                        <p className='text-gray-500 font-semibold'>Resources</p>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Blog</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Events</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Help Center</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Tutorials</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Support</a>
                    </div>
                    <div className='flex flex-col gap-4 w-[160px] max-sm:w-[140px]'>
                        <p className='text-gray-500 font-semibold'>Legal</p>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Terms</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Privacy</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Cookies</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Licenses</a>
                        <a href="#" className=' text-gray-600 duration-200 hover:text-gray-700 active:text-gray-800 font-semibold text-lg'>Contact</a>
                    </div>
                </div>
                    <div className='flex flex-col gap-4 w-[160px] max-sm:w-[140px]'>
                        <div className='text-blue-700 font-semibold'>
                            <p>Get the app</p>
                        </div>
                        <div>
                            <img src={appstore} alt="" />
                        </div>
                        <div>
                            <img src={googleplay} alt="" />
                        </div>
                    </div>
            </div>
            <div className='flex justify-between bg-gray-50 py-12 items-center px-32 max-2xl:px-16 max-xl:px-8  max-md:px-10 max-md:flex-col max-md:gap-5'>
                <div className='text-gray-500'>
                    <p>© 2023 ClearLink. All rights reserved.</p>
                </div>
                <div className='flex gap-6 items-center'>
                    <img src={linkedin} alt="" />
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={insta} alt="" />
                    <img src={github} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent