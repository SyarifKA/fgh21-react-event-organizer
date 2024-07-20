import React from "react"
import NavbarProfile from "../components/NavbarProfile"
import Seat from '../assets/images/seat.png'
import TicketPurple from '../assets/images/ticket-purple.png'
import FooterMain from "../components/Footer"
import { Link } from "react-router-dom"

function OrderTickets() {
    
    const [numb, setnumb] = React.useState(0)
    function min() {
        
        if (numb > 0) {
            setnumb(numb-1)
        }
    }
    function plus() {
        if (numb < 10) {
            setnumb(numb+1)
        }
    }
    
    const [numb2, setnumb2] = React.useState(0)
    function min2() {
        if (numb2 > 0) {
            setnumb2(numb2-1)
        }
    }
    function plus2() {
        if (numb2 < 10) {
            setnumb2(numb2+1)
        }
    }
    
    const [numb3, setnumb3] = React.useState(0)
    function min3() {
        if (numb3 > 0) {
            setnumb3(numb3-1)
        }
    }
    function plus3() {
        if (numb3 < 10) {
            setnumb3(numb3+1)
        }
    }

    let section = []
    if (numb > 0) {
        section.push(`REG (${numb})`)
    }
    if (numb2 > 0) {
        section.push(`VIP (${numb2})`)
    }
    if (numb3 > 0) {
        section.push(`VVIP (${numb3})`)
    }

    let dataSection = ''

    section.length > 0? dataSection = section.join(', '):dataSection = '-'

    return (
        <div className="flex flex-col gap-24">
            <NavbarProfile />
            <div className='bg-white mx-[120px] flex mt-36 gap-4 rounded-3xl'>
                <div className="md:flex justify-center hidden items-center w-1/2">
                    <img src={Seat} alt="" />
                </div>
                <div className="flex flex-col w-full md:w-1/2 px-4 md:px-0 pb-[70px] pt-[70px] md:pr-[100px] gap-4">
                    <div className="flex justify-between items-center w-full">
                        <div className="font-semibold text-xl">Tickets</div>
                        <div className="flex items-center gap-2">
                            <span className="text-red-500 font-semibold text-sm">BY PRICE</span>
                            <button className="h-[45px] w-[45px] bg-white shadow-md shadow-[rgba(26,60,68,0.08)] rounded-xl text-[rgba(51,102,255,1)]">&#8643;&#8638;</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex w-full items-start gap-2">
                            <img src={TicketPurple} alt="" className="bg-[rgba(241,234,255,1)] p-2 rounded-xl flex w-fit" />
                            <div className="flex w-full flex-col">
                                <div className="flex justify-between font-semibold text-sm">
                                    <span>SECTION REG, ROW 1</span>
                                    <span>$15</span>
                                </div>
                                <div className="flex justify-between text-xs text-[rgba(189,192,196,1)]">
                                    <span>12 Seats available</span>
                                    <span>per person</span>
                                </div>
                                <div className="flex items-center mt-2 justify-between text-xs font-semibold">
                                    <div>Quantity</div>
                                    <div className="flex gap-4 items-center">
                                        <button onClick={min} className="w-[32px] h-[32px] border rounded-lg text-xl text-[rgba(193,197,208,1)]">-</button>
                                        <span>{numb}</span>
                                        <button onClick={plus} className="w-[32px] h-[32px] border rounded-lg text-xl text-[rgba(193,197,208,1)]">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full items-start gap-2">
                            <img src={TicketPurple} alt="" className="bg-[rgba(241,234,255,1)] p-2 rounded-xl flex w-fit" />
                            <div className="flex w-full flex-col">
                                <div className="flex justify-between font-semibold text-sm">
                                    <span>SECTION VIP, ROW 2</span>
                                    <span>$35</span>
                                </div>
                                <div className="flex justify-between text-xs text-[rgba(189,192,196,1)]">
                                    <span>12 Seats available</span>
                                    <span>per person</span>
                                </div>
                                <div className="flex items-center mt-2 justify-between text-xs font-semibold">
                                    <div>Quantity</div>
                                    <div className="flex gap-4 items-center">
                                        <button onClick={min2} className="w-[32px] h-[32px] border rounded-lg text-xl text-[rgba(193,197,208,1)]">-</button>
                                        <span>{numb2}</span>
                                        <button onClick={plus2} className="w-[32px] h-[32px] border rounded-lg text-xl text-[rgba(193,197,208,1)]">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full items-start gap-2">
                            <img src={TicketPurple} alt="" className="bg-[rgba(241,234,255,1)] p-2 rounded-xl flex w-fit" />
                            <div className="flex w-full flex-col">
                                <div className="flex justify-between font-semibold text-sm">
                                    <span>SECTION VVIP, ROW 3</span>
                                    <span>$50</span>
                                </div>
                                <div className="flex justify-between text-xs text-[rgba(189,192,196,1)]">
                                    <span>12 Seats available</span>
                                    <span>per person</span>
                                </div>
                                <div className="flex items-center mt-2 justify-between text-xs font-semibold">
                                    <div>Quantity</div>
                                    <div className="flex gap-4 items-center">
                                        <button onClick={min3} className="w-[32px] h-[32px] border rounded-lg text-xl text-[rgba(193,197,208,1)]">-</button>
                                        <span>{numb3}</span>
                                        <button onClick={plus3} className="w-[32px] h-[32px] border rounded-lg text-xl text-[rgba(193,197,208,1)]">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="flex flex-col font-semibold text-sm gap-4">
                            <div className="flex justify-between">
                                <span>Ticket Section</span>
                                <span className="text-[rgba(51,102,255,1)]">{dataSection}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Quantity</span>
                                <span className="text-[rgba(51,102,255,1)]">{numb+numb2+numb3?numb+numb2+numb3:'-'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Total Payment</span>
                                <span className="text-[rgba(51,102,255,1)]">{(numb*15)+(numb2*35)+(numb3*50)?'$'+((numb*15)+(numb2*35)+(numb3*50)):'-'}</span>
                            </div>
                        </div>
                        <div className='flex justify-center mt-4'>
                        <Link to='/payment'>
                            <button className='bg-[rgba(51,102,255,1)] w-[315px] h-[55px] rounded-xl text-white font-semibold'>Checkout</button>
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