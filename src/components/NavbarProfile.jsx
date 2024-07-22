import React from 'react'
import LogoWetick from './LogoWetick'
import Avatar from '../assets/images/navbar-avatar.png'
import NavBtn from '../assets/images/menu.png'
import { Link } from 'react-router-dom'

function NavbarProfile() {
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
                <Link to='/'>
                <div>Home</div>
                </Link>
                <Link to='/createEvent'>
                <div>Create Event</div>
                </Link>
                <div>Location</div>
            </div>
                 <Link to='/profile'>
             <div ref={item3} className='flex justify-between gap-4'>
                 <button className='h-[55px] w-[55px] flex justify-center items-center rounded-full overflow-hidden border border-[rgba(51,102,255,1)] border-2'>
                     <img src={Avatar} alt="" className='h-[44px] w-[44px] rounded-full'/>
                 </button>
                 <button  className='text-[rgba(55,58,66,1)] font-semibold text-sm'>Jhon Tomson</button>
             </div>
            </Link>
        </div>
    )
}

export default NavbarProfile