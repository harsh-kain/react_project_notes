import { MENU_API } from './constant';
import { useState,useEffect } from 'react';
const useHomePage = () => {

    const [resData, setResData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        const data = await fetch(MENU_API)
        const json = await data.json();
        setResData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return resData;
} 

export default useHomePage