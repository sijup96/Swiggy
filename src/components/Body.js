import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { DATA_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const dataList = await fetch(DATA_API);
    const json = await dataList.json()
    setRestaurantList(
      json.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
if(restaurantList.length===0) return <Shimmer/>
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info?.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantList?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
