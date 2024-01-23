/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */

import { useParams } from "react-router-dom";
import { IMAGE } from "../utils/constant";
import Shimmer from "../Shimmer/Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenuData";
import RestaurantDetails from "./RestaurantDetails";
import OffersRestaurantMenu from "./OffersRestaurantMenu";
import DetailPageAccordian from "./DetailPageAccordian";
const RestaurantsMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />    

    return (
        <>
            <div className="lg:w-screen  px-4 flex flex-col justify-center items-center">
                <RestaurantDetails  data={resInfo}/>
                <OffersRestaurantMenu data={resInfo}/>
                <DetailPageAccordian data={resInfo}/> 
            </div>
        </>
    )
}

export default RestaurantsMenu;
