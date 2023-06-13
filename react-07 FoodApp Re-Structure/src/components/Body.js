import ResturantsCard from './ResturantsCard';
import ResturantData from '../mocks/resturantsData.json';
import { useState } from 'react';
const Body = () => {
    const restList = ResturantData.resturants;

    const [listOfResutrants, setListOfResturants] = useState(restList);

    return (
        <>
            <div className="search-conatiner">Search</div>
            <button onClick={() => {
                const bestRest = restList.filter(res => res.data.avgRating > 4);
                setListOfResturants(bestRest)

            }}>Give me Top Resturants</button>
            <div className="body-container">
                {
                    listOfResutrants.map((resturant) => {
                        return < ResturantsCard key={resturant?.data?.id} restData={resturant?.data} />
                    })
                }
            </div>
        </>
    )
}

export default Body;