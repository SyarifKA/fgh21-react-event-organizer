import react from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { authLogout } from "../redux/reducers/auth";
import { deleteProfile } from "../redux/reducers/profile";
import LogoProfile from '../assets/images/profile-logo.png'
import LogoCard from '../assets/images/card-grey.png'
import LogoEditBlue from '../assets/images/profile-edit-blue.png'
import LogoPass from '../assets/images/profile-change.png'
import LogoBooking from '../assets/images/booking-logo.png'
import LogoWishlist from '../assets/images/wishlist-logo.png'
import LogoSetting from '../assets/images/setting-logo.png'
import LogoLogout from '../assets/images/exit-logo.png'
import { CgProfile } from "react-icons/cg";
import { FaCreditCard } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

function Sidebar(){
    const profile = useSelector((state) => state.profile.data)
    const dispatch = useDispatch()
    const nav = useNavigate()

    function setProfileNull() {
        dispatch(deleteProfile(null))
        dispatch(authLogout(null))
        nav("/login")
    }
    return(
        <div className="md:flex flex-col hidden md:w-[20%] gap-6 text-sm">
            <div className="flex gap-2 items-center">
                <div>
                    <button className='h-[55px] w-[55px] flex justify-center items-center rounded-full overflow-hidden border border-[#0FABBC] border-2'>
                        <img src={`${import.meta.env.VITE_local_url}`+profile.picture} alt="" className='h-[44px] w-[44px] rounded-full'/>
                    </button>
                </div>
                <div>
                    <div className="font-semibold text-sm">{profile.fullName}</div>
                    <div className="text-[rgba(55,58,66,0.75)] text-xs">{profile.profession}</div>
                </div>
            </div>
            <Link to='/profile'>
            <div className="flex gap-2 items-center hover:text-[rgba(51,102,255,1)]">
                <CgProfile className="text-2xl text-[#C1C5D0]"/>
                <div>Profile</div>
            </div>
            </Link>
            <div className="flex gap-2 items-center ml-8 hover:text-[rgba(51,102,255,1)] cursor-not-allowed">
                <FaCreditCard className="text-2xl text-[#C1C5D0]"/>
                <s><div>Card</div></s>
            </div>
            <Link to='/profile'>
            <div className="flex gap-2 items-center ml-8 hover:text-[rgba(51,102,255,1)]">
                <AiFillEdit className="text-2xl text-[#C1C5D0]"/>
                <div>Edit Profile</div>
            </div>
            </Link>
            <Link to='/changePassword'>
            <div className="flex gap-2 items-center ml-8 hover:text-[rgba(51,102,255,1)]">
                <RiLockPasswordFill className="text-2xl text-[#C1C5D0]"/>
                <div>Change Password</div>
            </div>
            </Link>
            <Link to='/myBooking'>
            <div className="flex gap-2 items-center hover:text-[rgba(51,102,255,1)]">
                <FaClipboardList className="text-2xl text-[#C1C5D0]"/>
                <div>My Booking</div>
            </div>
            </Link>
            <Link to='/myWishlist'>
            <div className="flex gap-2 items-center hover:text-[rgba(51,102,255,1)]">
                <IoMdHeart className="text-2xl text-[#C1C5D0]"/>
                <div>My Wishlist</div>
            </div>
            </Link>
            <div className="flex gap-2 items-center hover:text-[rgba(51,102,255,1)] cursor-pointer">
                <IoSettingsSharp className="text-2xl text-[#C1C5D0]"/>
                <div>Settings</div>
            </div>
            <button onClick={setProfileNull} className="flex gap-2 items-center text-[rgba(240,56,0,1)]">
                <IoIosLogOut className="text-2xl"/>
                <div>Logout</div>
            </button>
    </div>
    )
}

export default Sidebar