/* eslint-disable no-unused-vars */
import Cards from "./Cards";
import {useContext, useState, useEffect } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useHomePage from "../utils/useHomePage";
import userContext from "../utils/userContext";

const Data = () => {
  
  
  const filterData = useHomePage();
  
  const {loggedInUser, setUserName} = useContext(userContext);
  
  return (
  <>
      <div className="container flex flex-wrap justify-center items-center mx-auto px-5">
        {/* search filter  */}
        
        <input type="text" placeholder="Enter your name" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>


        {filterData.length > 0 ? filterData.map((val, index) => (
          <Link key={val.info.id} to={"/restaurants/" + val.info.id}><Cards details={val} key={index} /></Link>

        )) : <Shimmer />}
      </div>
    </>
  );
}
export default Data;
