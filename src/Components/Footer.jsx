import React from 'react'
import Fb from '../assets/fb.png'
import Insta from '../assets/instaaa.png'
import Yelp from '../assets/yelp.png'

const Footer = () => {
  return (
    <div className='bg-white text-black h-[20vh] w-full '>
        <div>
            <div className='flex flex-row justify-center items-center gap-15'>
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-8 grayscale rounded-full">
                                    <a href="https://web.facebook.com/MarciHomes/?_rdc=1&_rdr#">
                                        <img src={Fb} alt="Facebook" />
                                    </a>
                                </div>
                            </div>
                            <div className="avatar  avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-8 grayscale rounded-full">
                                    
                                        <img className='' src={Insta} alt="Instagram" />
                                    
                                </div>
                            </div>
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-8 grayscale rounded-full">
                                    <a href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump">
                                        <img src={Yelp} alt="Yelp" />
                                    </a>
                                </div>
                            </div>
            </div>

            <div className="divider divider-neutral w-[500px] flex justify-center items-center mx-auto"></div>

            <div className='text-center font-serif text-sm'>
                Copyright © 2025 Marci METZGER Homes | Jimwell Concepcion - All Rights Reserved


            </div>


        </div>
    </div>
  )
}

export default Footer