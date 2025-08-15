import React from 'react'
import Item1 from '../assets/item1.webp'
import Item2 from '../assets/item2.webp'
import Item3 from '../assets/item3.webp'
import Item4 from '../assets/item4.webp'
import './Partnership.css'

const Partnership = () => {
  return (
    <div className='flex justify-around items-center w-[1000px] h-[100px] gap-2 autoShowPartner'>
        <div>
            <img src={Item1} alt="Item 1" />
        </div>
        <div>
            <img src={Item2} alt="Item 2" />
        </div>
        <div>
            <img src={Item3} alt="Item 3" />
        </div>
        <div>
            <img src={Item4} alt="Item 4" />
        </div>
    </div>
  )
}

export default Partnership