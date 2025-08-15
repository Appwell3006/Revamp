import React from 'react'
import Building from '../assets/buidling.jpg'
import Ser1 from '../assets/ser1.webp'
import Ser2 from '../assets/ser2.webp'
import Ser3 from '../assets/ser3.webp'

const Sewrvices = () => {
  return (
    <div className='h-[140vh] mt-5'>
        <div className='relative'>
            <img className='h-[400px] w-[100%] blur-lg' src={Building} alt="" />
            <div className='absolute top-0 left-0 right-0 bottom-30 flex justify-center items-center'>
                <div className='text-black text-4xl tracking-widest font-serif autoShowSold'>Our Services</div>
            </div>

            <div className='absolute top-140 left-0 right-0 bottom-0 flex justify-center items-center gap-10'>
                <div>
                        <div className="card bg-base-100 w-96 shadow-sm autoShowSold">
                            <figure>
                                <img
                                className='w-full'
                                src={Ser1}
                                alt="" />
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title">Real Estate Done Right</h2>
                                <p className='text-justify'>Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                </div>
                <div>
                        <div className="card bg-base-100 w-96 shadow-sm autoShowSold">
                            <figure>
                                <img
                                className='w-full'
                                src={Ser2}
                                alt="" />
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title">Commercial & Residential</h2>
                                <p className='text-justify'>Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                </div>
                <div>
                        <div className="card bg-base-100 w-96 shadow-sm autoShowSold">
                            <figure>
                                <img
                                className='w-full'
                                src={Ser3}
                                alt="" />
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title">Rely on Expertise</h2>
                                <p className='text-justify'>If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Sewrvices