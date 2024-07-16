import React from 'react'
import NavbarHome from '../components/NavbarHome'
import Bubble from '../assets/images/bubble.png'
import Character from '../assets/images/character.png'
import LinePink from '../assets/images/line-pink.png'


function HomePage() {
    return (
        <div>
            <NavbarHome />
            <div className='flex justify-end items-end bg-[rgba(51,102,255,1)] relative'>
                <img src={Bubble} alt="" className='relative'/>
                <img src={Character} alt="" className='absolute'/>
            </div>
            <div>
                <div className='flex justify-center items-center bg-[rgba(255,61,113,0.25)] w-[150px] h-[30px] rounded-3xl gap-2'>
                    <img src={LinePink} alt="" className='w-[30px] h-[2px]' />
                    <span className='text-[rgba(255,61,113,1)]'>Event</span>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default HomePage