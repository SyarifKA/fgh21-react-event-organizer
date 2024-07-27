import React from "react";
import loadingIcon from '../assets/images/loading.png'

function LoadingPopUp() {
    return (
        <>
        < div className="flex h-full w-full justify-center items-center fixed z-10 top-0 left-0 bg-[rgba(0,0,0,0.5)]">
            <div className="animate-spin w-14 h-14">
                <img src={loadingIcon} alt="Loading Icon" />
            </div>
        </div>
        </>
    )
}

export default LoadingPopUp