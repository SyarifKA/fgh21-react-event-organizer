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
        item2.current.classList.toggle('md:flex')
        item3.current.classList.toggle('md:flex')
        item2.current.classList.toggle('hidden')
        item3.current.classList.toggle('hidden')
    }
    const data = useSelector((state) => state.auth.token)
    const profile = useSelector((state)=>state.profile.data)
    return (
        <div className='flex flex-col md:flex-row bg-[#FFD271] fixed z-40 md:justify-between md:gap-4 items-center px-8 pb-2 py-2 md:py-4 w-full font-semibold text-sm'>
            <div className='flex w-full items-center gap-8'>
                <LogoWetick />
                <div className='justify-start items-start flex md:hidden'>
                    <button onClick={hideNav} className='flex items-start justify-center'>
                        <img src={NavBtn} alt="" />        
                    </button>           
                </div>
            </div>
            <div ref={item2} className='flex w-full flex-col md:flex-row items-center gap-2 md:gap-8 md:justify-center'>
                <Link to='/'>
                <div>Home</div>
                </Link>
                <Link to='/createEvent'>
                <div>Create Event</div>
                </Link>
                <div>Location</div>
            </div>
            {data !== null ? (
                <div ref={item3} className='flex md:justify-end justify-center items-center w-full gap-4'>
                <Link to='/profile'>
                    <button className='h-[55px] w-[55px] flex justify-center items-center rounded-full overflow-hidden border border-[#0FABBC] border-2'>
                        <img src={"http://103.93.58.89:21215"+profile.picture} alt="Profile image" className='h-[44px] w-[44px] rounded-full' />
                    </button>
                    </Link>
                    <Link to='/profile'>
                    <button className='text-[rgba(55,58,66,1)] font-semibold text-sm'>{profile.fullName}</button>
                    </Link>
                </div>): (<div ref={item3} className='flex w-full flex-col md:flex-row items-center justify-end gap-2 md:gap-4'>
                <Link to='/login'>
                <button className=' flex bg-white rounded-lg justify-center items-center w-[169px] h-[40px]'>Log In</button>
                </Link>
                <Link to='/signUp'>
                <button  className='text-white flex justify-center w-[169px] h-[40px] items-center bg-[rgba(51,102,255,1)] rounded-lg shadow-md shadow-[rgba(51,102,255,0.15)]'>Sign Up</button>
                </Link>
            </div>)}
        </div>
    )
}

export default NavbarHome