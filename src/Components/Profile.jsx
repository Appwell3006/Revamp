import React from 'react'
import Picture from '../assets/profile.webp'
import './Profile.css'

const Profile = () => {
  return (
    <div>
        <div className='flex justify-center items-center h-[600px] gap-2 autoShow'>
            <div className="avatar">
                <div className="mask mask-squircle w-full">
                    <img src={Picture} alt="" />
                </div>
            </div>

            <div className='w-[40%] text-white font-serif'>
                <div className='ml-20 w-full'>
                    <div className='uppercase font-serif text-5xl tracking-widest '>
                        Marci J Metzger
                    </div>
                    <div className='text-md tracking-widest text-gray-400 font-serif'>
                        REALTOR for Nearly Three Decades
                    </div>

                    <div className='text-justify text-sm font-serif mt-5'>
                        Marci was a REALTOR, then licensed Broker, in Washington State. Now, she is enjoying the sunshine, and helping clients in Southern Nevada. Having helped buyers and sellers in many markets since 1995, she is a wealth of knowledge.
                    </div>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Profile