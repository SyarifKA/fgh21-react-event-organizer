import React from 'react'
import NavbarProfile from '../components/NavbarProfile'
import LogoCard from '../assets/images/card.png'
import LogoBank from '../assets/images/bank.png'
import LogoRetail from '../assets/images/market.png'
import NavUp from '../assets/images/chevron-up.png'
import NavDown from '../assets/images/chevron-down.png'
import CardATM from '../assets/images/mastercard.png'
import FooterMain from '../components/Footer'

function Payment() {
    return (
        <div className='flex flex-col gap-24'>
            <NavbarProfile />
            <div className='flex bg-white mx-[120px] mt-36 rounded-3xl gap-4 px-[100px] py-[70px]'>
                <div className='flex flex-col w-1/2 gap-8'>
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
                            <button className='w-[45px] h-[45px] rounded-lg border-2 text-[rgba(51,102,255,1)] border-dashed'>+</button>
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
                <div className='flex flex-col w-1/2 gap-8'>
                    <div className='text-xl font-semibold'>Ticket Detail</div>
                    <div className='flex flex-col font-semibold text-sm gap-2'>
                        <div className='flex justify-between'>
                            <span>Event</span>
                            <span className='text-[rgba(51,102,255,1)]'>Sights & Sounds Exhibition</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Ticket Section</span>
                            <span className='text-[rgba(51,102,255,1)]'>VIP</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Quantity</span>
                            <span className='text-[rgba(51,102,255,1)]'>2</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Total Payment</span>
                            <span className='text-[rgba(51,102,255,1)]'>$70</span>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className=' text-white rounded-xl bg-[rgba(51,102,255,1)] w-[80%] h-[55px]'>Payment</button>
                    </div>
                </div>
            </div>
            <FooterMain />
        </div>
    )
}

export default Payment