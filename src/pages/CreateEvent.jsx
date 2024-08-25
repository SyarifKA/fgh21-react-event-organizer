import React from "react";
import NavbarHome from "../components/NavbarHome"
import Avatar from '../assets/images/navbar-avatar.png'
import LogoProfile from '../assets/images/profile-logo.png'
import LogoCard from '../assets/images/card-grey.png'
import LogoEdit from '../assets/images/profile-edit.png'
import LogoPass from '../assets/images/profile-change.png'
import LogoBooking from '../assets/images/booking-logo.png'
import LogoWishlist from '../assets/images/wishlist-logo.png'
import LogoCreateBlue from '../assets/images/create-event-blue.png'
import LogoSetting from '../assets/images/setting-logo.png'
import LogoLogout from '../assets/images/exit-logo.png'
import FooterMain from "../components/Footer"
import CreatePopUp from '../components/CreatePopUp'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProfile } from "../redux/reducers/profile";
import { authLogout } from "../redux/reducers/auth";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";

function CreateEvent() {
    const [show, setShow] = React.useState(false)
    function showPopUp() {
        setShow(!show)
    }
    const dispatch = useDispatch()
    function setProfileNull() {
        dispatch(deleteProfile(null))
        dispatch(authLogout(null))
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const profile = useSelector((state) => state.profile.data)
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
                    <div>
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
                        </div>
                    </div>
                </div>
            </div>
            <FooterMain />
            {show?<CreatePopUp />:''}
            
        </div>
    )
}

export default CreateEvent