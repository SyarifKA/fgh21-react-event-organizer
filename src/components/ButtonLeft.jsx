import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEvent } from '../redux/reducers/event';

function ButtonLeft() {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch()

    async function getAllEvent(e){
        e.preventDefault()
        const endPoint = `${import.meta.env.VITE_local_url}/events?page=${page}`
        const response = await fetch(endPoint);
        const data = await response.json()
        const listData = data.results
        dispatch(createEvent( listData ))
    }
    return (
        <form onSubmit={getAllEvent}>
            <button onClick={page > 1?()=>setPage(page-1):()=>setPage(page)} type='submit' className='bg-white w-[45px] h-[45px] rounded-md text-[rgba(193,197,208,1)] shadow-md shadow-[rgba(26,60,68,0.08)]'>&larr;</button>
        </form>
    )
}

export default ButtonLeft