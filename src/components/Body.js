import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { DATA_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const dataList = await fetch(DATA_API);
    const json = await dataList.json();
    setRestaurantList(
      json.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      json.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredRest = restaurantList.filter((res) =>
              res.info?.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredRes(filteredRest);
          }}
        >
          Search
        </button>
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
        {filteredRes?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
