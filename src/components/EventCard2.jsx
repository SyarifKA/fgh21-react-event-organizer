import React from 'react'
import Event1 from '../assets/images/event-1.png'
import Event2 from '../assets/images/event-2.png'
import Event3 from '../assets/images/event-3.jpg'
import Attendee from './Attendee'

function EventCard2() {
    return (
        <div className='flex overflow-x-scroll gap-4'>
            <div className='w-[300px] h-[350px] bg-contain flex-shrink-0 rounded-2xl overflow-hidden'>
                <img src={Event1} alt="" className='object-fill w-full h-1/2' />
                <div className='flex flex-col gap-6 bg-[rgba(51,102,255,1)] h-1/2 p-6 relative'>
                    <Attendee />
                    <div className='flex flex-col text-white'>
                            <div className='text-sm'>Wed, 15 Nov, 4:00 PM</div>
                            <div className='text-2xl font-semibold'>Sights & Sounds Exhibition</div>
                    </div>
                </div>
            </div>
            <div className='w-[300px] h-[350px] bg-contain flex-shrink-0 rounded-2xl overflow-hidden'>
                <img src={Event2} alt="" className='object-fill w-full h-1/2' />
                <div className='flex flex-col gap-6 bg-[rgba(51,102,255,1)] h-1/2 p-6 relative'>
                    <Attendee />
                    <div className='flex flex-col text-white'>
                            <div className='text-sm'>Wed, 15 Nov, 4:00 PM</div>
                            <div className='text-2xl font-semibold'>Sights & Sounds Exhibition</div>
                    </div>
                </div>
            </div>
            <div className='w-[300px] h-[350px] bg-contain flex-shrink-0 rounded-2xl overflow-hidden'>
                <img src={Event3} alt="" className='object-fill w-full h-1/2' />
                <div className='flex flex-col gap-6 bg-[rgba(51,102,255,1)] h-1/2 p-6 relative'>
                    <Attendee />
                    <div className='flex flex-col text-white'>
                            <div className='text-sm'>Wed, 15 Nov, 4:00 PM</div>
                            <div className='text-2xl font-semibold'>Sights & Sounds Exhibition</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard2