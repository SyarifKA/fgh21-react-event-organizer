import React from 'react'
import Attendee1 from '../assets/images/people1.png'
import Attendee2 from '../assets/images/people2.png'
import Attendee3 from '../assets/images/people3.png'
import Attendee4 from '../assets/images/people4.png'

function Attendee() {
    return (
        <div className='flex relative'>
            <div className='h-[29px] w-[29px] rounded-full overflow-hidden border border-white relative'>
                <img src={Attendee1} alt="" className='h-full w-full'/>
            </div>
            <div className='h-[29px] w-[29px] rounded-full overflow-hidden border border-white relative left-[-10px]'>
                <img src={Attendee2} alt="" className='h-full w-full'/>
            </div>
            <div className='h-[29px] w-[29px] rounded-full overflow-hidden border border-white relative left-[-20px]'>
                <img src={Attendee3} alt="" className='h-full w-full'/>
            </div>
            <div className='h-[29px] w-[29px] rounded-full overflow-hidden relative left-[-30px]'>
                <img src={Attendee4} alt="" className='h-full w-full' />
                <div className='flex justify-center items-center text-white absolute w-full h-full bg-[rgba(255,137,0,0.6)] text-[10px] top-0 left-0'>62+</div>
            </div>
        </div>
    )
}

export default Attendee