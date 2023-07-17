import { useParams } from "react-router-dom"
import { MENU_URL, RESTAURANT_TYPE_KEY, REST_IMG_CDN } from "../utils/constant";
import { useEffect, useState } from "react";
import { MenuShimmer } from "./Shimmer";
import useRestMenu from "../utils/useRestMenu";

export default ResturantMenu = () => {


    const { restId } = useParams();

    /**converted below in custom hooks  */
    // const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     const data = await fetch(MENU_URL(restId))
    //     const resp = await data.json();
    //     // Set restaurant data
    //     const restaurantData = resp?.data?.cards?.map(x => x.card)?.
    //         find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
    //     setRestaurant(restaurantData);
    // }

    const restaurant = useRestMenu(restId);

    return !restaurant ? (
        <MenuShimmer />
    ) : (
        <div className="restaurant-menu">
            <div className="restaurant-summary">
                <img
                    className="restaurant-img"
                    src={REST_IMG_CDN + restaurant?.cloudinaryImageId}
                    alt={restaurant?.name}
                />
                <div className="restaurant-summary-details">
                    <h2 className="restaurant-title">{restaurant?.name}</h2>
                    <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
                    <div className="restaurant-details">
                        <div className="restaurant-rating" style={
                            (restaurant?.avgRating) < 4
                                ? { backgroundColor: "var(--light-red)" }
                                : (restaurant?.avgRating) === "--"
                                    ? { backgroundColor: "white", color: "black" }
                                    : { color: "white" }
                        }>
                            <i className="fa-solid fa-star"></i>
                            <span>{restaurant?.avgRating}</span>
                        </div>
                        <div className="restaurant-rating-slash">|</div>
                        <div>{restaurant?.sla?.slaString}</div>
                        <div className="restaurant-rating-slash">|</div>
                        <div>{restaurant?.costForTwoMessage}</div>
                    </div>
                </div>
            </div>
        </div>)
}