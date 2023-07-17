import { useEffect, useState } from "react";

const useRestList = () => {
    const [restList, setRestList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING')
        const resp = await data.json();
        const restList = resp?.data?.cards[2]?.data?.data?.cards;
        setRestList(restList);
    }

    return restList;
}

export default useRestList;