import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black h-[90vh] p-8 flex flex-col gap-6 justify-start items-center'>

        <div className='text-white text-4xl tracking-widest font-serif autoShowSold'>
            Find Your Dream Home
        </div>

        <div className='bg-white w-[1000px] h-[50vh] p-5 flex flex-col justify-center gap-10 rounded-2xl autoShowSold'>
            <div className='text-3xl tracking-widest font-serif'>
                Search Listings
            </div>
            <div className='flex flex-row justify-center gap-3'>
                <label className="select">
                    <span className="label">Location</span>

                    <select>
                        <option></option>
                        <option></option>
                    </select>
                </label>
                <label className="select">
                    <span className="label">Type</span>
                    
                    <select>
                        <option></option>
                        <option></option>
                    </select>
                </label>
                <label className="select">
                    <span className="label">Short by.</span>
                    
                    <select>
                        <option></option>
                        <option></option>
                    </select>
                </label>
            </div>

            <div className='flex flex-row justify-center items-center gap-2'>
                <label className="select">
                    <span className="label">Bedrooms</span>
                    
                    <select>
                        <option></option>
                        <option></option>
                    </select>
                </label>
                <label className="select">
                    <span className="label">Baths</span>
                    
                    <select>
                        <option></option>
                        <option></option>
                    </select>
                </label>
                <input type="text" placeholder="Min Price" className="input" />
                <input type="text" placeholder="Max Price" className="input" />
            </div>

            <div className='flex flex-row justify-end items-center gap-2'>
                <button className="btn btn-outline rounded-4xl">Search Now!</button>
            </div>
        </div>

        

    </div>
  )
}

export default Contact