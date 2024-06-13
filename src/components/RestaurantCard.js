import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[290px] rounded-xl bg-gray-100 hover:bg-gray-300">
      <img src={CDN_URL + cloudinaryImageId} className="rounded-2xl"></img>
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4 className="">{cuisines.join(", ")} </h4>
      <h4>Rating: {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export const withRestaurantOpened = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 text-white m-2 p-2 rounded-lg">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
