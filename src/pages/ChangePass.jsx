import React from "react";
import { useState } from "react";
import FooterMain from "../components/Footer";
import { Link, ScrollRestoration} from "react-router-dom"
import { IoEyeOutline } from "react-icons/io5";
import NavbarHome from "../components/NavbarHome";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { useFormik } from "formik";
import * as yup from "yup"

function ChangePass() {
    const [reveal, setReveal] = useState('password')
    function revealPassword() {
    if (reveal === 'password') {
        setReveal('text')
    } else {
            setReveal('password')
        }
    }
    const token = useSelector((state) => state.auth.token)


    const formik = useFormik({
        onSubmit: changePassword,
          initialValues: {
            oldPass : "",
            currPass: "",
            confirmPass: "",      
          },    
          validationSchema: yup.object().shape({
            oldPass: yup.string().required('Please Enter your password min. 8 character').min(8),
            currPass: yup.string().required('Please Enter your password min. 8 character').min(8),
            confirmPass: yup.string().required('Please Enter your password min. 8 character').min(8),
          })  
      })
      async function changePassword() {
      const oldPass = formik.values.oldPass
      const currPass = formik.values.currPass
      const confirmPass = formik.values.confirmPass

      const data = new URLSearchParams()
      data.append("oldPassword", oldPass)
      data.append("newPassword", currPass)
      data.append("confirmPassword", confirmPass)
      await fetch("http://localhost:8888/users", {
        headers: {
                    Authorization: 'Bearer '+token
                },
        method: "PATCH",
        body: data,
      })
    } 
    return (
        <div className="flex flex-col gap-24">
            <NavbarHome />
            <div className="flex mt-36 mx-[70px]">
                <Sidebar/>
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 w-full md:w-[70%] bg-white pb-[300px] p-12 rounded-3xl">
                    <div className="text-xl font-semibold">Change Password</div>
                    <div className="flex w-full gap-6 flex-col text-sm">
                        <div className="flex w-full justify-between items-center">
                            <label htmlFor="oldPass" className="w-1/3">Old Password</label>
                            <div className='flex w-2/3 items-center relative'>
                            <input type={reveal} onChange={formik.handleChange} name="oldPass" id="oldPass" placeholder="Input Old Password ..." className="w-full rounded-xl pl-2 border h-[50px]"/>
                            <button type='button' className='absolute right-6 text-2xl' onClick={revealPassword}> <IoEyeOutline /></button>
                            </div>
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <label htmlFor="currPass" className="w-1/3">New Password</label>
                            <div className='flex w-2/3 items-center relative'>
                            <input type={reveal} onChange={formik.handleChange} name="currPass" id="currPass" placeholder="Input Old Password ..." className="w-full rounded-xl pl-2 border h-[50px]"/>
                            <button type='button' className='absolute right-6 text-2xl' onClick={revealPassword}> <IoEyeOutline /></button>
                            </div>
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <label htmlFor="confirmPass" className="w-1/3">Confirm Password</label>
                            <div className='flex w-2/3 items-center relative'>
                            <input type={reveal} onChange={formik.handleChange} name="confirmPass" id="confirmPass" placeholder="Input Old Password ..." className="w-full rounded-xl pl-2 border h-[50px]"/>
                            <button type='button' className='absolute right-6 text-2xl' onClick={revealPassword}> <IoEyeOutline /></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="w-3/5 bg-[rgba(51,102,255,1)] py-4 text-white rounded-2xl font-semibold">Update</button>
                    </div>
                </form>
            </div>
            <FooterMain />
            <ScrollRestoration/>
        </div>
    )
}

export default ChangePass