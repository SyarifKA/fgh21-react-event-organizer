import React from 'react'

function AlertLogin(props) {
    return (
        <div className='absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center bg-[rgba(0,0,0,0.5)]'>
            <div className='bg-white flex justify-center items-center rounded-xl w-[300px] h-[200px]'>{props.data}</div>
        </div>
    )
}

export default AlertLogin