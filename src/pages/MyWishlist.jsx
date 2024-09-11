import React from "react";
import NavbarHome from "../components/NavbarHome"
import HeartButtonBlue from '../assets/images/heart-icon-blue.png'
import FooterMain from "../components/Footer"
import { useSelector, useDispatch } from "react-redux";
import { Link, ScrollRestoration, useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import Sidebar from "../components/Sidebar";
import dateFormat from 'dateformat'

function MyWishlist() {
    const [dataWishlist, setDataWishlist] = useState([])
    const token = useSelector((state) => state.auth.token)
    const id = useParams()
    async function getData() {
        const endPoint = 'http://localhost:8888/wishlist/events'
        const response = await fetch(endPoint, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        const data = await response.json()
        console.log(data)
        const listData = data.results
        setDataWishlist(listData)
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(dataWishlist)
    return (
        <div className="flex flex-col gap-24">
            <NavbarHome />
            <div className="flex mt-36 mx-[70px]">
                <Sidebar/>
                <div className="flex flex-col gap-6 w-[80%] bg-white p-12 rounded-3xl">
                    <div className="flex justify-between">
                        <div className="text-xl font-semibold">My Wishlist</div>
                    </div>
                    <div>
                        {dataWishlist?dataWishlist.map((item, index)=>{
                            const dateEvent = dateFormat(item.date)
                            const weekday = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"]
                            const day = new Date(item.date)
                            const date = day.getDate()
                            const dayEvent = weekday[day.getDay()]
                            return(
                                <div key={index} className="flex gap-4 border-b py-[25px]">
                                    <button className="bg-white shadow-md w-[50px] h-[75px] rounded-xl flex flex-col justify-center items-center shadow-[rgba(35,41,54,0.04)]">
                                        <span className="text-[rgba(255,137,0,1)] font-semibold text-sm">{date}</span>
                                        <span className="text-[rgba(193,197,208,1)] text-xs">{dayEvent}</span>
                                    </button>
                                    <div className="flex w-full flex-col gap-2">
                                        <div className="flex justify-between">
                                            <div className="text-[rgba(55,58,66,1)] text-2xl font-semibold">{item.title}</div>
                                            <img src={HeartButtonBlue} alt="" />
                                        </div>
                                        <div className="text-[rgba(55,58,66,0.75)] text-xs">Jakarta, Indonesia</div>
                                        <div className="text-[rgba(55,58,66,0.75)] text-xs">{dateEvent}</div>
                                        <div className="text-xs text-[rgba(51,102,255,1)]">Detail</div>
                                    </div>
                                </div>
                            )
                        }):""}
                    </div>
                </div>
            </div>
            <FooterMain />
            <ScrollRestoration/>
        </div>
    )
}

export default MyWishlist