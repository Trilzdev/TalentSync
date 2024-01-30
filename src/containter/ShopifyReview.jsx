import React from 'react'
import shopify from '../assets/shopifysmall.png'
import star from '../assets/Star.png'
import arrowleft from '../assets/arrow-left.png'
import arrowright from '../assets/arrow-right.png'
import avatar from '../assets/avatar.png'
import content from '../assets/contents.png'
const ShopifyReview = () => {
  return (
    <section className='flex justify-center py-24 px-32 max-2xl:px-24 max-xl:px-20 max-md:px-12 gap-16 items-center bg-gray-50 max-xl:flex-col max-xl:items-center max-md:items-start'>
        <div className='flex flex-col gap-12 w-[640px] max-md:w-full'>
            <div>
                <img src={shopify} alt="" />
            </div>
            <div className=' flex gap-1'>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
            <div className='text-[44px] max-xl:text-4xl max-md:text-xl text-gray-900 leading-[60px] tracking-[-0.88px] font-medium'>
                <p>ClearLink has upgraded our<br className='max-xl:hidden'/> remote meetings. High-quality<br className='max-2xl:hidden'/> video, screen sharing, and<br className='max-2xl:hidden'/> top-notch security make it<br className='max-2xl:hidden'/> essential for our team.</p>
            </div>
            <div className='flex justify-between max-sm:flex-col max-sm:gap-8'>
                <div className=' flex items-center gap-4'>
                    <img src={avatar} alt="" />
                    <div>
                        <p className='text-xl max-sm:text-lg text-gray-900 font-semibold'>Sarah Thompson</p>
                        <p className=' text-lg max-sm:text-base text-gray-600'>Project Manager, Shopify</p>
                    </div>
                </div>
                <div className=' flex gap-8 max-sm:self-end'>
                    <button className='bg-white border border-blue-100 hover:bg-gray-200 duration-200 active:bg-gray-300 p-4 h-fit flex justify-center items-center rounded-full'><img src={arrowleft} alt=''/></button>
                    <button className='bg-white border border-blue-100 hover:bg-gray-200 duration-200 active:bg-gray-300 p-4 h-fit flex justify-center items-center rounded-full'><img src={arrowright} alt=''/></button>
                </div>
            </div>
        </div>
        <div>
            <img src={content} alt="" />
        </div>
    </section>
  )
}

export default ShopifyReview