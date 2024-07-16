import React from 'react'
import LogoWetick from './LogoWetick'

function NavbarHome() {
    return (
        <div className='flex justify-between items-center h-[90px] px-12 font-semibold text-sm fixed w-full bg-white z-10'>
            <LogoWetick />
            <div className='flex gap-6 justify-between'>
                <div>Home</div>
                <div>Create Event</div>
                <div>Location</div>
            </div>
            <div className='flex justify-between gap-4'>
                <button>Log In</button>
                <button  className='text-white w-[169px] h-[40px] bg-[rgba(51,102,255,1)] rounded-lg shadow-md shadow-[rgba(51,102,255,0.15)]'>Sign Up</button>
            </div>
        </div>
    )
}

export default NavbarHome