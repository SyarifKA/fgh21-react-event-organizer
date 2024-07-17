import React from "react";
import NavbarProfile from "../components/NavbarProfile"
import Avatar from '../assets/images/navbar-avatar.png'
import LogoProfile from '../assets/images/profile-logo.png'
import LogoCard from '../assets/images/card-grey.png'
import LogoEdit from '../assets/images/profile-edit.png'
import LogoPass from '../assets/images/profile-change.png'
import LogoBooking from '../assets/images/booking-logo.png'
import LogoWishlist from '../assets/images/wishlist-logo.png'
import LogoSetting from '../assets/images/setting-logo.png'
import LogoLogout from '../assets/images/exit-logo.png'
import NavDown from '../assets/images/chevron-down.png'
import FooterMain from "../components/Footer";

function Profile() {
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
                        <img src={LogoWishlist} alt="" />
                        <div>My Wishlist</div>
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
                <div className="flex flex-col w-[70%] bg-white p-12 rounded-3xl">
                    <div>Profile</div>
                    <div className="flex gap-6">
                        <form className="flex flex-col w-1/2 gap-6">
                            <div className="flex justify-between items-center">
                                <label htmlFor="name" className="">Name</label>
                                <input type="text" name="name" id="name" className="rounded-xl pl-2 border h-[50px]"/>
                            </div>
                            <div className="flex justify-between">
                                <div>Username</div>
                                <div>
                                    <span>@jhont0</span>
                                    <span className="text-[rgba(51,102,255,1)]">Edit</span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>Email</div>
                                <div>
                                    <span>jhont0@mail.com</span>
                                    <span className="text-[rgba(51,102,255,1)]">Edit</span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>Phone Number</div>
                                <div>
                                    <span>081234567890</span>
                                    <span className="text-[rgba(51,102,255,1)]">Edit</span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>Gender</div>
                                <div className="flex items-center">
                                    <div>
                                        <input type="radio" name="gender" id="male" />
                                        <label htmlFor="male">Male</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="gender" id="female" />
                                        <label htmlFor="female">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center relative">
                                <label htmlFor="name" className="">Profession</label>
                                <input type="text" name="name" id="name" placeholder="Entrepreneur" className="rounded-xl pl-2 border h-[50px]"/>
                                <img src={NavDown} alt="" className="absolute right-[10px]" />
                            </div>
                            <div className="flex justify-between items-center relative">
                                <label htmlFor="name" className="">Nationality</label>
                                <input type="text" name="name" id="name" placeholder="Indonesia" className="rounded-xl pl-2 border h-[50px]"/>
                                <img src={NavDown} alt="" className="absolute right-[10px]" />
                            </div>
                            <div className="flex justify-between">
                                <div>Birthday Date</div>
                                <div>
                                    <span>24 / 10 / 2000</span>
                                    <span className="text-[rgba(51,102,255,1)]">Edit</span>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button className=' text-white rounded-xl bg-[rgba(51,102,255,1)] w-[80%] h-[55px]'>Payment</button>
                            </div>
                        </form>
                        <div className="w-1/2 flex flex-col gap-4">
                            <div className="flex justify-center">
                                <button className='h-[137px] w-[137px] flex justify-center items-center rounded-full overflow-hidden border border-2'>
                                    <img src={Avatar} alt="" className='h-[110px] w-[110px] rounded-full'/>
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <button className="w-full h-[40px] rounded-xl border border-[rgba(51,102,255,1)] text-[rgba(51,102,255,1)]">Choose Photo</button>
                            </div>
                            <div className="text-sm text-[rgba(55,58,66,0.75)]">Image size: max, 2 MB</div>
                            <div className="text-sm text-[rgba(55,58,66,0.75)]">Image formats: .JPG, .JPEG, .PNG</div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterMain />
        </div>
    )
}

export default Profile