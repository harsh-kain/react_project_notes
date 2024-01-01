import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import AccordianListItems from "./AccordianListItems";
import { useState } from "react";

/* eslint-disable react/prop-types */

const Accordian = ({data}) => {
    const [showData , setShowData] = useState(false);
    let {title} = data

    const handleClick = ()=>{
        setShowData(!showData);
    }
  return (
    <>
        <div className="w-full px-5 py-3 flex justify-between items-center m-3 bg-slate-200 cursor-pointer" onClick={handleClick}>
            <h4 className="text-sm md:text-lg lg:text-1xl font-medium">{title} ({data.itemCards.length})</h4>
            <span>{showData ? <FaArrowUp /> : <FaArrowDown/>}</span>
        </div>

        {showData && <div className="w-full">
                <AccordianListItems data={data.itemCards}/>
            </div>
        }
    
    </>
  )
}

export default Accordian