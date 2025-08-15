import { Ellipsis } from 'lucide-react'
import React from 'react'

const Drawer = () => {
  return (
    <div>
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                <label htmlFor="my-drawer-4" className=''><Ellipsis color="black" size={30}/></label>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-lg font-semibold font-sans">
                {/* Sidebar content here */}
                <li><a>Home</a></li>
                <li><a>Listing</a></li>
                <li><a>Let's Move</a></li>
                <li><a>About Us</a></li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Drawer