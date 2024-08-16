import React from "react";

function CreatePopUp() {
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
                        <input type="text" name="categori" id="categori" placeholder="Select Category" className="border p-2 rounded-xl h-[50px]"/>
                    </div>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" id="location" placeholder="Select Location" className="border p-2 rounded-xl h-[50px]"/>
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="date">Date Time Show</label>
                        <input type="text" name="date" id="date" placeholder="01/01/2022" className="border p-2 rounded-xl h-[50px]"/>
                    </div>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="name">Price</label>
                        <input type="text" name="name" id="name" placeholder="Input Price ..." className="border p-2 rounded-xl h-[50px]"/>
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="categori">Image</label>
                        <input type="text" name="categori" id="categori" placeholder="Chose File ..." className="border p-2 rounded-xl h-[50px]"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="categori">Detail</label>
                    <input type="text" name="categori" id="categori" placeholder="Input Detail ..." className="border p-2 rounded-xl h-[95px]"/>
                </div>
                <div className="flex justify-end">
                    <button className="shadow-md shadow-[#E4F9FF] bg-[#0FABBC] w-[315px] h-[60px] rounded-xl font-semibold text-white">Save</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePopUp