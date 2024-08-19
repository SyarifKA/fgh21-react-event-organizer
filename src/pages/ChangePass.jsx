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
import { Link } from "react-router-dom"
import NavbarHome from "../components/NavbarHome";

function ChangePass() {
    return (
        <div className="flex flex-col gap-24">
            <NavbarHome />
            <div className="flex mt-36 mx-[70px]">
                <div className="md:flex flex-col hidden md:w-[30%] gap-6 text-sm">
                    <div className="flex gap-2 items-center">
                        <div>
                            <button className='h-[55px] w-[55px] flex justify-center items-center rounded-full overflow-hidden border border-[rgba(51,102,255,1)] border-2'>
                                <img src={Avatar} alt="" className='h-[44px] w-[44px] rounded-full'/>
                            </button>
                        </div>
                        <div>
                            <div className="font-semibold text-sm">Jhon Tomson</div>
                            <div className="text-[rgba(55,58,66,0.75)] text-xs">Entrepreneur, ID</div>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={LogoProfile} alt="" />
                        <div>Profile</div>
                    </div>
                    <div className="flex gap-2 items-center ml-8">
                        <img src={LogoCard} alt="" />
                        <div>Card</div>
                    </div>
                    <Link to='/profile'>
                    <div className="flex gap-2 items-center ml-8">
                        <img src={LogoEdit} alt="" />
                        <div>Edit Profile</div>
                    </div>
                    </Link>
                    <Link to='/changePassword'>
                    <div className="flex gap-2 items-center ml-8">
                        <img src={LogoPassBlue} alt="" />
                        <div className="text-[rgba(51,102,255,1)]">Change Password</div>
                    </div>
                    </Link>
                    <Link to='/myBooking'>
                    <div className="flex gap-2 items-center">
                        <img src={LogoBooking} alt="" />
                        <div>My Booking</div>
                    </div>
                    </Link>
                    <Link to='/myWishlist'>
                    <div className="flex gap-2 items-center">
                        <img src={LogoWishlist} alt="" />
                        <div>My Wishlist</div>
                    </div>
                    </Link>
                    <div className="flex gap-2 items-center">
                        <img src={LogoSetting} alt="" />
                        <div>Settings</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={LogoLogout} alt="" />
                        <div className="text-[rgba(240,56,0,1)]">Logout</div>
                    </div>
                </div>
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
        </div>
    )
}

export default ChangePass