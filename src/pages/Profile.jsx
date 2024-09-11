import React from "react";
import NavbarHome from "../components/NavbarHome"
import Avatar from '../assets/images/navbar-avatar.png'
import FooterMain from "../components/Footer"
import { Link, useNavigate, ScrollRestoration} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import dateFormat from 'dateformat';
import Sidebar from "../components/Sidebar";
import { addProfile } from "../redux/reducers/profile";
import { useFormik } from "formik";
import * as yup from "yup"

function Profile() {
    const profile = useSelector((state) => state.profile.data)
    console.log(profile)
    const [nationalities, setNationalities] = useState(0)
    const [gender, setGender] = useState(profile.gender)
    const [imagePreview, setImagePreview] = useState(null);
    const token = useSelector((state) => state.auth.token)
    // const [job, setJob] = useState([])
    const [nationality, setNationality] = useState([])
    const date = new Date(profile.birthdayDate)
    const futureDate = date.getDate() + 3;
    date.setDate(futureDate);
    const dispatch = useDispatch()
    const defaultValue = date.toLocaleDateString('en-CA');

    async function getNationalities() {
         const nationality = await fetch('http://localhost:8888/nationalities', {
            headers: {
                Authorization: 'Bearer '+token
            }
        })
        const dataNationality = await nationality.json()
        const nations = dataNationality.results
        console.log(nations)
        setNationality(nations)
    }

    const formik = useFormik({
        onSubmit: updateProfile,
          initialValues: {
            fullName: profile.fullName,
            username: profile.username,
            email: profile.email,
            phoneNumber: profile.phoneNumber,
            gender: profile.gender,
            profession: profile.profession,  
          },    
          validationSchema: yup.object().shape({
            fullName: yup.string().required('Please Enter name').min(3),
            username: yup.string().required('Please Enter username').min(3),
            email: yup.string().required('Please Enter your email').email(),
            gender: yup.string().required('Please Choose your gender'),
            phoneNumber: yup.string().required('Please Enter your Phone Number'),
            profession: yup.string().required('Please Enter your profession'),
          })  
      })
    
    async function updateProfile() {
        const fullName = formik.values.fullName
        const username = formik.values.username
        const email = formik.values.email
        const phoneNumber = formik.values.phoneNumber
        const profession = formik.values.profession
                    
        const data = new URLSearchParams()
        data.append('fullName', fullName)
        data.append('username', username)
        data.append('email', email)
        data.append('phoneNumber', phoneNumber)
        data.append('gender', gender)
        data.append('profession', profession)
        
        const updateProfile = await fetch('http://localhost:8888/profile', {
            method: 'PATCH',
            headers: {
                Authorization: 'Bearer '+token
            },
            body: data
        })    
        const responseProfile = await updateProfile.json()
        if (responseProfile.succes){
            const profile = await fetch('http://localhost:8888/profile/login', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            const dataProfile = await profile.json()
            dispatch(addProfile(dataProfile))
        }
    }

    const [file, setFile] = useState();
    function handlerChange(e) {
        e.preventDefault()
        setFile(e.target.files[0]);
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    async function uploadImage(e){
        e.preventDefault()
        const form = new FormData()
        form.append("profileImg", file)
        const uploadPhoto = await fetch("http://localhost:8888/profile/img", {
        headers: {
                    Authorization: `Bearer ${token}`,
                },
        method: "PATCH",
        body: form,
        })
        const response = await uploadPhoto.json()
        if (response.succes == true) {
            const profile = await fetch('http://localhost:8888/profile/login', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            // console.log(token)
            const dataProfile = await profile.json()
            dispatch(addProfile(dataProfile))
        }
    }
    useEffect(() => {
        getNationalities()
    }, [])
    console.log(nationalities)
    console.log(gender)
      return (
          <div className="flex flex-col gap-24">
            <NavbarHome />
            <div className="flex mt-36 mx-[70px]">
                <Sidebar/>
                <div className="flex flex-col w-full md:w-[80%] bg-white p-12 rounded-3xl">
                    <div className="text-2xl mb-2 font-semibold">Profile</div>
                    <div className="flex md:flex-row flex-col-reverse gap-8">
                        <form onSubmit={formik.handleSubmit} className="flex flex-col w-full md:w-2/3 gap-6">
                            <div className="flex w-full justify-between items-center">
                                <label htmlFor="fullName" className="w-1/2">Name</label>
                                <input type="text" name="fullName" id="fullName" onChange={formik.handleChange} defaultValue={profile.fullName} className="rounded-xl pl-2 border w-full h-[50px]"/>
                                {formik.errors.name && formik.touched.name && (
                                <p className="text-red-500">{formik.errors.name}</p>
                                )}
                            </div>
                            <div className="flex w-full justify-between">
                                <label className="w-1/2" htmlFor="username">Username</label>
                                <div className="flex flex-col w-full">
                                <input type="text" name="username" id="username" onChange={formik.handleChange} defaultValue={profile.username} className="rounded-xl pl-2 border w-full h-[50px]"/>
                                {formik.errors.username && formik.touched.username && (
                                    <p className="text-red-500">{formik.errors.username}</p>
                                )}
                                </div>
                            </div>
                            <div className="flex">
                                <label className="w-1/2" htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" defaultValue={profile.email} className="rounded-xl pl-2 border w-full h-[50px]"/>
                            </div>
                            <div className="flex">
                                <label className="w-1/2" htmlFor="phone">Phone Number</label>
                                <div className="flex flex-col w-full">
                                <input type="number" name="phoneNumber" id="phone" onChange={formik.handleChange} defaultValue={profile.phoneNumber} className="rounded-xl pl-2 border w-full h-[50px]"/>
                                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                    <p className="text-red-500">{formik.errors.phoneNumber}</p>
                                )}
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/2">Gender</div>
                                <div className="flex w-full gap-4 items-center">
                                    <div className="flex gap-2">
                                        <input type="radio" name="gender" defaultValue={profile.gender} onChange={()=>setGender(1)} defaultChecked={profile.gender === 1? true:false} id="Male" />
                                        <label htmlFor="Male">Male</label>
                                    </div>
                                    <div className="flex gap-2">
                                        <input type="radio" name="gender" defaultValue={profile.gender} onChange={()=>setGender(2)} defaultChecked={profile.gender === 2 ? true : false} id="Female" />
                                        <label htmlFor="Female">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full items-center">
                                <label htmlFor="profession" className="w-1/2">Profession</label>
                                <div className="flex flex-col w-full">
                                <input type="text" name="profession" id="profession" onChange={formik.handleChange} defaultValue={profile.profession} className="rounded-xl pl-2 border w-full h-[50px]"/>
                                {formik.errors.profession && formik.touched.profession && (
                                    <p className="text-red-500">{formik.errors.profession}</p>
                                )}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="name" className="w-1/2">Nationality</label>
                                <div className="w-1/2 relative w-full items-center flex">
                                <select name="" id="nation" className="rounded-xl pl-2 w-full border h-[50px]">
                                        {nationality.map((item, index) => {
                                            return (
                                            <option key={index+1} selected={item.name === profile.nationality} onChange={()=>setNationalities(index+1)} value={index+1} defaultValue={item.name}>{item.name}</option>
                                        )
                                    })}
                                </select>
                                </div>
                            </div>
                            <div className="flex">
                                <label className="w-1/2" htmlFor="birthday">Birthday Date</label>
                                <input type="date" name="name" id="birthday" className="rounded-xl pl-2 w-full border h-[50px]"/>
                            </div>
                            <div className='flex justify-center'>
                                <button className=' text-white rounded-xl shadow-md shadow-[#E4F9FF] bg-[#0FABBC] w-[80%] h-[55px]'>Save</button>
                            </div>
                        </form>
                        <form onSubmit={uploadImage} className="md:w-1/3 w-full flex flex-col gap-4">
                            <div className="flex justify-center">
                                <label htmlFor="img" className='h-[137px] w-[137px] flex justify-center items-center rounded-full overflow-hidden border border-[#0FABBC] border-4'>
                                    <img src={imagePreview?imagePreview:profile.picture} alt="" className='h-[110px] w-[110px] rounded-full'/>
                                </label>
                            </div>
                            <div className="md:flex hidden md:w-full justify-center">
                                <input
                                type="file"
                                name="img"
                                id="img"
                                className="hidden"
                                onChange={handlerChange}
                                />
                                <button className="w-full h-[40px] rounded-xl border border-[#0FABBC] hover:text-white hover:bg-[#0FABBC] text-[#0FABBC]">Upload Photo</button>
                            </div>
                            <div className="text-sm hidden md:inline text-[rgba(55,58,66,0.75)]">Image size: max, 500 kb</div>
                            <div className="text-sm hidden md:inline text-[rgba(55,58,66,0.75)]">Image formats: .JPG, .JPEG, .PNG</div>
                        </form>
                    </div>
                </div>
            </div>
            <FooterMain />
            <ScrollRestoration/>
        </div>
    )
}

export default Profile