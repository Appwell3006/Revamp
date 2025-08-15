import React from 'react'
import Bglogo from '../assets/hello.png'
import logo from '../assets/logo.webp'
import './MainBody.css'
import Profile from './Profile'
import Partnership from './Partnership'
import Sold1 from '../assets/sold1.webp'
import Sold2 from '../assets/sold2.webp'
import Sold3 from '../assets/sold3.webp'
import PhotoGallery from './PhotoGallery'
import Contact from './Contact'
import Links from './Links'
import Sewrvices from './Sewrvices'
import CallorVisit from './CallorVisit'

const MainBody = () => {
  return (
    <div>
        {/*Main row for the main body */}
        <div className='h-[1100px] flex justify-center items-center' style={{
          backgroundImage: `url(${Bglogo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
            <div>
                <div className='autoShow'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='autoShow text-4xl font-bold text-black text-center font-serif'>
                    THE RIDGE REALTY GROUP
                </div>
            </div>
        </div>
        {/*First row for the main body */}
        <div className='bg-black h-[600px]'>
           <Profile/>
        </div>

        

        {/*Second row for the main body */}
        <div className='bg-white h-[150px] '>
          <div className='flex flex-col justify-center items-center w-full h-[150px]'>
            <Partnership />
          </div>
        </div>

        
        
        {/*third row for the main body */}
        <div className='bg-black h-[100px] flex justify-center items-center '>
          <h1 className='text-white text-center text-4xl font-serif tracking-widest autoShowSold'>
            GET IT SOLD
          </h1>
        </div>
        {/*content of the third row*/}
        <div className='bg-black h-[1050px] grid grid-cols-2 gap-10 px-20 font-serif'>

          <div className='h-[300px] '>
            <img className='w-full h-full rounded-xl object-cover autoShowSold' src={Sold1} alt="" />
          </div>
          <div className='h-[300px] flex flex-col justify-center items-center gap-4'>
            <div className='text-2xl font-bold text-white mb-5 autoShowSold'>
              Top Residential Sales Last 5 Years
            </div>

            <div className='text-lg text-white text-justify autoShowSold'>
              We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.
            </div>
          </div>

          <div className='flex flex-col justify-center items-center gap-4h-[300px]'>
            <div className='text-2xl font-bold text-white mb-5 autoShowSold'>
              Don't Just List it...
            </div>
            <div className='text-lg text-white text-justify autoShowSold'>
              Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer getting you top dollar for your home.
            </div>
          </div>
          <div className=' h-[300px]'>
            <img className='w-full h-full autoShowSold rounded-xl object-cover' src={Sold2} alt="" />
          </div>

          <div className=' h-[300px]'>
            <img className='w-full h-full autoShowSold rounded-xl object-cover' src={Sold3} alt="" />
          </div>
          <div className='flex flex-col justify-center items-center h-[300px]'>
            <div className='text-2xl font-bold text-white mb-5 autoShowSold'>
              Guide to Buyers
            </div>
            <div className='text-lg text-white text-justify autoShowSold'>
              Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!
            </div>
          </div>
          
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="#000"><path d="M0 1v99c134.3 0 153.7-99 296-99H0Z" opacity=".5"></path><path d="M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z" opacity=".5"></path><path d="M617 1v86C372 119 384 1 196 1h421Z" opacity=".5"></path><path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path></g></svg>


        {/*Fourth row for the main body */}
        <div className='grid grid-cols-5 justify-center items-center-safe'>
          <div className='col-span-3'>
            <PhotoGallery />
          </div>
          <div className='col-span-2 font-serif text-xl text-justify mr-8 '>
            <div className='mb-4 autoShowSold'>
              "I love that small-town feeling that our community offers. Spectacular golf courses, parks, pool, and easy access to Las Vegas make Pahrump a great place to call home. Working or retired, fast-paced or looking to relax... there's a place for you here!
            </div>
            <div className='autoShowSold'>
              I enjoy living in the Mountain Falls community and will strive to find you a home that will suit you just as this community does me."
            </div> 
          </div>
        </div>

      <div class="custom-shape-divider-bottom-1755243846">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" class="shape-fill"></path>
          </svg>
      </div>

        {/*fifth row for the main body */}
        <div>
          <Contact />
        </div>

        {/*sixth row for the main body */}
        <div>
          <Links />
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="#000"><path d="M0 1v99c134.3 0 153.7-99 296-99H0Z" opacity=".5"></path><path d="M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z" opacity=".5"></path><path d="M617 1v86C372 119 384 1 196 1h421Z" opacity=".5"></path><path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path></g></svg>


        {/*seventh row for the main body */}
        <div>
          <Sewrvices />
        </div>

        <div className='rotate-180'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="#000"><path d="M0 1v99c134.3 0 153.7-99 296-99H0Z" opacity=".5"></path><path d="M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z" opacity=".5"></path><path d="M617 1v86C372 119 384 1 196 1h421Z" opacity=".5"></path><path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path></g></svg>
        </div>

        {/*eighth row for the main body */}
        <div>
          <CallorVisit />
        </div>


        {/*9th row for the main body */}
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="#000"><path d="M1000 100C500 100 500 64 0 64V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 34 0 34V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 4 0 4V0h1000v100Z"></path></g></svg>
        </div>

        

    </div>
    
  )
}

export default MainBody