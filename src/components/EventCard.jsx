import React from 'react'
import Event1 from '../assets/images/event-1.png'
import Event2 from '../assets/images/event-2.png'
import Event3 from '../assets/images/event-3.jpg'
import Event4 from '../assets/images/event-4.jpg'
import Event5 from '../assets/images/event-5.jpg'
import Event6 from '../assets/images/event-6.jpg'
import Event7 from '../assets/images/event-7.jpg'
import Attendee from './Attendee'

function EventCard() {
    return (
            <div  className='flex gap-4 overflow-x-scroll'>
                <div className='w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative'>
                        <img src={Event1} alt="Event-1" className='w-full h-full object-cover' />
                    <div className='flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0'>
                        <div className='flex flex-col'>
                            <div className='text-sm'>Wed, 15 Nov, 4:00 PM</div>
                            <div className='text-2xl font-semibold'>Sights & Sounds Exhibition</div>
                        </div>
                        <Attendee />
                    </div>
                </div>
                <div className='w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative'>
                        <img src={Event2} alt="Event-1" className='w-full h-full object-cover' />
                    <div className='flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0'>
                        <div className='flex flex-col'>
                            <div className='text-sm'>Wed, 15 Nov, 4:00 PM</div>
                            <div className='text-2xl font-semibold'>Sights & Sounds Exhibition</div>
                        </div>
                        <Attendee />
                    </div>
                </div>
                <div className='w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative'>
                        <img src={Event3} alt="Event-1" className='w-full h-full object-cover' />
                    <div className='flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0'>
                        <div className='flex flex-col'>
                            <div className='text-sm'>Wed, 15 Nov, 4:00 PM</div>
                            <div className='text-2xl font-semibold'>Sights & Sounds Exhibition</div>
                        </div>
                        <Attendee />
                    </div>
                </div>
                <div className='w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative'>
                        <img src={Event4} alt="Event-1" className='w-full h-full object-cover' />
                    <div className='flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0'>
                        <div className='flex flex-col'>
                            <div className='text-sm'>Wed, 15 Nov, 4:00 PM</div>
                            <div className='text-2xl font-semibold'>Sights & Sounds Exhibition</div>
                        </div>
                        <Attendee />
                    </div>
                </div>
                <div className='w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative'>
                        <img src={Event5} alt="Event-1" className='w-full h-full object-cover' />
                    <div className='flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0'>
                        <div className='flex flex-col'>
                            <div className='text-sm'>Wed, 15 Nov, 4:00 PM</div>
                            <div className='text-2xl font-semibold'>Sights & Sounds Exhibition</div>
                        </div>
                        <Attendee />
                    </div>
                </div>
                <div className='w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative'>
                        <img src={Event6} alt="Event-1" className='w-full h-full object-cover' />
                    <div className='flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0'>
                        <div className='flex flex-col'>
                            <div className='text-sm'>Wed, 15 Nov, 4:00 PM</div>
                            <div className='text-2xl font-semibold'>Sights & Sounds Exhibition</div>
                        </div>
                        <Attendee />
                    </div>
                </div>
                <div className='w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative'>
                        <img src={Event7} alt="Event-1" className='w-full h-full object-cover' />
                    <div className='flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0'>
                        <div className='flex flex-col'>
                            <div className='text-sm'>Wed, 15 Nov, 4:00 PM</div>
                            <div className='text-2xl font-semibold'>Sights & Sounds Exhibition</div>
                        </div>
                        <Attendee />
                    </div>
                </div>
            </div>
        )
}

export default EventCard