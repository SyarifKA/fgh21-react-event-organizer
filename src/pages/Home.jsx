import React from 'react'
import NavbarHome from '../components/NavbarHome'
import FooterMain from '../components/Footer'
import Bubble from '../assets/images/bubble.png'
import Character from '../assets/images/character.png'
import CharacterMadura from '../assets/images/madura.png'
import LinePink from '../assets/images/line-pink.png'
import LineWhite from '../assets/images/lineWhite.png'
import EventCard from '../components/EventCard'
import ButtonLeft from '../components/ButtonLeft'
import ButtonRight from '../components/ButtonRight'
import Jakarta from '../assets/images/city-jkt.jpg'
import Solo from '../assets/images/city-sl.jpg'
import Aceh from '../assets/images/city-ach.jpg'
import Bandung from '../assets/images/city-bdg.jpg'
import Bali from '../assets/images/city-bl.jpg'
import Jogja from '../assets/images/city-jg.jpg'
import Semarang from '../assets/images/city-sm.jpg'
import EventCard2 from '../components/EventCard2'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


function HomePage() {
    const [partners, setPartners] = useState([])
    const [category, setCategory] = useState([])
    const[locations, setLocations] = useState([])
    async function dataPartners() {
        const endPoint = 'http://localhost:8888/partners'
        const response = await fetch(endPoint);
        const data = await response.json()
        const listData = data.results
        setPartners(listData)
    }
    async function dataCategory() {
        const endPoint = 'http://localhost:8888/categories'
        const response = await fetch(endPoint);
        const data = await response.json()
        const listData = data.results
        setCategory(listData)
    }
    async function dataLocations() {
        const endPoint = 'http://localhost:8888/locations'
        const response = await fetch(endPoint);
        const data = await response.json()
        const listData = data.results
        setLocations(listData)
    }
    useEffect(() => {
        dataLocations()
        dataPartners()
        dataCategory()
    },[])
    return (
        <div className='flex flex-col gap-20'>
            <NavbarHome />
            <div className='flex w-full justify-end h-fit items-end bg-[#12CAD6] relative'>
                <img src={Bubble} alt="" className='w-full h-full'/>
                {/* <img src={Character} alt="" className=''/> */}
                {/* <img src={CharacterMadura} alt="" className='z-10'/> */}
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
                {/* <Link to="/detail"> */}
                    <EventCard />
                {/* </Link> */}
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
                        {/* <div className='md:flex flex-col hidden items-center'>
                            <img src={Bandung} alt="" className='w-[230px] h-[179px] rounded-xl'/>
                            <div className='text-white flex justify-center font-medium'>Bandung</div>
                        </div>
                        <div className='md:flex hidden flex-col items-center'>
                            <img src={Bali} alt="" className='w-[230px] h-[179px] rounded-xl'/>
                            <div className='text-white flex justify-center font-medium'>Bali</div>
                        </div>
                        <div className='md:flex hidden flex-col items-center'>
                            <img src={Aceh} alt="" className='w-[230px] h-[179px] rounded-xl'/>
                            <div className='text-white flex justify-center font-medium'>Aceh</div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={Solo} alt="" className='w-[230px] h-[179px] rounded-xl'/>
                            <div className='text-white flex justify-center font-medium'>Solo</div>
                        </div>
                        <div className='md:flex hidden flex-col items-center'>
                            <img src={Jogja} alt="" className='w-[230px] h-[179px] rounded-xl'/>
                            <div className='text-white flex justify-center font-medium'>Yogyakarta</div>
                        </div>
                        <div className='md:flex hidden flex-col items-center'>
                            <img src={Semarang} alt="" className='w-[230px] h-[179px] rounded-xl'/>
                            <div className='text-white flex justify-center font-medium'>Semarang</div>
                        </div> */}
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
                <div className='grid grid-cols-3 md:grid-cols-7 gap-12'>
                    {category.map((item) => {
                        return (
                            <button className='font-medium text-[rgba(193,197,208,1)]'>{item.name}</button>
                        )
                    })}
                    {/* <span className='font-medium text-[rgba(193,197,208,1)]'>Arts</span>
                    <span className='font-medium text-[rgba(193,197,208,1)]'>Outdoors</span>
                    <span className='font-medium text-[rgba(193,197,208,1)]'>Workshop</span>
                    <span className='font-medium text-[rgba(193,197,208,1)]'>Sport</span>
                    <span className='font-medium text-[rgba(193,197,208,1)]'>Festival</span>
                    <span className='font-medium text-[rgba(193,197,208,1)]'>Fashion</span> */}
                </div>
            </div>
                <div className='flex items-center justify-between px-2 flex-shrink-0 gap-8'>
                    <ButtonLeft />
                    <EventCard2 />
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
                        {/* <img src={Banner1} alt="" />
                        <img src={Banner2} alt="" />
                        <img src={Banner3} alt="" />
                        <img src={Banner4} alt="" />
                        <img src={Banner5} alt="" />
                        <img src={Banner6} alt="" /> */}
                    </div>
                </div>
            </div>
            <div>
                <FooterMain />
            </div>
        </div>
    )
}

export default HomePage