import React from 'react'
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { createEvent } from '../redux/reducers/event'

function ButtonRight() {
    const [page, setPage] = useState(2);
    const dispatch = useDispatch()
    const [dataPage, setDataPage]= useState({})

    async function getAllEvent(e){
        e.preventDefault()
        const endPoint = `${import.meta.env.VITE_local_url}/events?page=${page}`
        const response = await fetch(endPoint)
        const data = await response.json()
        const pageInfo = data.pageInfo
        setDataPage(pageInfo)
        const listData = data.results
        dispatch(createEvent( listData ))
    }
    return (
        <form onSubmit={getAllEvent}>
            <button onClick={page < dataPage.totalPage?()=>setPage(page+1):()=>setPage(page)} type='submit' className='bg-[#0FABBC] w-[45px] h-[45px] rounded-md text-white shadow-md shadow-[rgba(26,60,68,0.08)]'>&rarr;</button>
        </form>
    )
}

export default ButtonRight