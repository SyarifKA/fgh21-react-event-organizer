import React from 'react'
import NavbarHome from '../components/NavbarHome'
import Event1 from '../assets/images/event-1.png'
import Wish from '../assets/images/heart-icon.png'
import IconMap from '../assets/images/map-pin.png'
import IconClock from '../assets/images/clock.png'
import Gmaps from '../assets/images/location.png'
import Attendee from '../components/Attendee'
import FooterMain from '../components/Footer'
import { Link } from 'react-router-dom'
import HeartLogo from '../assets/images/heart-icon.png'

function EventDetail() {
    // const dataEvent = useSelector((state) => state.event.listEvent);
    return (
        <div className='flex flex-col gap-24'>
            <NavbarHome />
            <div className='bg-white md:mx-[120px] mx-3 flex flex-col items-center md:items-start md:flex-row mt-36 p-8 md:p-24 gap-4 rounded-3xl'>
                <div className='flex flex-col gap-4 w-1/2 items-center md:justify-start'>
                    <div className='w-[260px] h-[376px] rounded-3xl overflow-hidden relative'>
                            <img src={Event1} alt="Event-1" className='w-full h-full relative' />
                        <div className='flex flex-col justify-center text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0'>
                            <div className='flex flex-col gap-2 text-white md:hidden'>
                                <div className='flex justify-between items-start'>
                                    <div className='text-xl font-semibold'>Sights & Sounds Exhibition</div>
                                    <img src={HeartLogo} alt="" className='h-fit'/>
                                </div>
                                <div className='flex flex-col gap-2 justify-between text-sm'>
                                    <div className='flex gap-2'>
                                        <img src={IconMap} alt="" className='h-[25px] w-[25px]'/>
                                        <span>Jakarta, Indonesia</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <img src={IconClock} alt="" className='h-[25px] w-[25px]'/>
                                        <span>Wed, 15 Nov, 4:00 PM</span>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div>Attendees</div>
                                    <Attendee />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 justify-center'>
                        <img src={Wish} alt="" className='h-fit' />
                        <span className='text-xl font-semibold text-[rgba(55,58,66,1)]'>Add to Wishlist</span>
                    </div>
                </div>
                <div className='flex flex-col w-full md:w-1/2 gap-4'>
                    <div className='md:flex flex-col gap-7 hidden border-b pb-4'>
                        <div className='text-2xl font-semibold text-[rgba(55,58,66,1)] w-[233px]'>Sights & Sounds Exhibition</div>
                        <div className='flex justify-between text-sm'>
                            <div className='flex gap-2'>
                                <img src={IconMap} alt="" className='h-[25px] w-[25px]'/>
                                <span>Jakarta, Indonesia</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={IconClock} alt="" className='h-[25px] w-[25px]'/>
                                <span>Wed, 15 Nov, 4:00 PM</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div>Attendees</div>
                            <Attendee />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='text-lg font-semibold'>Event Detail</div>
                        <p>After his controversial art exhibition "Tear and Consume" back in November 2018, in which guests were invited to tear up…</p>
                        <div className='text-[rgba(51,102,255,1)]'>Read More</div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='text-lg font-semibold'>Location</div>
                        <img src={Gmaps} alt="" />
                    </div>
                    <div className='flex justify-center w-full mt-4'>
                        <Link to='/order'>
                        <button className='w-[315px] h-[55px] rounded-xl text-white font-semibold shadow-md shadow-[#E4F9FF] bg-[#0FABBC]'>Buy Tickets</button>
                        </Link>
                    </div>
                </div>
            </div>
            <FooterMain />
        </div>
    )
}

export default EventDetail