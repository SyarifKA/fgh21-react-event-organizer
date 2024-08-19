import React from 'react'
import NavbarHome from '../components/NavbarHome'
import LogoCard from '../assets/images/card.png'
import LogoBank from '../assets/images/bank.png'
import LogoRetail from '../assets/images/market.png'
import NavUp from '../assets/images/chevron-up.png'
import NavDown from '../assets/images/chevron-down.png'
import CardATM from '../assets/images/mastercard.png'
import FooterMain from '../components/Footer'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Payment() {
    const selectedSections = useSelector((state) => state.sectionSelector.selected)
    const ticketSection = selectedSections.name
    // const quantity = selectedSections.reduce((prev, curr) => prev + curr.quantity, 0)
    // const totalPrice = selectedSections.reduce((prev, curr) => prev + curr.price, 0)
    return (
        <div className='flex flex-col gap-24'>
            <NavbarHome />
            <div className='flex flex-col md:flex-row bg-white mx-[120px] mt-36 rounded-3xl gap-4 md:px-[100px] px-4 py-[70px]'>
                <div className='flex flex-col w-full md:w-1/2 gap-8'>
                    <div className='font-semibold text-xl'>Payment Method</div>
                    <div className='flex flex-col w-full gap-4'>
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex gap-2'>
                                <input type="radio" name='payment' id='card' />
                                <label htmlFor="card" className='flex gap-2 items-center'>
                                    <img src={LogoCard} alt="" className='bg-[rgba(136,77,255,0.2)] p-[12px] rounded-xl'/>
                                    <span>Card</span>
                                </label>
                            </div>
                            <div>
                                <img src={NavUp} alt="" />
                            </div>
                        </div>
                        <div className='flex items-center gap-2 justify-end'>
                            <img src={CardATM} alt="" />
                            <button className='w-[45px] h-[45px] flex-shrink-0 rounded-lg border-2 text-[rgba(51,102,255,1)] border-dashed'>+</button>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex gap-2 w-full'>
                                <input type="radio" name='payment' id='transfer' />
                                <label htmlFor="transfer" className='flex gap-2 items-center'>
                                    <img src={LogoBank} alt="" className='bg-[rgba(252,16,85,0.2)] p-[12px] rounded-xl'/>
                                    <span>Bank Transfer</span>
                                </label>
                            </div>
                            <div>
                                <img src={NavDown} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex gap-2'>
                                <input type="radio" name='payment' id='retail' />
                                <label htmlFor="retail" className='flex gap-2 items-center'>
                                    <img src={LogoRetail} alt="" className='bg-[rgba(255,137,0,0.2)] p-[12px] rounded-xl'/>
                                    <span>Retail</span>
                                </label>
                            </div>
                            <div>
                                <img src={NavDown} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex gap-2 w-full'>
                                <input type="radio" name='payment' id='emoney' />
                                <label htmlFor="emoney" className='flex gap-2 items-center'>
                                    <img src={LogoCard} alt="" className='bg-[rgba(51,102,255,0.2)] p-[12px] rounded-xl'/>
                                    <span>E-Money</span>
                                </label>
                            </div>
                            <div>
                                <img src={NavDown} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full md:w-1/2 gap-8'>
                    <div className='text-xl font-semibold'>Ticket Detail</div>
                    <div className='flex flex-col font-semibold text-sm gap-4'>
                        <div className='flex justify-between'>
                            <span>Event</span>
                            <span className='text-[#0FABBC]'>Sights & Sounds Exhibition</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Ticket Section</span>
                            <span className='text-[#0FABBC]'>VIP</span>
                            {/* <span className='text-[#0FABBC]'>{ticketSection}</span> */}
                        </div>
                        <div className='flex justify-between'>
                            <span>Quantity</span>
                            <span className='text-[#0FABBC]'>2</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Total Payment</span>
                            <span className='text-[#0FABBC]'>$70</span>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Link to='/myBooking'>
                        <button className='shadow-md shadow-[#E4F9FF] bg-[#0FABBC] text-white rounded-xl w-[315px] h-[55px]'>Payment</button>
                        </Link>
                    </div>
                </div>
            </div>
            <FooterMain />
        </div>
    )
}

export default Payment