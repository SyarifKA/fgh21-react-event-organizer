import React from "react";
import NavbarHome from "../components/NavbarHome"
import Avatar from '../assets/images/navbar-avatar.png'
import LogoProfile from '../assets/images/profile-logo.png'
import LogoCard from '../assets/images/card-grey.png'
import LogoEditBlue from '../assets/images/profile-edit-blue.png'
import LogoPass from '../assets/images/profile-change.png'
import LogoBooking from '../assets/images/booking-logo.png'
import LogoWishlist from '../assets/images/wishlist-logo.png'
import LogoSetting from '../assets/images/setting-logo.png'
import LogoLogout from '../assets/images/exit-logo.png'
import NavDown from '../assets/images/chevron-down.png'
import FooterMain from "../components/Footer"
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import dateFormat from 'dateformat';
import { authLogout } from "../redux/reducers/auth";
import { deleteProfile } from "../redux/reducers/profile";

function Profile() {
    const nav = useNavigate()
    const profile = useSelector((state) => state.profile.data)
    console.log(profile)
    const token = useSelector((state) => state.auth.token)
    const [job, setJob] = useState([])
    const [nationality, setNationality] = useState([])
    const date = new Date(profile.birthdayDate);
    const futureDate = date.getDate() + 3;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString('en-CA');
    const dispatch = useDispatch()
    function setProfileNull() {
        dispatch(deleteProfile(null))
        dispatch(authLogout(null))
        nav("/login")
    }

    useEffect(() => {
        (async () => {
            const response = await fetch('https://wsw6zh-8888.csb.app/profile/professions', {
                headers: {
                    Authorization: 'Bearer '+token
                }
            })
            const data = await response.json()
            const dataUser = data.results
            console.log(dataUser)
            setJob(dataUser)
        })(),
        (async () => {
             const nationality = await fetch('http://localhost:8888/nationalities', {
                headers: {
                    Authorization: 'Bearer '+token
                }
            })
            const dataNationality = await nationality.json()
            const nations = dataNationality.results
            console.log(nations)
            setNationality(nations)
        })(),
        window.scrollTo(0, 0)
    }, [])

    async function updateProfile(e) {
        e.preventDefault()
        const username = e.target.username.value
        const phoneNumber = e.target.phoneNumber.value
            
        // setShowLoading(true)
                    
        const data = new URLSearchParams()
        data.append('username', username)
        data.append('phoneNumber', phoneNumber)
        
        const response = await fetch('http://localhost:8888/profile', {
            method: 'PATCH',
            headers: {
                Authorization: 'Bearer '+token
            },
            body: data
        })
        const uploadData = await response.json()
        // console.log(uploadData.results.token)
        // setPopUp(uploadData.succes)
        // if (uploadData.succes == true) {
        //     const dataToken = uploadData.results.token
        //     console.log(dataToken)
        //     dispatch(authLogin(dataToken))
            
        //     const profile = await fetch('http://localhost:8888/profile', {
        //         headers: {
        //             Authorization: 'Bearer ' + dataToken
        //         }
        //     })
        //     const dataProfile = await profile.json()
        //     console.log(dataProfile)
        //     dispatch(addProfile(dataProfile))
        //     nav('/')
        //     setMessage(uploadData.message)
        // } else {
        //     setShowLoading(false)
        //     // setShowAlert(true)
        //     setMessage(uploadData.message)
        //     // return uploadData.message
        // }
    }
    return (
        <div className="flex flex-col gap-24">
            <NavbarHome />
            <div className="flex mt-36 mx-[70px]">
                <div className="md:flex flex-col hidden md:w-[30%] gap-6 text-sm">
                    <div className="flex gap-2 items-center">
                        <div>
                            <button className='h-[55px] w-[55px] flex justify-center items-center rounded-full overflow-hidden border border-[#0FABBC] border-2'>
                                <img src={profile.picture} alt="" className='h-[44px] w-[44px] rounded-full'/>
                            </button>
                        </div>
                        <div>
                            <div className="font-semibold text-sm">{profile.fullName}</div>
                            <div className="text-[rgba(55,58,66,0.75)] text-xs">{profile.profession}</div>
                        </div>
                    </div>
                    <Link to='/profile'>
                    <div className="flex gap-2 items-center">
                        <img src={LogoProfile} alt="" />
                        <div>Profile</div>
                    </div>
                    </Link>
                    <div className="flex gap-2 items-center ml-8">
                        <img src={LogoCard} alt="" />
                        <div>Card</div>
                    </div>
                    <Link to='/profile'>
                    <div className="flex gap-2 items-center ml-8">
                        <img src={LogoEditBlue} alt="" />
                        <div className="text-[rgba(51,102,255,1)]">Edit Profile</div>
                    </div>
                    </Link>
                    <Link to='/changePassword'>
                    <div className="flex gap-2 items-center ml-8">
                        <img src={LogoPass} alt="" />
                        <div>Change Password</div>
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
                    {/* <Link to='/login'> */}
                    <button onClick={setProfileNull} className="flex gap-2 items-center">
                        <img src={LogoLogout} alt="" />
                        <div className="text-[rgba(240,56,0,1)]">Logout</div>
                    </button>
                    {/* </Link> */}
                </div>
                <div className="flex flex-col w-full md:w-[70%] bg-white p-12 rounded-3xl">
                    <div className="text-2xl mb-2 font-semibold">Profile</div>
                    <div className="flex md:flex-row flex-col-reverse gap-6">
                        <form onSubmit={updateProfile} className="flex flex-col w-full md:w-2/3 gap-6">
                            <div className="flex w-full justify-between items-center">
                                <label htmlFor="name" className="w-1/2">Name</label>
                                <input type="text" name="name" id="name" value={profile.fullName} className="rounded-xl pl-2 border w-1/2 h-[50px]"/>
                            </div>
                            <div className="flex w-full justify-between">
                                <label className="w-1/2" htmlFor="username">Username</label>
                                <input type="text" name="username" id="username" value={profile.username} className="rounded-xl pl-2 border w-1/2 h-[50px]"/>
                            </div>
                            <div className="flex">
                                <label className="w-1/2" htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" value={profile.email} className="rounded-xl pl-2 border w-1/2 h-[50px]"/>
                                {/* <div className="flex gap-2 w-1/2">
                                    <span>jhont0@mail.com</span>
                                    <span className="text-[rgba(51,102,255,1)]">Edit</span>
                                    </div> */}
                            </div>
                            <div className="flex">
                                <label className="w-1/2" htmlFor="phone">Phone Number</label>
                                <input type="text" name="phoneNumber" id="phone" value={profile.phoneNumber} className="rounded-xl pl-2 border w-1/2 h-[50px]"/>
                                {/* <div className="flex gap-2 w-1/2">
                                    <span>081234567890</span>
                                    <span className="text-[rgba(51,102,255,1)]">Edit</span>
                                </div> */}
                            </div>
                            <div className="flex">
                                <div className="w-1/2">Gender</div>
                                <div className="flex w-1/2 gap-4 items-center">
                                    <div className="flex gap-2">
                                        <input type="radio" name="gender" value='1' defaultChecked={profile.gender === 'Male'? true:false} id="Male" />
                                        <label htmlFor="Male">Male</label>
                                    </div>
                                    <div className="flex gap-2">
                                        <input type="radio" name="gender" value='2' defaultChecked={profile.gender === 'Female' ? true : false} id="Female" />
                                        <label htmlFor="Female">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full items-center">
                                <label htmlFor="profession" className="w-1/2">Profession</label>
                                <div className="w-1/2 relative items-center flex">
                                <select name="" id="profession" className="rounded-xl pl-2 w-full border h-[50px]">
                                        {job.map((item) => {
                                            return (
                                                <option selected={item.name === profile.profession} value={item.name}>{item.name}</option>
                                        )
                                    })}
                                </select>
                                {/* <input type="text" name="name" id="name" placeholder="Entrepreneur" value={profile.profession} className="rounded-xl pl-2 w-full border h-[50px]"/>
                                <img src={NavDown} alt="" className="absolute right-[10px]" /> */}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="name" className="w-1/2">Nationality</label>
                                <div className="w-1/2 relative items-center flex">
                                <select name="" id="nation" className="rounded-xl pl-2 w-full border h-[50px]">
                                        {nationality.map((item) => {
                                            return (
                                                <option selected={item.name === profile.nationality} value={item.name}>{item.name}</option>
                                        )
                                    })}
                                </select>
                                {console.log(profile.nationality)}
                                {/* <input type="text" name="name" id="name" placeholder="Indonesia" value={profile.nationality} className="rounded-xl pl-2 w-full border h-[50px]"/>
                                <img src={NavDown} alt="" className="absolute right-[10px]" /> */}
                                </div>
                            </div>
                            <div className="flex">
                                <label className="w-1/2" htmlFor="birthday">Birthday Date</label>
                                <input type="date" name="name" id="birthday" placeholder="Indonesia" value={defaultValue} className="rounded-xl pl-2 w-full border h-[50px]"/>
                                {/* <div className="w-1/2 flex gap-2">
                                    <span>24 / 10 / 2000</span>
                                    <span className="text-[rgba(51,102,255,1)]">Edit</span>
                                </div> */}
                            </div>
                            <div className='flex justify-center'>
                                <button type="submit" className=' text-white rounded-xl shadow-md shadow-[#E4F9FF] bg-[#0FABBC] w-[80%] h-[55px]'>Save</button>
                            </div>
                        </form>
                        <div className="md:w-1/3 w-full flex flex-col gap-4">
                            <div className="flex justify-center">
                                <button className='h-[137px] w-[137px] flex justify-center items-center rounded-full overflow-hidden border border-[#0FABBC] border-4'>
                                    <img src={profile.picture} alt="" className='h-[110px] w-[110px] rounded-full'/>
                                </button>
                            </div>
                            <div className="md:flex hidden md:w-full justify-center">
                                <button className="w-full h-[40px] rounded-xl border border-[#0FABBC] hover:text-white hover:bg-[#0FABBC] text-[#0FABBC]">Choose Photo</button>
                            </div>
                            <div className="text-sm hidden md:inline text-[rgba(55,58,66,0.75)]">Image size: max, 2 MB</div>
                            <div className="text-sm hidden md:inline text-[rgba(55,58,66,0.75)]">Image formats: .JPG, .JPEG, .PNG</div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterMain />
        </div>
    )
}

export default Profile