import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (restaurantId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + restaurantId);
    const json = await data.json();
    setRestInfo(json.data);
  };
  return restInfo;
};

export default useRestaurantMenu;
