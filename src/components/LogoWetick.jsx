import React from 'react'
import Logo from '../assets/images/logo-wetick.png'
import Kuytick from '../assets/images/kuytick.png'

function LogoWetick() {
    return (
        <div className='flex items-center gap-2'>
            <img src={Kuytick} alt=""  className='w-10 h-10'/>
            <div className='flex text-2xl font-bold tracking-wider'>
                <span className='text-[rgba(252,16,85,1)]'>Kuy</span>
                <span className='text-[#0FABBC]'>tick</span>
            </div>
        </div>
    )
}

export default LogoWetick