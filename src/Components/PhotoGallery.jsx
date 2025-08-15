import React from 'react'
import Ph1 from '../assets/ph1.webp'
import Ph2 from '../assets/ph2.webp'
import Ph3 from '../assets/ph3.webp'
import Ph4 from '../assets/ph4.webp'
import Ph5 from '../assets/ph5.webp'
import Ph6 from '../assets/ph6.webp'
import Ph7 from '../assets/ph7.webp'



const PhotoGallery = () => {
  return (
    
    <div className=' w-full p-10 '>
        <div className="carousel w-[100%] rounded-2xl autoShowSold">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                src={Ph1}
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                src={Ph2}
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                src={Ph3}
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                src={Ph4}
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img
                src={Ph5}
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img
                src={Ph6}
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide5" className="btn btn-circle">❮</a>
                <a href="#slide7" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide7" className="carousel-item relative w-full">
                <img
                src={Ph7}
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide6" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PhotoGallery