import React from "react";
import ReactDOM from "react-dom/client";
import logo from './assets/img/logo.png';
import resturantsImg from './assets/img/resturants.png';
import ResturantData from './resturantsData.json';

// *HEADER
// logo                 nav menu
// 
// *BODY CONTAINER
// | *search |
//  _______
// |      |
// |*CARD |
// |______|
// 
// *Footer
// 
// ------------------------------------

const Header = () => {
   return (
      <div className="header-container">
         <img className="logo-img" src={logo} />
         <ul>
            <li>Home</li>
            <li>About</li>
            <li>More</li>
         </ul>
      </div>
   )
}
const BodyConatiner = () => {
   const restList = ResturantData.resturants;
   return (
      <>
         <div className="search-conatiner">Search</div>
         <div className="body-container">
            {
               restList.map((resturant) => {
                  return < ResturantsCard key={resturant?.data?.id} restData={resturant?.data} />
               })
            }
         </div>
      </>
   )
}
const ResturantsCard = (props) => {
   const { cuisines, name, totalRatingsString, cloudinaryImageId, costForTwo } = props.restData;
   return (
      <div className="card-container">

         <img className="rest-img" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
         <div>{name}</div>
         <div className="cusines">{cuisines.join(",")}</div>
         <div>{totalRatingsString}</div>
         <div>Cost for two :{costForTwo / 100}/-</div>
      </div>
   )
}
const Footer = () => {
   return (
      <div className="footer-container">
         <span>Terms & conditions</span>
      </div>
   )
}

const App = () => {
   return (
      <>
         <Header />
         <BodyConatiner />
         <Footer />
      </>
   )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);