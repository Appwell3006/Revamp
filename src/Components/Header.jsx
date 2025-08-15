import React from 'react'
import logo from '../assets/logo.webp'
import Drawer from './Drawer'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-4 text-white bg-white'>
        <div className='w-[200px] ml-4'>
            <img src={logo} alt="Logo" />
        </div>
        <div className='mr-10'>
            <Drawer />
        </div>
    </div>
  )
}

export default Header