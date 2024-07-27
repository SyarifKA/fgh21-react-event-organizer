import React from 'react'
import Character from '../assets/images/character.png'
import LogoWetick from '../components/LogoWetick'
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";

function SignUpPage() {
    const navigate = useNavigate()
    function processLogin(e) {
        e.preventDefault()
        const name = e.target.username.value
        const email = e.target.email.value
        const password = e.target.password.value
        if (name === 'syarif' && email === 'syarif@gmail.com' && password === '123') {
            window.alert('Login berhasil')
            navigate('/')
        } else {
            window.alert('Data yang Anda masukkan salah')
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
            <div className='md:flex justify-center hidden items-center bg-[#045CFE] md:w-3/5'>
                <img src={Character} alt="" />
            </div>
            <div className='flex flex-col gap-4 w-full md:w-2/5  pt-8 px-24'>
                <LogoWetick />
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-semibold'>Sign Up</h1>
                    <h3 className='text-[rgba(55,58,66,1)] text-sm font-normal'>Already have an account?<span className='text-[#045CFE]'> Log In</span></h3>
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
                                <input type={reveal} name='password' placeholder='Confirm Password' className='w-full border-solid border-2 border-[rgba(193,197,208,1)] rounded-lg pl-3 h-[50px]' />
                                <button type='button' className='absolute right-6 text-2xl' onClick={revealPassword}> <IoEyeOutline /></button>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id='accept' />
                            <label htmlFor="accept">Accept terms and condition</label>
                        </div>
                    </div>
                    <div className='flex mt-4'>
                        <button className='w-full h-[55px] bg-[rgba(51,102,255,1)] rounded-xl text-white font-semibold text-base shadow-md shadow-[rgba(35,149,255,0.3)]'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage