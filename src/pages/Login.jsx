import React from 'react'
import Character from '../assets/images/character.png'
import LogoWetick from '../components/LogoWetick'
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector} from 'react-redux'
import { authLogin } from '../redux/reducers/auth'
import { addProfile } from '../redux/reducers/profile'
import LoadingPopUp from '../components/Loading'
import CharacterMadura from '../assets/images/madura.png'
import AlertLogin from '../components/AlertLogin'

function LoginPage() {
    const dispatch = useDispatch()
    const [showLoading, setShowLoading] = React.useState(false)
    const [message, setMessage] = React.useState('')
    const [popUp, setPopUp] = React.useState('')
    const nav = useNavigate()

    async function processLogin(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
        
    setShowLoading(true)
                
    const data = new URLSearchParams()
    data.append('email', email)
    data.append('password', password)
    
    const response = await fetch('http://localhost:8888/auth/login', {
        method: 'POST',
        body: data
    })
    const uploadData = await response.json()
    // console.log(uploadData.results.token)
    setPopUp(uploadData.succes)
    if (uploadData.succes == true) {
        const dataToken = uploadData.results.token
        console.log(dataToken)
        dispatch(authLogin(dataToken))
        
        const profile = await fetch('http://localhost:8888/profile', {
            headers: {
                Authorization: 'Bearer ' + dataToken
            }
        })
        const dataProfile = await profile.json()
        console.log(dataProfile)
        dispatch(addProfile(dataProfile))
        nav('/')
        setMessage(uploadData.message)
    } else {
        setShowLoading(false)
        // setShowAlert(true)
        setMessage(uploadData.message)
        // return uploadData.message
    }
}

const [reveal, setReveal] = React.useState('password')
function revealPassword() {
    if (reveal === 'password') {
        setReveal('text')
    } else {
            setReveal('password')
        }
    }

    return (
        <div className='flex h-screen w-full relative'>
            {showLoading ? <LoadingPopUp /> : ''}
            {/* {showAlert?<AlertLogin data={message} />:''} */}
            <div className='md:flex justify-center hidden items-center bg-[#12CAD6] md:w-3/5'>
                {/* <img src={Character} alt="" /> */}
                {/* <img src={CharacterMadura} alt="" className='h-80 w-80' /> */}
            </div>
            <div className='flex flex-col gap-4 w-full md:w-2/5  pt-8 px-24'>
                <Link to="/">
                <LogoWetick />
                </Link>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-semibold'>Sign In</h1>
                    <h3 className='text-[rgba(55,58,66,1)] text-sm font-normal'>Hi, Welcome back to Urticket!</h3>
                </div>
                {popUp ? <div className='w-full h-fit rounded-lg text-green-500'>{message}</div> : <div className='w-full h-fit rounded-lg text-red-500'>{message}</div>}
                <form onSubmit={processLogin}>
                    <div className='flex flex-col gap-4'>
                    <input type="email" name='email' placeholder='Email' className='border-solid border-2 border-[rgba(193,197,208,1)] rounded-lg pl-3 h-[50px]' />
                    <div className='flex items-center relative'>        
                            <input type={reveal} name='password' placeholder='Password' className='w-full border-solid border-2 border-[rgba(193,197,208,1)] rounded-lg pl-3 h-[50px]' />
                            <button type='button' className='absolute right-6 text-2xl' onClick={revealPassword}> <IoEyeOutline /></button>
                    </div>
                    </div>
                    <div className='font-semibold text-[rgba(51,102,255,1)] text-right'>Forgot Password?</div>
                    <div className='flex mt-4'>
                        <button type='submit' className='w-full h-[55px] bg-[#0FABBC] rounded-xl text-white font-semibold text-base shadow-md shadow-[#E4F9FF]'>Sign In</button>
                    </div>
                        <Link to='/signup'>
                    <div className='flex mt-4'>
                        <button type='button' className='w-full h-[55px] bg-white text-black border-2 border-black rounded-xl text-black font-semibold shadow-md shadow-[#E4F9FF]'>Sign Up</button>
                    </div>
                        </Link>
                </form>
                <div className='flex flex-col items-center gap-3'>
                    <div className=''>or sign in with</div>
                    <div className='flex gap-3'>
                        <FcGoogle className='h-[52px] w-[95px] border border-[rgba(51,102,255,1)] rounded-lg  p-2'/>
                        <FaFacebook className='h-[52px] w-[95px] border border-[rgba(51,102,255,1)] rounded-lg  p-2'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage