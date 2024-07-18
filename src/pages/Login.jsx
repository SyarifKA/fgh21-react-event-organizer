import React from 'react'
import Character from '../assets/images/character.png'
import LogoWetick from '../components/LogoWetick'
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";

function LoginPage() {
    const navigate = useNavigate()
    function processLogin(e) {
        e.preventDefault()
        const name = e.target.username.value
        const email = e.target.email.value
        const password = e.target.password.value
        if (name === 'syarif' && email === 'syarif@gmail.com' && password === '123') {
            navigate('/')
        } else {
            window.alert('Data yang Anda masukkan salah')
        }
    }
    let [reveal, setReveal] = React.useState('password')
    function revealPassword() {
        if (reveal === 'password') {
            setReveal('text')
        } else {
            setReveal('password')
        }
        }

    return (
        <div className='flex h-screen'>
            <div className='flex justify-center items-center bg-[#045CFE] w-3/5'>
                <img src={Character} alt="" />
            </div>
            <div className='flex flex-col gap-4 w-2/5  pt-8 px-24'>
                <LogoWetick />
                <div>
                <h1 className='text-2xl font-semibold'>Sign In</h1>
                <h3 className='text-[rgba(55,58,66,1)] text-sm font-normal'>Hi, Welcome back to Urticket!</h3>
                </div>
                <form onSubmit={processLogin}>
                    <div className='flex flex-col gap-4'>
                    <input type="text" name='username' placeholder='Username' className='border-solid border-2 border-[rgba(193,197,208,1)] rounded-lg pl-3 h-[50px]'/>
                    <input type="email" name='email' placeholder='Email' className='border-solid border-2 border-[rgba(193,197,208,1)] rounded-lg pl-3 h-[50px]' />
                    <div className='flex items-center relative'>        
                            <input type={reveal} name='password' placeholder='Password' className='w-full border-solid border-2 border-[rgba(193,197,208,1)] rounded-lg pl-3 h-[50px]' />
                            <button type='button' className='absolute right-6' onClick={revealPassword}> <IoEyeOutline /></button>
                    </div>
                    </div>
                    <div className='font-semibold text-[rgba(51,102,255,1)] text-right'>Forgot Password?</div>
                    <div className='flex mt-4'>
                        <button className='w-full h-[55px] bg-[rgba(51,102,255,1)] rounded-xl text-white font-semibold text-base shadow-md shadow-[rgba(35,149,255,0.3)]'>Sign In</button>
                    </div>
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