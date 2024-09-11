import React from "react";
import NavbarHome from "../components/NavbarHome"
import FooterMain from "../components/Footer"
import CreatePopUp from '../components/CreatePopUp'
import { Link, ScrollRestoration } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProfile } from "../redux/reducers/profile";
import { authLogout } from "../redux/reducers/auth";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import dateFormat from "dateformat";

function CreateEvent() {
    const [show, setShow] = React.useState(false)
    function showPopUp() {
        setShow(!show)
    }
    const dataEvent = useSelector((state) => state.event.listEvent);
    console.log(dataEvent)
    return (
        <div className="flex flex-col gap-24">
            <NavbarHome />
            <div className="flex mt-36 mx-[70px]">
                <Sidebar/>
                <div className="flex flex-col gap-6 w-full md:w-[80%] bg-white p-12 rounded-3xl">
                    <div className="flex md:flex-row flex-col md:gap-2 gap-0 justify-between">
                        <div className="text-xl font-semibold">Manage Event</div>
                        <button onClick={showPopUp} className="flex bg-[#E4F9FF] p-[13px] text-[rgba(51,102,255,1)] rounded-xl justify-center">Create</button>
                    </div>
                    <table>
                        {dataEvent.map((item)=>{
                              const dateEvent = dateFormat(item.date)
                              const weekday = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"]
                              const day = new Date(item.date)
                              const date = day.getDate()
                              const dayEvent = weekday[day.getDay()]
                            return(
                                <tr className="flex gap-2 border-b py-[25px]">
                                    <button className="bg-white shadow-md w-[50px] h-[75px] rounded-xl flex flex-col justify-center items-center shadow-[rgba(35,41,54,0.04)]">
                                        <span className="text-[rgba(255,137,0,1)] font-semibold text-sm">{date}</span>
                                        <span className="text-[rgba(193,197,208,1)] text-xs">{dayEvent}</span>
                                    </button>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-[rgba(55,58,66,1)] text-2xl font-semibold">{item.title}</div>
                                        <div className="text-[rgba(55,58,66,0.75)] text-xs">Jakarta, Indonesia</div>
                                        <div className="text-[rgba(55,58,66,0.75)] text-xs">{dateEvent}</div>
                                        <div className="text-xs text-[rgba(51,102,255,1)]">Detail</div>
                                    </div>
                                </tr>
                            )
                        })}
                        {/* <div className="flex gap-2 border-b py-[25px]">
                            <button className="bg-white shadow-md w-[50px] h-[75px] rounded-xl flex flex-col justify-center items-center shadow-[rgba(35,41,54,0.04)]">
                                <span className="text-[rgba(255,137,0,1)] font-semibold text-sm">15</span>
                                <span className="text-[rgba(193,197,208,1)] text-xs">Wed</span>
                            </button>
                            <div className="flex flex-col gap-2">
                                <div className="text-[rgba(55,58,66,1)] text-2xl font-semibold">Sights & Sounds Exhibition</div>
                                <div className="text-[rgba(55,58,66,0.75)] text-xs">Jakarta, Indonesia</div>
                                <div className="text-[rgba(55,58,66,0.75)] text-xs">Wed, 15 Nov, 4:00 PM</div>
                                <div className="text-xs text-[rgba(51,102,255,1)]">Detail</div>
                            </div>
                        </div>
                        <div className="flex gap-2 border-b py-[25px]">
                            <button className="bg-white shadow-md w-[50px] h-[75px] rounded-xl flex flex-col justify-center items-center shadow-[rgba(35,41,54,0.04)]">
                                <span className="text-[rgba(255,137,0,1)] font-semibold text-sm">15</span>
                                <span className="text-[rgba(193,197,208,1)] text-xs">Wed</span>
                            </button>
                            <div className="flex flex-col gap-2">
                                <div className="text-[rgba(55,58,66,1)] text-2xl font-semibold">Sights & Sounds Exhibition</div>
                                <div className="text-[rgba(55,58,66,0.75)] text-xs">Jakarta, Indonesia</div>
                                <div className="text-[rgba(55,58,66,0.75)] text-xs">Wed, 15 Nov, 4:00 PM</div>
                                <div className="text-xs text-[rgba(51,102,255,1)]">Detail</div>
                            </div>
                        </div>
                        <div className="flex gap-2 py-[25px]">
                            <button className="bg-white shadow-md w-[50px] h-[75px] rounded-xl flex flex-col justify-center items-center shadow-[rgba(35,41,54,0.04)]">
                                <span className="text-[rgba(255,137,0,1)] font-semibold text-sm">15</span>
                                <span className="text-[rgba(193,197,208,1)] text-xs">Wed</span>
                            </button>
                            <div className="flex flex-col gap-2">
                                <div className="text-[rgba(55,58,66,1)] text-2xl font-semibold">Sights & Sounds Exhibition</div>
                                <div className="text-[rgba(55,58,66,0.75)] text-xs">Jakarta, Indonesia</div>
                                <div className="text-[rgba(55,58,66,0.75)] text-xs">Wed, 15 Nov, 4:00 PM</div>
                                <div className="text-xs text-[rgba(51,102,255,1)]">Detail</div>
                            </div>
                        </div> */}
                    </table>
                </div>
            </div>
            <FooterMain />
            {show?<CreatePopUp />:''}
            <ScrollRestoration/>
        </div>
    )
}

export default CreateEvent