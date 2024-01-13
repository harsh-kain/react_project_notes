/* eslint-disable react/prop-types */

import { IMAGE } from "../utils/constant";
import IsVeg from "./IsVeg";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const AccordianListItems = ({data}) => {
    const dispatch = useDispatch();
    const handleAddItem = (data) =>{

        // console.log(data.card);
        dispatch(addItem(data.card));
    }
    return (
        <>

        {data.map((val) => (
                <div key={val?.card?.info?.id} className="flex p-4 justify-between  items-center">
                    <div className="w-3/4 ">
                        <IsVeg vegData={val?.card?.info?.isVeg}/>

                        <h1 className="font-semibold sm:">{val?.card?.info?.name}</h1>
                        <h4>₹ {val?.card?.info?.price / 100 || val?.card?.info?.defaultPrice / 100}</h4>
                        <p className="text-slate-500 sm:text-sm md:text-base">{val?.card?.info?.description}</p>
                    </div>

                    
                    <div className="w-1/4 flex relative justify-center items-center">
                        <img src={IMAGE + val?.card?.info?.imageId} alt="" className="sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover rounded-lg relative"/>
                        <button className="bg-slate-300 opacity-90  rounded-md cursor-pointer absolute bottom-[10px] py-2 px-4 " onClick={() => handleAddItem(val)}>Add</button>
                    </div>

                </div>

            
        ))}
    
    </>
  )
}

export default AccordianListItems