/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react";
import Shimmer from "../Shimmer/Shimmer";
import useCrosuelData from "../utils/useCrosuelData";
import RestaurantCards from "./RestaurantCards";
import Cards from "./Cards";
const TopRestaurants = () => {


    const [data , setData] = useState(null);
  const rawData = useCrosuelData();


  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const fetechedData = await rawData;
        setData(fetechedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
      catch(error){
        console.log("Error in fetching data", error);
      }
    }
    fetchData();
  }, [rawData])

  console.log(data);

  if(!data) return <Shimmer />
//   console.log(data);
  const heading = data?.header?.title
  const imageList = data?.gridElements?.infoWithStyle?.info ;
//   console.log(heading);
  return (
    <div className="flex justify-center items-center overflow-x-auto overflow-hidden sm:w-11/12 md:w-9/12  ">
        
        {data.map((items) => <RestaurantCards data={items} key={items.info.id}/>)}

    </div>
  )
}

export default TopRestaurants