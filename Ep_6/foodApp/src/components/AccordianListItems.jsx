/* eslint-disable react/prop-types */

import { IMAGE } from "../utils/constant";
import IsVeg from "./IsVeg";

const AccordianListItems = ({data}) => {
    // console.log(data);
    return (
        <>

        {data.map((val) => (
                <div key={val?.card?.info?.id} className="flex p-4 justify-between  items-center">
                    <div className="w-3/4 ">
                        <IsVeg vegData={val?.card?.info?.isVeg}/>

                        <h1 className="font-semibold sm:">{val?.card?.info?.name}</h1>
                        <h4>₹ {val?.card?.info?.price / 100}</h4>
                        <p className="text-slate-500 sm:text-sm md:text-base">{val?.card?.info?.description}</p>
                    </div>

                    
                    <div className="w-1/4 flex justify-end items-center">
                        <img src={IMAGE + val?.card?.info?.imageId} alt="" className="sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover rounded-lg"/>
                    </div>

                </div>

            
        ))}
    
    </>
  )
}

export default AccordianListItems