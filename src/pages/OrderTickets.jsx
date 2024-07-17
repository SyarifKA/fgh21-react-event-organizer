import React from "react"
import NavbarProfile from "../components/NavbarProfile"
import Seat from '../assets/images/seat.png'
import TicketPurple from '../assets/images/ticket-purple.png'
import FooterMain from "../components/Footer"
import { Link } from "react-router-dom"

function OrderTickets() {
    return (
        <div className="flex flex-col gap-24">
            <NavbarProfile />
            <div className='bg-white mx-[120px] flex mt-36 gap-4 rounded-3xl'>
                <div className="flex justify-center items-center w-1/2">
                    <img src={Seat} alt="" />
                </div>
                <div className="flex flex-col w-1/2 pb-[70px] pt-[70px] pr-[100px] gap-4">
                    <div className="flex justify-between items-center w-full">
                        <div>Tickets</div>
                        <div className="flex items-center gap-2">
                            <span className="text-red-500">BY PRICE</span>
                            <button className="h-[45px] w-[45px] bg-white shadow-md shadow-[rgba(26,60,68,0.08)] rounded-xl text-[rgba(51,102,255,1)]">&#8643;&#8638;</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex w-full items-start gap-2">
                            <img src={TicketPurple} alt="" className="bg-[rgba(241,234,255,1)] p-2 rounded-xl flex w-fit" />
                            <div className="flex w-full flex-col">
                                <div className="flex justify-between font-semibold text-sm">
                                    <span>Section reg, Row 1</span>
                                    <span>$15</span>
                                </div>
                                <div className="flex justify-between text-xs text-[rgba(189,192,196,1)]">
                                    <span>12 Seats available</span>
                                    <span>per person</span>
                                </div>
                                <div className="flex items-center mt-2 justify-between text-xs font-semibold">
                                    <div>Quantity</div>
                                    <div className="flex gap-4 items-center">
                                        <button className="w-[32px] h-[32px] border rounded-lg text-xl text-[rgba(193,197,208,1)]">-</button>
                                        <span>0</span>
                                        <button className="w-[32px] h-[32px] border rounded-lg text-xl text-[rgba(193,197,208,1)]">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full items-start gap-2">
                            <img src={TicketPurple} alt="" className="bg-[rgba(241,234,255,1)] p-2 rounded-xl flex w-fit" />
                            <div className="flex w-full flex-col">
                                <div className="flex justify-between font-semibold text-sm">
                                    <span>Section reg, Row 1</span>
                                    <span>$15</span>
                                </div>
                                <div className="flex justify-between text-xs text-[rgba(189,192,196,1)]">
                                    <span>12 Seats available</span>
                                    <span>per person</span>
                                </div>
                                <div className="flex items-center mt-2 justify-between text-xs font-semibold">
                                    <div>Quantity</div>
                                    <div className="flex gap-4 items-center">
                                        <button className="w-[32px] h-[32px] border rounded-lg text-xl text-[rgba(193,197,208,1)]">-</button>
                                        <span>0</span>
                                        <button className="w-[32px] h-[32px] border rounded-lg text-xl text-[rgba(193,197,208,1)]">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full items-start gap-2">
                            <img src={TicketPurple} alt="" className="bg-[rgba(241,234,255,1)] p-2 rounded-xl flex w-fit" />
                            <div className="flex w-full flex-col">
                                <div className="flex justify-between font-semibold text-sm">
                                    <span>Section reg, Row 1</span>
                                    <span>$15</span>
                                </div>
                                <div className="flex justify-between text-xs text-[rgba(189,192,196,1)]">
                                    <span>12 Seats available</span>
                                    <span>per person</span>
                                </div>
                                <div className="flex items-center mt-2 justify-between text-xs font-semibold">
                                    <div>Quantity</div>
                                    <div className="flex gap-4 items-center">
                                        <button className="w-[32px] h-[32px] border rounded-lg text-xl text-[rgba(193,197,208,1)]">-</button>
                                        <span>0</span>
                                        <button className="w-[32px] h-[32px] border rounded-lg text-xl text-[rgba(193,197,208,1)]">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="flex flex-col font-semibold text-sm gap-4">
                            <div className="flex justify-between">
                                <span>Ticket Section</span>
                                <span className="text-[rgba(51,102,255,1)]">VIP</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Quantity</span>
                                <span className="text-[rgba(51,102,255,1)]">2</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Total Payment</span>
                                <span className="text-[rgba(51,102,255,1)]">$70</span>
                            </div>
                        </div>
                        <div className='flex justify-center mt-4'>
                        <Link to='/payment'>
                            <button className='bg-[rgba(51,102,255,1)] min-w-[315px] h-[55px] rounded-xl text-white font-semibold'>Checkout</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <FooterMain />
        </div>
    )
}

export default OrderTickets