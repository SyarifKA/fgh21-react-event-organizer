import React from "react";
import NavbarProfile from "../components/NavbarProfile"
import Avatar from '../assets/images/navbar-avatar.png'
import LogoProfile from '../assets/images/profile-logo.png'
import LogoCard from '../assets/images/card-grey.png'
import LogoEdit from '../assets/images/profile-edit.png'
import LogoPass from '../assets/images/profile-change.png'
import LogoBooking from '../assets/images/booking-logo.png'
import LogoWishlistBlue from '../assets/images/wishlist-logo-blue.png'
import LogoSetting from '../assets/images/setting-logo.png'
import LogoLogout from '../assets/images/exit-logo.png'
import HeartButtonBlue from '../assets/images/heart-icon-blue.png'
import FooterMain from "../components/Footer"

function MyWishlist() {
    return (
        <div className="flex flex-col gap-24">
            <NavbarProfile />
            <div className="flex mt-36 mx-[70px]">
                <div className="flex flex-col w-[30%] gap-6 text-sm">
                    <div className="flex gap-2 items-center">
                        <div>
                            <button className='h-[55px] w-[55px] flex justify-center items-center rounded-full overflow-hidden border border-2'>
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
                    <div className="flex gap-2 items-center ml-8">
                        <img src={LogoEdit} alt="" />
                        <div>Edit Profile</div>
                    </div>
                    <div className="flex gap-2 items-center ml-8">
                        <img src={LogoPass} alt="" />
                        <div>Change Password</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={LogoBooking} alt="" />
                        <div>My Booking</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={LogoWishlistBlue} alt="" />
                        <div className="text-[rgba(51,102,255,1)]">My Wishlist</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={LogoSetting} alt="" />
                        <div>Settings</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={LogoLogout} alt="" />
                        <div className="text-[rgba(240,56,0,1)]">Settings</div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-[70%] bg-white p-12 rounded-3xl">
                    <div className="flex justify-between">
                        <div className="text-xl font-semibold">My Wishlist</div>
                    </div>
                    <div>
                        <div className="flex gap-2 border-b py-[25px]">
                            <button className="bg-white shadow-md w-[50px] h-[75px] rounded-xl flex flex-col justify-center items-center shadow-[rgba(35,41,54,0.04)]">
                                <span className="text-[rgba(255,137,0,1)] font-semibold text-sm">15</span>
                                <span className="text-[rgba(193,197,208,1)] text-xs">Wed</span>
                            </button>
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex justify-between">
                                    <div className="text-[rgba(55,58,66,1)] text-2xl font-semibold">Sights & Sounds Exhibition</div>
                                    <img src={HeartButtonBlue} alt="" />
                                </div>
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
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex justify-between">
                                    <div className="text-[rgba(55,58,66,1)] text-2xl font-semibold">Sights & Sounds Exhibition</div>
                                    <img src={HeartButtonBlue} alt="" />
                                </div>
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
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex justify-between">
                                    <div className="text-[rgba(55,58,66,1)] text-2xl font-semibold">Sights & Sounds Exhibition</div>
                                    <img src={HeartButtonBlue} alt="" />
                                </div>
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
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex justify-between">
                                    <div className="text-[rgba(55,58,66,1)] text-2xl font-semibold">Sights & Sounds Exhibition</div>
                                    <img src={HeartButtonBlue} alt="" />
                                </div>
                                <div className="text-[rgba(55,58,66,0.75)] text-xs">Jakarta, Indonesia</div>
                                <div className="text-[rgba(55,58,66,0.75)] text-xs">Wed, 15 Nov, 4:00 PM</div>
                                <div className="text-xs text-[rgba(51,102,255,1)]">Detail</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterMain />
        </div>
    )
}

export default MyWishlist