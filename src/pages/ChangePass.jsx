import React from "react";
import NavbarProfile from "../components/NavbarProfile"
import Avatar from '../assets/images/navbar-avatar.png'
import LogoProfile from '../assets/images/profile-logo.png'
import LogoCard from '../assets/images/card-grey.png'
import LogoEdit from '../assets/images/profile-edit.png'
import LogoPassBlue from '../assets/images/profile-change-blue.png'
import LogoBooking from '../assets/images/booking-logo.png'
import LogoWishlist from '../assets/images/wishlist-logo.png'
import LogoSetting from '../assets/images/setting-logo.png'
import LogoLogout from '../assets/images/exit-logo.png'
import FooterMain from "../components/Footer";
import { Link, ScrollRestoration} from "react-router-dom"
import NavbarHome from "../components/NavbarHome";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";

function ChangePass() {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])
    return (
        <div className="flex flex-col gap-24">
            <NavbarHome />
            <div className="flex mt-36 mx-[70px]">
                <Sidebar/>
                <div className="flex flex-col gap-6 w-full md:w-[70%] bg-white pb-[300px] p-12 rounded-3xl">
                    <div className="text-xl font-semibold">Change Password</div>
                    <div className="flex w-full gap-6 flex-col text-sm">
                        <div className="flex w-full justify-between items-center">
                            <label htmlFor="oldPass" className="w-1/3">Old Password</label>
                            <input type="text" name="name" id="name" placeholder="Input Old Password ..." className="w-2/3 rounded-xl pl-2 border h-[50px]"/>
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <label htmlFor="oldPass" className="w-1/3">New Password</label>
                            <input type="text" name="name" id="name" placeholder="Input New Password ..." className="w-2/3 rounded-xl pl-2 border h-[50px]"/>
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <label htmlFor="oldPass" className="w-1/3">Confirm Password</label>
                            <input type="text" name="name" id="name" placeholder="Input Confirm Password ..." className="w-2/3 rounded-xl pl-2 border h-[50px]"/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-3/5 bg-[rgba(51,102,255,1)] py-4 text-white rounded-2xl font-semibold">Update</button>
                    </div>
                </div>
            </div>
            <FooterMain />
            <ScrollRestoration/>
        </div>
    )
}

export default ChangePass