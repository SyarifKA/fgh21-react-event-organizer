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
            <button onClick={setProfileNull} className="flex gap-2 items-center">
                <img src={LogoLogout} alt="" />
                <div className="text-[rgba(240,56,0,1)]">Logout</div>
            </button>
    </div>
    )
}

export default Sidebar