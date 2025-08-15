import React from 'react'
import Fb from '../assets/fb.png'
import Insta from '../assets/instaaa.png'
import Yelp from '../assets/yelp.png'

const Links = () => {
  return (
    <div className='bg-black h-[170px]'>
        <div className='flex flex-col justify-center items-center w-full h-[150px] gap-2'>
            <div className='text-3xl text-white tracking-widest font-serif mb-4 mt-7 autoShowSold'>
                Visit us on our social media platforms
            </div>
            <div className='flex flex-row justify-center items-center gap-15'>
                <div className="avatar avatar-online avatar-placeholder autoShowSold">
                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                        <a href="https://web.facebook.com/MarciHomes/?_rdc=1&_rdr#">
                            <img src={Fb} alt="Facebook" />
                        </a>
                    </div>
                </div>
                <div className="avatar avatar-online avatar-placeholder autoShowSold">
                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                        
                            <img className='' src={Insta} alt="Instagram" />
                        
                    </div>
                </div>
                <div className="avatar avatar-online avatar-placeholder autoShowSold">
                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                        <a href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump">
                            <img src={Yelp} alt="Yelp" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Links