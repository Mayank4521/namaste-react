import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  //always use useState inside a functional components
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText,setSearchText] = useState("")

  useEffect(()=>{
    fetchData()
  },[])

    const fetchData = async ()=>{
      const data = await fetch(
        "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3252639&lng=78.0412983&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      
      const json = await data.json()
    
      // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    //conditional rendering
  //   if(listOfRestaurants.length === 0){
  //   return <Shimmer />
  // }  

  return listOfRestaurants.length === 0 ? (
  <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input type="text" placeholder="search" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button className="search-btn" onClick={()=>{
            // console.log(searchText)

            const filteredRes = listOfRestaurants.filter(
              (restaurant)=> restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))

            setFilteredRestaurant(filteredRes)

          }} >Search</button>
        </div>
        <button className="filter-btn" onClick={()=>{
          const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating >= 4.5)

          setFilteredRestaurant(filteredList)
          console.log(filteredList)
         } }>Top rated Restaurants</button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant)=>(
            <ResCard key={restaurant.info.id} resData={restaurant} ></ResCard>
        ))}
      </div>
    </div>
  );
};

export default Body