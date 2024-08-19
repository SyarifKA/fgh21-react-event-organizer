import react from "react";
import Ticket1 from '../assets/images/ticket-purple.png'
import Ticket2 from '../assets/images/ticket-red.png'
import Ticket3 from '../assets/images/ticket-orange.png'
import { useDispatch } from "react-redux";
import { useState } from "react";
import { changeSeat } from "../redux/reducers/sectionSelector";

function TicketSection(props) {
    const dispatch = useDispatch()
    const [num, setNum] = useState(0)
    const plus = () => {
        const newData = { ...props.data }
        if (num < props.data.quantity) {
            newData.quantity = num + 1
            newData.price = props.data.price * newData.quantity
            dispatch(changeSeat(newData))
            setNum(newData.quantity)
        }
    }
    const min = () => {
        const newData = { ...props.data }
        if (num > 0) {
            newData.quantity = num - 1
            newData.price = props.data.price * newData.quantity
            dispatch(changeSeat(newData))
            setNum(newData.quantity)
        }
    }
    return (
        <div className="flex w-full items-start gap-2">
            <img src={Ticket1} alt="" className="bg-[rgba(241,234,255,1)] p-2 rounded-xl flex w-fit" />
            <div className="flex w-full flex-col">
                <div className="flex justify-between font-semibold text-sm">
                    <span>SECTION {props.data.name}</span>
                    <span>Rp{props.data.price.toLocaleString('id')}</span>
                </div>
                <div className="flex justify-between text-xs text-[rgba(189,192,196,1)]">
                    <span>{props.data.quantity} Seats available</span>
                    <span>per person</span>
                </div>
                <div className="flex items-center mt-2 justify-between text-xs font-semibold">
                    <div>Quantity</div>
                    <div className="flex gap-4 items-center">
                        <button onClick={min} className="w-[32px] h-[32px] border rounded-lg text-xl text-[rgba(193,197,208,1)]">-</button>
                        <span>{num}</span>
                        <button onClick={plus} className="w-[32px] h-[32px] border rounded-lg text-xl text-[rgba(193,197,208,1)]">+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketSection