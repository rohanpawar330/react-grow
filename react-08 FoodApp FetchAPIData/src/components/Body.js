import ResturantsCard from './ResturantsCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
const Body = () => {

    const [listOfResutrants, setListOfResturants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);




    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING')
        const resp = await data.json();
        const restList = resp?.data?.cards[2]?.data?.data?.cards;
        setListOfResturants(restList);
        setFilteredRestaurants(restList)
    }

    // to show loader
    if (listOfResutrants.length === 0) {
        // return <h1>Loading!...</h1>
        return <Shimmer />

    }

    return (
        <>
            <input type='text' value={searchText} onChange={(e) => {
                setSearchText(e.target.value.toLowerCase())
            }} />

            <button style={{ marginRight: '10px' }} onClick={() => {
                const bestRest = listOfResutrants.filter(res => res.data.name.toLowerCase().includes(searchText));
                setFilteredRestaurants(bestRest)
            }}>Search</button>
            <button onClick={() => {
                const bestRest = listOfResutrants.filter(res => res.data.avgRating > 4);
                setFilteredRestaurants(bestRest)
            }}>Give me Top Resturants</button>

            <div className="body-container">
                {
                    filteredRestaurants.map((resturant) => {
                        return < ResturantsCard key={resturant?.data?.id} restData={resturant?.data} />
                    })
                }
            </div>
        </>
    )
}

export default Body;