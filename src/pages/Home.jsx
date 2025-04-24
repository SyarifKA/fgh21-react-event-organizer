import React from 'react'
import NavbarHome from '../components/NavbarHome'
import FooterMain from '../components/Footer'
import Bubble from '../assets/images/bubble.png'
import Cinema from '../assets/images/ticket-people.png'
import LinePink from '../assets/images/line-pink.png'
import LineWhite from '../assets/images/lineWhite.png'
import EventCard from '../components/EventCard'
import ButtonLeft from '../components/ButtonLeft'
import ButtonRight from '../components/ButtonRight'
import EventCard2 from '../components/EventCard2'
import { Link, ScrollRestoration } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { createEvent } from '../redux/reducers/event'
import { useDispatch } from 'react-redux'


function HomePage() {
    const [partners, setPartners] = useState([])
    const [category, setCategory] = useState([])
    const[locations, setLocations] = useState([])
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const [categoryEvent, setCategoryEvent] = useState(1)
    const [dataEventCategory, setDataEventCategory] = useState([])
    async function dataPartners() {
        const endPoint = `${import.meta.env.VITE_local_url}/partners`
        const response = await fetch(endPoint);
        const data = await response.json()
        const listData = data.results
        setPartners(listData)
    }
    async function dataCategory() {
        const endPoint = `${import.meta.env.VITE_local_url}/categories`
        const response = await fetch(endPoint);
        const data = await response.json()
        const listData = data.results
        setCategory(listData)
    }
    async function dataLocations() {
        const endPoint = `${import.meta.env.VITE_local_url}/locations`
        const response = await fetch(endPoint);
        const data = await response.json()
        const listData = data.results
        setLocations(listData)
    }
    async function eventByCategories(e) {
        e.preventDefault();
        const form = new URLSearchParams()
        form.append('categoryId', categoryEvent)
        const listCategory = await fetch(
          `${import.meta.env.VITE_local_url}/categories/event-categories`,
          {
            method: 'POST',
            body: form
          }
        );
        const listEvent = await listCategory.json();
        setDataEventCategory(listEvent.results);
      }

    async function getAllEvent(e){
        e.preventDefault()
        const endPoint = `${import.meta.env.VITE_local_url}/events?search=${search}`
        const response = await fetch(endPoint)
        const data = await response.json()
        const listData = data.results
        dispatch(createEvent( listData ))
    }
    useEffect(() => {
        eventByCategories()
        dataLocations()
        dataPartners()
        dataCategory()
    },[])
    return (
        <div className='flex flex-col gap-20'>
            <NavbarHome />
            <div className='flex w-full justify-end h-fit items-end bg-[#12CAD6] relative'>
                <img src={Bubble} alt="" className='w-full h-full'/>
                <div className='absolute flex justify-between w-full px-20'>
                    <div className='flex flex-col gap-4 justify-center items-center w-80'>
                        <span className='text-3xl text-white font-semibold'>Find events you love with our</span>
                        <form onSubmit={getAllEvent} className='w-full py-2 bg-white flex items-center gap-4 rounded-md px-4 justify-around'>
                            <CiSearch className='text-xl'/>
                            <input onChange={(e) => setSearch(e.target.value)} name='event' type="text" placeholder='Search' className='text-sm px-4 w-1/2 border border-bg[#C1C5D0BF] rounded-md'/>
                            <button type='submit' className='h-8 w-8 bg-[#FF3D71] flex justify-center items-center text-white text-xl rounded-md'>&rarr;</button>
                        </form>
                    </div>
                    <img src={Cinema} alt="" className='h-fit'/>
                </div>
            </div>
            <div  className='flex flex-col items-center gap-12'>
                <div className='flex flex-col items-center gap-6'>
                    <div className='flex justify-center items-center bg-[rgba(255,61,113,0.25)] w-[150px] h-[30px] rounded-3xl gap-2'>
                        <img src={LinePink} alt="" className='w-[30px] h-[2px]' />
                        <span className='text-[rgba(255,61,113,1)]'>Event</span>
                    </div>
                    <div className='font-semibold text-4xl'>Events For You</div>
                </div>
                <div className='flex gap-16 overflow-hidden'>
                    <div className='flex flex-col items-center text-[rgba(193,197,208,1)]'>
                        <div className='text-sm'>13</div>
                        <div className='text-xs'>Mon</div>
                    </div>
                    <div className='flex flex-col items-center text-[rgba(193,197,208,1)]'>
                        <div className='text-sm'>14</div>
                        <div className='text-xs'>Tue</div>
                    </div>
                    <div className='flex justify-end h-[75px] w-[50px] border border-[#FA163F] rounded-xl flex-col items-center text-[#FA163F]'>
                        <div className='text-sm'>15</div>
                        <div className='text-xs'>Wed</div>
                        <div className='text-xl'>&#x2022;</div>
                    </div>
                    <div className='flex flex-col items-center text-[rgba(193,197,208,1)]'>
                        <div className='text-sm'>16</div>
                        <div className='text-xs'>Thu</div>
                    </div>
                    <div className='flex flex-col items-center text-[rgba(193,197,208,1)]'>
                        <div className='text-sm'>17</div>
                        <div className='text-xs'>Fri</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col ml-14 gap-4'>
                    <EventCard />
                <div className='flex justify-center gap-8'>
                    <ButtonLeft />
                    <ButtonRight />
                </div>
            </div>
            <div className='relative flex-col flex bg-[#12CAD6] mx-[50px] rounded-3xl'>
                <img src={Bubble} alt="" className='w-full absolute h-full object-fit scale-y-[-1]' />
                <div className='py-[65px] px-[60px]'>
                    <div className='flex justify-center items-center bg-[rgba(255,255,255,0.25)] w-[150px] h-[30px] rounded-3xl gap-2'>
                        <img src={LineWhite} alt="" className='w-[30px] h-[2px]' />
                        <span className='text-white'>Location</span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-4 items-center gap-4 md:gap-2 relative z-1'>
                        <div className='text-4xl font-semibold text-white'>Discover Events Near You</div>
                        {locations.map((item) => {
                            return (
                                <div className='flex flex-col gap-2 items-center'>
                                    <img src={item.image} alt="" className='w-[230px] h-[179px] rounded-xl'/>
                                    <div className='text-white flex justify-center font-medium'>{item.name}</div>
                                </div>   
                            )
                        })}
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-white w-[255px] h-[40px] rounded-xl mt-[50px] text-[#0FABBC]'>See All</button>
                    </div>
                </div>
            </div>
            <div  className='flex flex-col items-center gap-12'>
                <div className='flex flex-col items-center gap-6'>
                    <div className='flex justify-center items-center bg-[rgba(255,61,113,0.25)] w-[150px] h-[30px] rounded-3xl gap-2'>
                        <img src={LinePink} alt="" className='w-[30px] h-[2px]' />
                        <span className='text-[rgba(255,61,113,1)] text-xs'>CATEGORY</span>
                    </div>
                    <div className='font-semibold text-4xl'>Browse Events By Category</div>
                </div>
                <form onSubmit={eventByCategories} className='grid grid-cols-3 md:grid-cols-7 gap-12'>
                    {/* <form action=""> */}
                    {category.length != 0?category.map((item, index) => {
                        return (
                                <button onClick={()=>setCategoryEvent(index+1)} className='font-medium text-[rgba(193,197,208,1)]'>{item.name}</button>
                            )
                        }):""}
                </form>
            </div>
                <div className='flex items-center justify-between px-2 flex-shrink-0 gap-8'>
                    <ButtonLeft />
                    <EventCard2 data={dataEventCategory}/>
                    <ButtonRight />
                </div>
            <div className='flex flex-col w-full h-full items-center bg-[#018383] relative pb-4'>
                <img src={Bubble} alt="" className='w-full h-full object-fit rotate-180 absolute' />
                <div className='flex flex-col items-center pt-[90px] gap-6 relative z-1'>
                    <div className='flex justify-center items-center bg-[rgba(255,255,255,0.25)] w-[150px] h-[30px] rounded-3xl gap-2'>
                        <img src={LineWhite} alt="" className='w-[30px] h-[2px]' />
                        <span className='text-white text-xs'>PARTNER</span>
                    </div>
                    <div className='font-semibold text-4xl text-white'>Our Trusted Partners</div>
                    <div className='text-[rgba(193,197,208,1)] text-xs'>By companies like :</div>
                    <div className='grid grid-cols-2 md:grid-cols-6 mt-[30px] px-8 gap-8 items-center'>
                        {partners.map((item) => {
                            return (
                                <img src={item.logo} alt=""/>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div>
                <FooterMain />
            </div>
            <ScrollRestoration/>
        </div>
    )
}

export default HomePage