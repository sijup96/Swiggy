import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const{restaurantId}=useParams()
  console.log(restaurantId);
  const restInfo=useRestaurantMenu(restaurantId)

  if (restInfo === null) return <Shimmer />;
  
  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restInfo?.cards[restInfo?.cards?.length - 1]?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards[1]?.card?.card;
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu items</h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name}-{" Rs."}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
