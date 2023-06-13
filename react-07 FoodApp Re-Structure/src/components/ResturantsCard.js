import { REST_IMG_CDN } from '../utils/constant';

const ResturantsCard = (props) => {
    const { cuisines, name, cloudinaryImageId, costForTwo, avgRating } = props.restData;
    return (
        <div className="card-container">

            <img className="rest-img" src={REST_IMG_CDN + cloudinaryImageId} />
            <div>{name}</div>
            <div className="cusines">{cuisines.join(",")}</div>
            <div>Rating : {avgRating}</div>
            <div>Cost for two :{costForTwo / 100}/-</div>
        </div>
    )
}
export default ResturantsCard;
