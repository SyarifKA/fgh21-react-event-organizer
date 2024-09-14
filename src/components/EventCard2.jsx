import React from 'react'
import Event1 from '../assets/images/event-1.png'
import Event2 from '../assets/images/event-2.png'
import Event3 from '../assets/images/event-3.jpg'
import Attendee from './Attendee'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import dateFormat from 'dateformat'

function EventCard2(props) {
    const event = props.data
    const dataEvent = useSelector((state) => state.event.listEvent);
    console.log(dataEvent)
    useEffect(() => {
        event
    },[])
    return (
        <div className='flex overflow-x-scroll gap-4'>
            {event.length != 0?event.map((item)=>{
                const date = item.date.split('T')
                return(
                    <div className='w-[300px] h-[350px] bg-contain flex-shrink-0 rounded-2xl overflow-hidden'>
                        <img src={item.image} alt="" className='object-cover w-full h-1/2' />
                        <div className='flex flex-col gap-6 bg-[#12CAD6] h-1/2 px-6 relative'>
                            <div className='flex gap-4 flex-col absolute -top-4 text-white'>
                                    <Attendee />
                                    <div className='text-sm'>{date.join(", ")}</div>
                                    <div className='text-2xl font-semibold'>{item.title}</div>
                            </div>
                        </div>
                    </div>
                )
            }):dataEvent.map((item)=>{
                const date = item.date.split('T')
                return(
                    <div className='w-[300px] h-[350px] bg-contain flex-shrink-0 rounded-2xl overflow-hidden'>
                        <img src={item.image} alt="" className='object-cover w-full h-1/2' />
                        <div className='flex flex-col gap-6 bg-[#12CAD6] h-1/2 px-6 relative'>
                            <div className='flex gap-4 flex-col absolute -top-4 text-white'>
                                    <Attendee />
                                    <div className='text-sm'>{date.join(", ")}</div>
                                    <div className='text-2xl font-semibold'>{item.title}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default EventCard2