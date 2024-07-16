import React from 'react'
import Logo from '../assets/images/logo-wetick.png'

function LogoWetick() {
    return (
        <div className='flex items-center'>
            <img src={Logo} alt="" />
            <div className='flex text-2xl font-semibold'>
                <span className='text-[rgba(51,102,255,1)]'>We</span>
                <span className='text-[rgba(252,16,85,1)]'>tick</span>
            </div>
        </div>
    )
}

export default LogoWetick