import React from 'react'
import LogoWetick from './LogoWetick'
import NavBtn from '../assets/images/menu.png'
import { Link } from 'react-router-dom'

function NavbarHome() {
    const item2 = React.useRef()
    const item3 = React.useRef()
    function hideNav() {
        item2.current.classList.toggle('hidden')
        item3.current.classList.toggle('hidden')
    }
    return (
        <div className='flex flex-col md:flex-row bg-white fixed z-10 md:justify-between items-center px-4 md:px-12 pb-2 w-full font-semibold text-sm'>
            <div className='flex items-center gap-8'>
                <LogoWetick />
                <div className='justify-start items-start flex md:hidden'>
                    <button onClick={hideNav} className='flex items-start justify-center'>
                        <img src={NavBtn} alt="" />        
                    </button>           
                </div>
            </div>
            <div ref={item2} className='flex flex-col md:flex-row items-center gap-2 md:gap-6 md:justify-between'>
                <div>Home</div>
                <Link to='/createEvent'>
                <div>Create Event</div>
                </Link>
                <div>Location</div>
            </div>
                <Link to='/login'>
            <div ref={item3} className='flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4'>
                <button className='flex-1 flex w-[200px] justify-center md:w-1/2'>Log In</button>
                <button  className='text-white flex w-[200px] justify-center flex-1 items-center h-[40px] bg-[rgba(51,102,255,1)] rounded-lg shadow-md shadow-[rgba(51,102,255,0.15)]'>Sign Up</button>
            </div>
                </Link>
        </div>
    )
}

export default NavbarHome