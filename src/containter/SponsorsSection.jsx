import React from 'react'
import marvel from '../assets/marvel.png'
import intercom from '../assets/intercom.png'
import automattic from '../assets/automattic.png'
import coinbase from '../assets/coinbase.png'
import shopify from '../assets/shopify.png'
import dropbox from '../assets/dropbox.png'

const imageList = [shopify,coinbase,dropbox,intercom,marvel,automattic]
const SponsorsSection = () => {
  return (
    <section className='bg-white flex mx-32 max-2xl:mx-16 max-xl:mx-8  max-md:mx-4 relative z-40 py-24 max-md:py-12 gap-12 px-8  flex-col items-center '>
        <div className=' text-gray-600 text-xl leading-[30px] font-medium text-center'>
            <p>Join 1,500+ companies already video conferencing the ClearLink way</p>
        </div>
        <div className=' flex items-center gap-[69px]  justify-center flex-wrap max-md:grid max-md:grid-cols-2 '>
            {
                imageList.map((item,index)=>{
                    return(
                        <div className=''>
                            <img className=' ' src={item}></img>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default SponsorsSection