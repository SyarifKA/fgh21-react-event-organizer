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
    const events = [
        {
            title: 'Sights & Sounds Exhibition',
            date: 'Wed, 15 Nov, 4:00 PM',
            image: Event1
        },
        {
            title: 'See it in Gold Class',
            date: 'Thu, 16 Nov, 7:00 PM',
            image: Event2
        },
        {
            title: 'music concert',
            date: 'Sat, 16 Jun, 7:00 PM',
            image: Event3
        },
        {
            title: 'MotoGP at Mandalika',
            date: 'Sun, 27 Aug, 10:00 AM',
            image: Event4
        },
        {
            title: 'international chess tournament',
            date: 'Sun, 7 Feb, 08:00 AM',
            image: Event5
        },
        {
            title: 'Jakarta International Marathon',
            date: 'Sun, 23 Jun, 03:00 AM',
            image: Event6
        },
        {
            title: 'Indonesia VS Argentina',
            date: 'Wed, 21 Jul, 18:00 PM',
            image: Event7
        }
    ]
    
    return (<>
        <div  className='flex gap-4 overflow-x-scroll'>
        {events.map((item, index) => {
            return (
                <div key={index} className='w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative'>
                    <img src={item.image} alt="Event-1" className='w-full h-full object-cover' />
                    <div className='flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0'>
                        <div className='flex flex-col'>
                            <div className='text-sm'>{item.date}</div>
                            <div className='text-2xl font-semibold'>{item.title}</div>
                        </div>
                        <Attendee />
                    </div>
                </div>
            );
        })}
        </div>
    </>
        )
}

export default EventCard