/* eslint-disable no-unused-vars */
import { MENU_API , CROSULE_API} from './constant';
import { useState, useEffect } from 'react';
const useHomePage = () => {

    const [resData, setResData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {

        try {
            const response = await fetch(MENU_API);
            const data = await response.json();
            setResData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }

    }
    return resData;
}

export default useHomePage
