import React from "react"
import NavbarProfile from "../components/NavbarProfile"
import NavbarHome from "../components/NavbarHome"
import Seat from '../assets/images/seat.png'
import TicketSection from "../components/TicketSection"
import FooterMain from "../components/Footer"
import { useEffect, useState } from "react"
import axios from "axios";
// import { addSeat, changeSeat } from "../redux/reducers/sectionSelector"
import {
    addQty,
    addEventId,
    addEventTitle,
    addTotalPayment,
    addTicketSection,
    addSectionId,
    addQuantity,
  } from "../redux/reducers/sectionSelector";
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams, ScrollRestoration, useNavigate} from "react-router-dom"

function OrderTickets() {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const id = useParams().id

    const [selectedSections, setSelectedSections] = useState([]);
    
    // async function getData() {
    //     const endPoint = 'http://localhost:8888/events/section/' + id.id
    //     const response = await fetch(endPoint);
    //     const data = await response.json()
    //     const listData = data.results
    //     setTicket(listData)
    // }

    const endpointSection = "http://103.93.58.89:21215/events/section/" + id;
    const endpointEvent = "http://103.93.58.89:21215/events/" + id;

    const [book, setBook] = useState([]);
    const [section, setSection] = useState([]);
    useEffect(() => {
      (async () => {
        const data = await axios.get(endpointEvent);
        setBook(data.data.results.title);
        console.log(data)
        const sections = await axios.get(endpointSection);
        setSection(sections.data.results);
      })()
    }, []);
    console.log(book)
    
    // useEffect(() => {
    //     getData()
    // }, [])

    const ticketSection = selectedSections.reduce((prev, curr) => {
    const arr = prev
        if (curr.quantity > 0) {
            arr.push(curr.name+`(${curr.quantity})`)
        }
        return arr
    },[])
    const sectionId = selectedSections.reduce((prev, curr) => {
        const arr = prev;
        if (curr.quantity !== 0) {
          arr.push(curr.id);
        }
        return arr;
      }, []);
    const quantity = selectedSections.reduce((prev, curr) => prev + curr.quantity, 0)
    const totalPrice = selectedSections.reduce((prev, curr) => prev + curr.price, 0)
    const quantityArray = selectedSections.reduce((prev, curr) => {
        const arr = prev;
        if (curr.quantity !== 0) {
          arr.push(curr.quantity);
        }
        return arr;
      }, [])
    // console.log(selectedSections)
    // function selected(){
    //     dispatch(changeSeat(selectedSections))
    //     nav("/payment")
    // }

    dispatch(addQty(quantity))
    dispatch(addEventId(id))
    dispatch(addEventTitle(book))
    dispatch(addTotalPayment(totalPrice))
    dispatch(addTicketSection(ticketSection))
    dispatch(addSectionId(sectionId))
    dispatch(addQuantity(quantityArray))
    // const eventTitle = useSelector((state) => state.section.eventTitle);
    // console.log(eventTitle)

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
                        {section.map((item, index) => {
                            return (
                                <TicketSection
                                key={item.id}
                                data={item}
                                index={index}
                                currentData={selectedSections}
                                onChange={setSelectedSections}
                                />
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
                                <span className="text-[#0FABBC]">{quantity > 0?quantity:"-"}</span>
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
            <ScrollRestoration/>
        </div>
    )
}

export default OrderTickets