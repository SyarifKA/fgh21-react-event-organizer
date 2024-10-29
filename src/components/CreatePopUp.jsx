import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function CreatePopUp(props) {
    const [locations, setLocations] = useState([])
    const [category, setCategory] = useState([])
    const token = useSelector((state) => state.auth.token)
    const [file, setFile] = useState();
    
    const popUp = props.data
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
    
    async function createEvent(e) {
        e.preventDefault()
        console.log("masuk")
        const name = e.target.name.value
        const category = e.target.category.value
        const location = e.target.location.value
        const date = e.target.date.value
        const price = e.target.price.value
        const section = e.target.section.value
        const quantity = e.target.quantity.value
        const detail = e.target.detail.value
                    
        const data = new FormData()
        data.append('title', name)
        data.append('categoryId', category)
        data.append('locationId', location)
        data.append('date', date)
        data.append('price', price)
        data.append('section', section)
        data.append('quantity', quantity)
        data.append('eventImg', file)
        data.append('description', detail)
        
        const addEvent = await fetch(`${import.meta.env.VITE_ssh_url}/events`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer '+token
            },
            body: data
        })    
        const responseEvent = await addEvent.json()
        if(responseEvent.succes){
            popUp()
        }
    }

    function handlerChange(e) {
        e.preventDefault()
        setFile(e.target.files[0]);
        // setImagePreview(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <div className="bg-[rgba(0,0,0,0.28)] fixed flex justify-center items-center w-full h-full z-50">
            <form onSubmit={createEvent} className="bg-white flex flex-col gap-4 text-sm px-[54px] py-[20px] rounded-2xl w-[70%]">
                <h1 className="text-2xl font-semibold">Create Event</h1>
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Input Name Event ..." className="border p-2 rounded-xl h-[50px]"/>
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" className="border p-2 bg-white rounded-xl h-[50px]">
                            {category.map((item)=>{
                                return(
                                    <option value={item.id}>{item.name}</option>
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
                                    <option value={item.id}>{item.name}</option>
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
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" id="price" placeholder="Input Price ..." className="border p-2 rounded-xl h-[50px]"/>
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="section">Section</label>
                        <select name="section" id="section" className="border bg-white p-2 rounded-xl h-[50px]">
                            <option value="REGULER">REGULER</option>
                            <option value="VIP">VIP</option>
                            <option value="VVIP">VVIP</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name="quantity" id="quantity" placeholder="Input quantity ..." className="border p-2 rounded-xl h-[50px]"/>
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="image">Image</label>
                        <input type="file" name="image" id="image" onChange={handlerChange} placeholder="Chose File ..." className=""/>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="detail">Detail</label>
                    <input type="text" name="detail" id="detail" placeholder="Input Detail ..." className="border p-2 rounded-xl h-[95px]"/>
                </div>
                <div className="flex gap-8 justify-end">
                    <button onClick={popUp} type="button" className="shadow-md shadow-[#E4F9FF] bg-[#FF2400] w-36 h-[60px] rounded-xl font-semibold text-white">Cancel</button>
                    <button type="submit" className="shadow-md shadow-[#E4F9FF] bg-[#0FABBC] w-[315px] h-[60px] rounded-xl font-semibold text-white">Save</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePopUp