import { useState } from "react";
import ResCard from "./ResCard";
import resList from "../utils/mockData"




const Body = () => {
  //always use useState inside a functional components
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

// let listItemsNormal = [
//   {
// "info": {
// "id": "408505",
// "name": "KFC",
// "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/a3b08376-68d6-4984-819b-882c62e41afa_408505.JPG",
// "locality": "Sewla Kalan",
// "areaName": "Morowala",
// "costForTwo": "₹400 for two",
// "cuisines": [
// "Burgers",
// "Fast Food",
// "Rolls & Wraps"
// ],
// "avgRating": 4.3,
// "sla": {
// "deliveryTime": 24,
// },
// }
// },
//   {
// "info": {
// "id": "408506",
// "name": "KFC",
// "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/a3b08376-68d6-4984-819b-882c62e41afa_408505.JPG",
// "locality": "Sewla Kalan",
// "areaName": "Morowala",
// "costForTwo": "₹400 for two",
// "cuisines": [
// "Burgers",
// "Fast Food",
// "Rolls & Wraps"
// ],
// "avgRating": 4.1,
// "sla": {
// "deliveryTime": 24,
// },
// }
// },
//   {
// "info": {
// "id": "408507",
// "name": "KFC",
// "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/a3b08376-68d6-4984-819b-882c62e41afa_408505.JPG",
// "locality": "Sewla Kalan",
// "areaName": "Morowala",
// "costForTwo": "₹400 for two",
// "cuisines": [
// "Burgers",
// "Fast Food",
// "Rolls & Wraps"
// ],
// "avgRating": 3.8,
// "sla": {
// "deliveryTime": 24,
// },
// }
// }
// ]
  return (
    <div className="body">
      <div className="search-container">
        {/* <input type="text" placeholder="Restaurant Name" /> */}
        <button className="search-btn" onClick={()=>{
          const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating >= 4.5)

          setListOfRestaurants(filteredList)
          console.log(filteredList)
         } }>Top rated Restaurants</button>
      </div>
      <div className="res-container">
        {/* <ResCard resData={resList[0]} />
        <ResCard resData={resList[1]} />
        <ResCard resData={resList[2]} />
        <ResCard resData={resList[3]} />
        <ResCard resData={resList[4]} />
        <ResCard resData={resList[5]} />
        <ResCard resData={resList[6]} />
        <ResCard resData={resList[7]} />
        <ResCard resData={resList[8]} /> */}
        {listOfRestaurants.map((restaurant)=>(
            <ResCard key={restaurant.info.id} resData={restaurant} ></ResCard>
        ))}
      </div>
    </div>
  );
};

export default Body