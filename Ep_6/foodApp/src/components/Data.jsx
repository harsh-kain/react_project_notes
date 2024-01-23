/* eslint-disable no-unused-vars */
import Cards from "./Cards";
import {useContext, useState, useEffect } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useHomePage from "../utils/useHomePage";
import userContext from "../utils/userContext";

const Data = () => {
  
  const [rawData, setRawData] = useState(null);

  const data = useHomePage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await data;
        setRawData(fetchedData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || {});
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data]);

  if (!rawData) {
    return <Shimmer/>; 
  }

  return (
  <div className="flex justify-center items-center flex-col sm:w-full md:w-full lg:w-[1600px] ">
      <div className="sm:w-full bg-slate-400 flex justify-center items-center">
        {/* search filter  */}
        {/* <input type="text" placeholder="Enter your name" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/> */}

      </div>
      <div className="container flex flex-wrap justify-center items-center mx-auto px-5">

        {rawData.length > 0 ? rawData.map((val, index) => (
          <Link key={val.info.id} to={"/restaurants/" + val.info.id}>
            <Cards details={val} key={index} />
          </Link>
          
        ) ) : <Shimmer />}
      </div>
    </div>
  );
}
export default Data;
 
