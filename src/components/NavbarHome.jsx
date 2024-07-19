import React from 'react'
import LogoWetick from './LogoWetick'
import { Link } from 'react-router-dom'

function NavbarHome() {
    return (
        <div className='flex flex-col md:flex-row justify-between pb-2 md:pb-0 items-center md:px-12 font-semibold text-sm w-full bg-white z-10 fixed'>
            <LogoWetick />
            <div className='flex flex-col md:flex-row items-center gap-2 md:gap-6 justify-between'>
                <div>Home</div>
                <div>Create Event</div>
                <div>Location</div>
            </div>
                <Link to='/login'>
            <div className='flex flex-col md:flex-row justify-between gap-2 md:gap-4'>
                <button>Log In</button>
                <button  className='text-white w-[169px] h-[40px] bg-[rgba(51,102,255,1)] rounded-lg shadow-md shadow-[rgba(51,102,255,0.15)]'>Sign Up</button>
            </div>
                </Link>
        </div>
    )
}

export default NavbarHome