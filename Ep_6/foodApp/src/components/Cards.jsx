/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CDN_URL } from "../utils/constant";
const Cards = (props) => {
    const { details } = props;
    // console.log(details.info);
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = details.info || {};

    //   const {deliveryTime} = details.info.sta;
    return (
        <>
            
            <div className="max-w-xs rounded overflow-hidden shadow-lg m-3 ">
                <img className="w-full" src={CDN_URL + cloudinaryImageId} alt="Sunset in the mountains" />

                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">{avgRating} ⭐</p>
                    {/* <p className="text-gray-700 text-base">{cuisines.join(", ")}</p> */}
                </div>

                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${costForTwo}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Delivered in : {deliveryTime} min</span>

                </div>
            </div>
        </>
    )
}

export default Cards;