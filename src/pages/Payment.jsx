import React, { useState } from 'react'
import NavbarHome from '../components/NavbarHome'
import LogoCard from '../assets/images/card.png'
import LogoBank from '../assets/images/bank.png'
import LogoRetail from '../assets/images/market.png'
import NavUp from '../assets/images/chevron-up.png'
import NavDown from '../assets/images/chevron-down.png'
import CardATM from '../assets/images/mastercard.png'
import FooterMain from '../components/Footer'
import { Link, ScrollRestoration, useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import event from '../redux/reducers/event'
import { useFormik } from "formik";
import * as yup from "yup"

function Payment() {
    const token = useSelector((state) => state.auth.token)
    // const [dataEvent, setDataEvent] = useState([])
    const [payment, setPayment] = useState(0)
    const nav = useNavigate()
    const dispatch = useDispatch()

    const eventTitle = useSelector((state) => state.sectionSelector.eventTitle);
    console.log(eventTitle)
    const qty = useSelector((state) => state.sectionSelector.qty);
    const eventId = useSelector((state) => state.sectionSelector.eventId);
    const totalPayment = useSelector((state) => state.sectionSelector.totalPayment);
    const ticketSection = useSelector((state) => state.sectionSelector.ticketSection);
    const sectionId = useSelector((state) => state.sectionSelector.sectionId);
    const quantityArray = useSelector((state) => state.sectionSelector.quantity);
    // console.log(quantityArray)
    // console.log(sectionId)
    // console.log(payment)

    async function transaction(e) {
    e.preventDefault()
    const data = new URLSearchParams()
    data.append("eventId", parseInt(eventId))
    data.append("paymentMethodId", payment)
    data.append("ticketQty[]", quantityArray[0])
    data.append("sectionId[]", sectionId[0])
    // data.append("ticketQty[]", quantityArray[1])
    // data.append("sectionId[]", sectionId[1])
    // data.append("ticketQty[]", quantityArray[1])
    // data.append("sectionId[]", sectionId[2])
    // bagian ini masih tahap penyelesaian, form backend tidak bisa menerima bentuk array
    // sehingga alternatif menggunakan index dari section, bug nya yaitu user harus melakukan transaksi sebanyak 1 section pertransaksi
    const createTransaction = await fetch("http://localhost:8888/transactions", {
      headers: {
                  Authorization: 'Bearer '+token
              },
      method: "POST",
      body: data,
    })
    const response = await createTransaction.json()
    // console.log(response)
    if (response.succes){
        nav('/myBooking')
    }
    } 

    return (
        <div className='flex flex-col gap-24'>
            <NavbarHome />
            <form onSubmit={transaction} className='flex flex-col md:flex-row bg-white mx-[120px] mt-36 rounded-3xl gap-4 md:px-[100px] px-4 py-[70px]'>
                <div className='flex flex-col w-full md:w-1/2 gap-8'>
                    <div className='font-semibold text-xl'>Payment Method</div>
                    <div className='flex flex-col w-full gap-4'>
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex gap-2'>
                                <input type="radio" name='payment' onChange={()=>setPayment(1)} id='card' />
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
                                <input type="radio" name='payment' onChange={()=>setPayment(2)} id='transfer' />
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
                                <input type="radio" name='payment' onChange={()=>setPayment(3)} id='retail' />
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
                                <input type="radio" name='payment' onChange={()=>setPayment(4)} id='emoney' />
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
                            <span className='text-[#0FABBC]'>{eventId === 0 ? "-" : eventTitle}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Ticket Section</span>
                            <span className='text-[#0FABBC]'>{ticketSection.join(', ')}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Quantity</span>
                            <span className='text-[#0FABBC]'>{qty === 0 ? "-" : qty}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Total Payment</span>
                            <span className='text-[#0FABBC]'>Rp{totalPayment.toLocaleString("id")}</span>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        {/* <Link to='/myBooking'> */}
                        <button type='submit' className='shadow-md shadow-[#E4F9FF] bg-[#0FABBC] text-white rounded-xl w-[315px] h-[55px]'>Payment</button>
                        {/* </Link> */}
                    </div>
                </div>
            </form>
            <FooterMain />
            <ScrollRestoration/>
        </div>
    )
}

export default Payment