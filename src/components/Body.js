import RestaurantCard, { withRestaurantOpened } from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import { DATA_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnllineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantOpened = withRestaurantOpened(RestaurantCard);


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
  if (!onlineStatus) return <h1>Check your internet connection.....</h1>;

  const {loggedUser, setUserName} =useContext(UserContext)
  // Conditional rendering
  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            className="px-5 py-2 bg-green-100 m-4 rounded-xl"
            onClick={() => {
              const filteredRest = restaurantList.filter((res) =>
                res.info?.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setFilteredRes(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-gray-400 rounded-xl"
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
        <div className="search m-4 p-4 py-4 items-center" >
          <label>User Name: </label>
          <input className="border border-black p-2" value={loggedUser} onChange={(e)=>setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.info?.veg ? (
              <RestaurantOpened
                key={restaurant?.info?.id}
                resData={restaurant}
              />
            ) : (
              <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
