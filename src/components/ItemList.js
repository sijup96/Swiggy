import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";
const ItemList = ({ items }) => {
  const dispatch=useDispatch()
  const addToCart=(item)=>{
    dispatch(addItem(item))
  }
  return (
    <div>
      {items?.map((item) => (
        <div 
          key={item?.card?.info?.id}
          className="p-2 m2 border-gray-200 border-b-2 text-left flex content-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4 ">
          <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={()=>addToCart(item)}> Add +</button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-40"
            ></img>
       
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
