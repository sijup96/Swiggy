import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.1556686&lng=75.891155&restaurantId=747230&submitAction=ENTER"
    );
    const json = await data?.json();
    console.log(
      json.data?.cards[json.data?.cards?.length - 1]?.groupedCard?.cardGroupMap
    );
    setRestInfo(json.data);
  };
  if (restInfo === null) return <Shimmer />;

  return (
    <div>
      <h1>Restaurant Menu</h1>
      <h3>Menu items</h3>
    </div>
  );
};
export default RestaurantMenu;
