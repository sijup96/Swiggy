import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const restInfo = useRestaurantMenu(restaurantId);
  const [showIndex, setShowIndex]=useState()

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restInfo?.cards[restInfo?.cards?.length - 1]?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards[1]?.card?.card;

  const categories = restInfo?.cards[
    restInfo?.cards?.length - 1
  ]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (x) =>
      x?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6  text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, i) => (
        <RestaurantCategory key={i} data={category?.card?.card} showItem={i===showIndex?true:false } setShowIndex={()=>setShowIndex(i)}/>
      ))}
    </div>
  );
};
export default RestaurantMenu;
