import { useEffect } from 'react'
import { DETAILS_PAGE } from './constant'
import { useState } from 'react'
const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {

        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(DETAILS_PAGE+resId)
        const json = await data.json();
        // console.log(json.data);
        setResInfo(json.data)

    }
    

    return resInfo;
}

export default useRestaurantMenu;