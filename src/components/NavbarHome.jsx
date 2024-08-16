import React from 'react'
import LogoWetick from './LogoWetick'
import NavBtn from '../assets/images/menu.png'
import Avatar from '../assets/images/navbar-avatar.png'
import { Link } from 'react-router-dom'
import { useSelector, Provider } from 'react-redux'

function NavbarHome() {
    const item2 = React.useRef()
    const item3 = React.useRef()
    function hideNav() {
        item2.current.classList.toggle('hidden')
        item3.current.classList.toggle('hidden')
    }
    const data = useSelector((state) => state.auth.token)
    const profile = useSelector((state)=>state.profile.data)
    return (
        <div className='flex flex-col md:flex-row bg-[#FFD271] fixed z-40 md:justify-between items-center px-4 md:px-12 pb-2 py-2 w-full font-semibold text-sm'>
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
            {/* <div ref={item3} className='flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4'>
                <Link to='/login'>
                <button className=' flex justify-center items-center w-[169px] h-[40px]'>Log In</button>
                </Link>
                <Link to='/signUp'>
                <button  className='text-white flex justify-center w-[169px] h-[40px] items-center bg-[rgba(51,102,255,1)] rounded-lg shadow-md shadow-[rgba(51,102,255,0.15)]'>Sign Up</button>
                </Link>
            </div> */}
            {data !== null ? (<Link to='/profile'>
                <div ref={item3} className='flex justify-between gap-4'>
                    <button className='h-[55px] w-[55px] flex justify-center items-center rounded-full overflow-hidden border border-[#0FABBC] border-2'>
                        <img src={profile.picture} alt="" className='h-[44px] w-[44px] rounded-full' />
                    </button>
                    <button className='text-[rgba(55,58,66,1)] font-semibold text-sm'>{profile.name}</button>
                </div>
            </Link>):(<div ref={item3} className='flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4'>
                <Link to='/login'>
                <button className=' flex justify-center items-center w-[169px] h-[40px]'>Log In</button>
                </Link>
                <Link to='/signUp'>
                <button  className='text-white flex justify-center w-[169px] h-[40px] items-center bg-[rgba(51,102,255,1)] rounded-lg shadow-md shadow-[rgba(51,102,255,0.15)]'>Sign Up</button>
                </Link>
            </div>)}
        </div>
    )
}

export default NavbarHome