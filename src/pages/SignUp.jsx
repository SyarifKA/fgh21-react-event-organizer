import React from 'react'
import Character from '../assets/images/ticket-event.png'
import LogoWetick from '../components/LogoWetick'
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5"
import { Link } from 'react-router-dom'

function SignUpPage() {
    const navigate = useNavigate()
    const [message, setMessage] = React.useState('')
    const [popUp, setPopUp] = React.useState('')
    async function processLogin(e) {
    e.preventDefault()
    const fullName = e.target.username.value
    const email = e.target.email.value
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value
                
    const data = new URLSearchParams()
    data.append('fullName', fullName)
    data.append('email', email)
    data.append('password', password)
    data.append('cPassword', confirmPassword)
    
    const response = await fetch('http://localhost:8888/auth/register', {
        method: 'POST',
        body: data
    })
        
    const dataResponse = await response.json()
    setPopUp(dataResponse.succes)
    if (dataResponse.succes) {
        navigate('/login')
        // window.alert(dataResponse.message)
        setMessage(dataResponse.message)
        e.currentTarget.reset()
    } else {
        setMessage(dataResponse.message)
        // window.alert(dataResponse.message)
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
        <div className='flex h-screen'>
            <div className='md:flex justify-center hidden items-center bg-[#12CAD6] md:w-3/5'>
                <img src={Character} alt="" />
            </div>
            <div className='flex flex-col gap-4 w-full md:w-2/5  pt-8 px-24'>
                <LogoWetick />
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-semibold'>Sign Up</h1>
                    <h3 className='text-[rgba(55,58,66,1)] text-sm font-normal'>Already have an account?<span className='text-[#045CFE]'>
                        <Link to="/login">
                        Log In
                        </Link>
                    </span></h3>
                    {popUp ? <div className='w-full h-fit rounded-lg text-green-500'>{message}</div> : <div className='w-full h-fit rounded-lg text-red-500'>{message}</div>}
                </div>
                <form onSubmit={processLogin}>
                    <div className='flex flex-col gap-4'>
                        <input type="text" name='username' placeholder='Fullname' className='border-solid border-2 border-[rgba(193,197,208,1)] rounded-lg pl-3 h-[50px]'/>
                        <input type="email" name='email' placeholder='Email' className='border-solid border-2 border-[rgba(193,197,208,1)] rounded-lg pl-3 h-[50px]' />
                        <div className='flex items-center relative'>        
                                <input type={reveal} name='password' placeholder='Password' className='w-full border-solid border-2 border-[rgba(193,197,208,1)] rounded-lg pl-3 h-[50px]' />
                                <button type='button' className='absolute right-6 text-2xl' onClick={revealPassword}> <IoEyeOutline /></button>
                        </div>
                        <div className='flex items-center relative'>        
                                <input type={reveal} name='confirmPassword' placeholder='Confirm Password' className='w-full border-solid border-2 border-[rgba(193,197,208,1)] rounded-lg pl-3 h-[50px]' />
                                <button type='button' className='absolute right-6 text-2xl' onClick={revealPassword}> <IoEyeOutline /></button>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id='accept' />
                            <label htmlFor="accept">Accept terms and condition</label>
                        </div>
                    </div>
                    <div className='flex mt-4'>
                        <button type='onSubmit' className='w-full h-[55px] bg-[rgba(51,102,255,1)] rounded-xl text-white font-semibold text-base shadow-md shadow-[rgba(35,149,255,0.3)]'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage