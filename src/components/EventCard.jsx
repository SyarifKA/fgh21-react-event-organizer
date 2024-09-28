import React from 'react'
import Attendee from './Attendee'
import { useDispatch, useSelector } from 'react-redux'
import { createEvent } from '../redux/reducers/event'
import { useEffect } from 'react'
import { Link, useNavigate} from "react-router-dom";

function EventCard() {
    const dispatch = useDispatch() 

    async function getAllEvent(){
        const endPoint = 'http://103.93.58.89:21215/events'
        const response = await fetch(endPoint);
        const data = await response.json()
        const listData = data.results
        dispatch(createEvent( listData ))
    }
    
    useEffect(() => {
        getAllEvent()
    },[])
    
    const dataEvent = useSelector((state) => state.event.listEvent);
    // getName()
    // console.log(dataEvent)
    const nav = useNavigate()
    function detailEvent(id) {
        nav("/events/"+id)
    }
    return (<>
        <div  className='flex gap-4 overflow-x-scroll'>
            { dataEvent?dataEvent.map((item) => {
            const date = item.date.split('T')
            return (
                <div onClick={()=>detailEvent(item.id)} key={item.id} className='w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative'>
                    <img src={item.image} alt="Event-1" className='w-full h-full object-cover' />
                    <div className='flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0'>
                        <div className='flex flex-col'>
                            <div className='text-sm'>{date[0]}</div>
                            <div className='text-2xl font-semibold'>{item.title}</div>
                        </div>
                        <Attendee />
                    </div>
                </div>
            );
        }):''}
        </div>
    </>
        )
}

export default EventCard