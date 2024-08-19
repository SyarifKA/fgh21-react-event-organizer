import React from "react"
import NavbarProfile from "../components/NavbarProfile"
import NavbarHome from "../components/NavbarHome"
import Seat from '../assets/images/seat.png'
import TicketSection from "../components/TicketSection"
import FooterMain from "../components/Footer"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams} from "react-router-dom"

function OrderTickets() {
    const setCursor = React.useRef()
    const id = useParams()
    const [ticket, setTicket] = useState([])
    
    async function getData() {
        const endPoint = 'http://localhost:8888/events/section/' + id.id
        const response = await fetch(endPoint);
        const data = await response.json()
        const listData = data.results
        console.log(listData)
        setTicket(listData)
    }
    
    useEffect(() => {
        getData()
    }, [])

    const selectedSections = useSelector((state) => state.sectionSelector.selected)
    const ticketSection = selectedSections.reduce((prev, curr) => {
        const arr = prev
        console.log(curr)
        if (curr.quantity != 0) {
            arr.push(curr.name+`(${curr.quantity})`)
        }
        return arr
    },[])
    const quantity = selectedSections.reduce((prev, curr) => prev + curr.quantity, 0)
    const totalPrice = selectedSections.reduce((prev, curr) => prev + curr.price, 0)

    return (
        <div className="flex flex-col gap-24">
            <NavbarHome />
            <div className='bg-white mx-[120px] flex flex-col md:flex-row mt-36 gap-2 md:gap-4 rounded-3xl'>
                <div className="flex justify-center items-center w-full md:w-1/2">
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
                        {ticket.map((item) => {
                            return (
                                <TicketSection data={item} />
                            )
                        })}
                        <hr />
                        <div className="flex flex-col font-semibold text-sm gap-4">
                            <div className="flex justify-between">
                                <span>Ticket Section</span>
                                <span className="text-[#0FABBC]"></span>
                                <span className="text-[#0FABBC]">{ticketSection.length != 0?ticketSection.join(', '):'-'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Quantity</span>
                                <span className="text-[#0FABBC]">{quantity === 0?"-":quantity}</span>
                                {/* <span className="text-[#0FABBC]">{numb+numb2+numb3?numb+numb2+numb3:'-'}</span> */}
                            </div>
                            <div className="flex justify-between">
                                <span>Total Payment</span>
                                <span className="text-[#0FABBC]">{totalPrice ===0?"-":`Rp`+totalPrice.toLocaleString('id')}</span>
                                {/* <span className="text-[#0FABBC]">{(numb*15)+(numb2*35)+(numb3*50)?'$'+((numb*15)+(numb2*35)+(numb3*50)):'-'}</span> */}
                            </div>
                        </div>
                        <div className='flex justify-center mt-4'>
                        <Link to='/payment'>
                            <button className='shadow-md shadow-[#E4F9FF] bg-[#0FABBC] w-[315px] h-[55px] rounded-xl text-white font-semibold'>Checkout</button>
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