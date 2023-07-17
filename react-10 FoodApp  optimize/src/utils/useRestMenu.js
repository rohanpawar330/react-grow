import { useEffect, useState } from "react";
import { MENU_URL, RESTAURANT_TYPE_KEY } from "./constant";

const useRestMenu = (restId) => {
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_URL(restId))
        const resp = await data.json();
        // Set restaurant data
        const restaurantData = resp?.data?.cards?.map(x => x.card)?.
            find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
        setRestaurant(restaurantData);
    }
    return restaurant;
}

export default useRestMenu;