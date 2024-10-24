import React from "react";
import { useState, useEffect } from "react";

function CreatePopUp(props) {
    const [locations, setLocations] = useState([])
    const [category, setCategory] = useState([])

    async function dataCategory() {
        const endPoint = `${import.meta.env.VITE_ssh_url}/categories`
        const response = await fetch(endPoint);
        const data = await response.json()
        const listData = data.results
        setCategory(listData)
    }

    async function dataLocations() {
        const endPoint = `${import.meta.env.VITE_ssh_url}/locations`
        const response = await fetch(endPoint);
        const data = await response.json()
        const listData = data.results
        setLocations(listData)
    }

    useEffect(() => {
        dataCategory()
        dataLocations()
    },[])

    const popUp = props.data
    console.log(popUp)

    function hidePopUp(){
        popUp = false
    }
    return (
        <div className="bg-[rgba(0,0,0,0.28)] fixed flex justify-center items-center w-full h-full z-50">
            <form className="bg-white flex flex-col gap-4 text-sm px-[54px] py-[20px] rounded-2xl w-[70%]">
                <h1 className="text-2xl font-semibold">Create Event</h1>
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Input Name Event ..." className="border p-2 rounded-xl h-[50px]"/>
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="categori">Category</label>
                        <select name="category" id="" className="border p-2 bg-white rounded-xl h-[50px]">
                            {category.map((item)=>{
                                return(
                                    <option value="">{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="location">Location</label>
                        <select name="location" id="location" className="border p-2 bg-white rounded-xl h-[50px]">
                            {locations.map((item)=>{
                                return(
                                    <option value="">{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="date">Date Time Show</label>
                        <input type="date" name="date" id="date" placeholder="01/01/2022" className="border p-2 rounded-xl h-[50px]"/>
                    </div>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="name">Price</label>
                        <input type="number" name="name" id="name" placeholder="Input Price ..." className="border p-2 rounded-xl h-[50px]"/>
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="section">Section</label>
                        <select name="section" id="section" className="border bg-white p-2 rounded-xl h-[50px]">
                            <option value="reguler">REGULER</option>
                            <option value="VIP">VIP</option>
                            <option value="VVIP">VVIP</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <label htmlFor="categori">Image</label>
                    <input type="file" name="categori" id="categori" placeholder="Chose File ..." className=""/>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="categori">Detail</label>
                    <input type="text" name="categori" id="categori" placeholder="Input Detail ..." className="border p-2 rounded-xl h-[95px]"/>
                </div>
                <div className="flex gap-8 justify-end">
                    <button onClick={hidePopUp} className="shadow-md shadow-[#E4F9FF] bg-[#FF2400] w-36 h-[60px] rounded-xl font-semibold text-white">Cancel</button>
                    <button className="shadow-md shadow-[#E4F9FF] bg-[#0FABBC] w-[315px] h-[60px] rounded-xl font-semibold text-white">Save</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePopUp