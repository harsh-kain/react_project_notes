// import React from 'react'
import { useState, useEffect } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { IMAGE } from "../utils/constant";
import useCrosuelData from "../utils/useCrosuelData";
const Minicrousel = () => {
  
  const [data , setData] = useState(null);
  const rawData = useCrosuelData();


  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const fetechedData = await rawData;
        setData(fetechedData?.data?.cards[0]?.card?.card);
      }
      catch(error){
        console.log("Error in fetching data", error);
      }
    }
    fetchData();
  }, [rawData])


  if(!data) return <Shimmer />
  const heading = data?.header?.title
  const imageList = data?.gridElements?.infoWithStyle?.info ;
  return (
    <div className="sm:w-11/12 md:w-9/12 flex flex-col ">

    <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-4xl m-4">{heading}</h1>
    
    <div className="flex overflow-x-auto overflow-hidden ">
      {imageList.map((item) => (
        <div key={item.id} className="flex-shrink-0 w-36  scroll-snap-start">
          <img src={IMAGE+item.imageId} alt={`Item ${item.id}`} className="w-36 h-auto object-cover" />
        </div>
      ))}

    </div>
      
    </div>
  )
}

export default Minicrousel