import React from 'react'
import Event1 from '../assets/images/event-1.png'
import Event2 from '../assets/images/event-2.png'
import Event3 from '../assets/images/event-3.jpg'
import Event4 from '../assets/images/event-4.jpg'
import Event5 from '../assets/images/event-5.jpg'
import Event6 from '../assets/images/event-6.jpg'
import Event7 from '../assets/images/event-7.jpg'
import Attendee from './Attendee'
import { useDispatch, useSelector } from 'react-redux'
import { createEvent } from '../redux/reducers/event'
import { useEffect } from 'react'
import { Link, useNavigate} from "react-router-dom";

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

    const dispatch = useDispatch() 
    const dataEvent = useSelector((state) => state.event.listEvent);
    
    useEffect(() => {
        (async()=> {
            const endPoint = 'http://localhost:8888/events'
            const response = await fetch(endPoint);
            const data = await response.json()
            const listData = data.results
            console.log(listData)
            dispatch(createEvent( listData ))
        })()
    },[])

    // getName()
    // console.log(dataEvent)
    const nav = useNavigate()
    function detailEvent(id) {
        nav("/events/"+id)
    }
    return (<>
        <div  className='flex gap-4 overflow-x-scroll'>
            {dataEvent.map((item) => {
            const date = item.date.split('T')
            return (
                <div onClick={()=>detailEvent(item.id)} key={item.id} className='w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative'>
                    {/* <img src={'https://wsw6zh-8888.csb.app'+item.picture} alt="Event-1" className='w-full h-full object-cover' /> */}
                    <img src={item.image} alt="Event-1" className='w-full h-full object-cover' />
                    <div className='flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0'>
                        <div className='flex flex-col'>
                            {/* <div className='text-sm'>{item.date}</div> */}
                            <div className='text-sm'>{date[0]}</div>
                            <div className='text-2xl font-semibold'>{item.title}</div>
                        </div>
                        {/* <div className='flex relative'>
                                {item.attendees.map((attendee) => {
                                    return (
                                        <div className='h-[29px] w-[29px] rounded-full overflow-hidden border border-white relative'>
                                        <img src={'https://wsw6zh-8888.csb.app'+attendee.picture} alt="" className='h-full w-full object-cover' />
                                        </div>
                                    )
                                })} */}
                            {/* <div className='h-[29px] w-[29px] rounded-full overflow-hidden border border-white relative left-[-10px]'>
                                <img src={Attendee2} alt="" className='h-full w-full object-cover'/>
                            </div>
                            <div className='h-[29px] w-[29px] rounded-full overflow-hidden border border-white relative left-[-20px]'>
                                <img src={Attendee3} alt="" className='h-full w-full object-cover'/>
                            </div>
                            <div className='h-[29px] w-[29px] rounded-full overflow-hidden relative left-[-30px]'>
                                <img src={Attendee4} alt="" className='h-full w-full object-cover' />
                                <div className='flex justify-center items-center text-white absolute w-full h-full bg-[rgba(255,137,0,0.6)] text-[10px] top-0 left-0'>62+</div>
                            </div> */}
                        {/* </div> */}
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