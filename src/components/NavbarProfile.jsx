import React from 'react'
import LogoWetick from './LogoWetick'
import Avatar from '../assets/images/navbar-avatar.png'
import { Link } from 'react-router-dom'

function NavbarProfile() {
    return (
        <div className='flex flex-col md:flex-row justify-between pb-2 md:pb-0 items-center px-0 md:px-12 font-semibold text-sm w-full bg-white z-10 fixed top-0'>
            <LogoWetick />
            <div className='flex flex-col md:flex-row gap-2 md:gap-6 justify-center items-center md:justify-between'>
                <Link to='/'>
                    <div>Home</div>
                </Link>
                <Link to='/createEvent'>
                <div>Create Event</div>
                </Link>
                <div>Location</div>
            </div>
            <Link to='/profile'>
            <div className='flex justify-between gap-4'>
                <button className='h-[55px] w-[55px] flex justify-center items-center rounded-full overflow-hidden border border-2'>
                    <img src={Avatar} alt="" className='h-[44px] w-[44px] rounded-full'/>
                </button>
                <button  className='text-[rgba(55,58,66,1)] font-semibold text-sm'>Jhon Tomson</button>
            </div>
            </Link>
        </div>
    )
}

export default NavbarProfile