import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch=useDispatch()
    const clearCart=()=>{
        dispatch(clearItem())
    }
  return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={clearCart}>Clear Cart</button>
        {cartItems.length===0 &&(<h1>Cart is empty. Add items to the cart .....</h1>)}
        <ItemList items={cartItems} />
        </div>
    </div>
  );
};

export default Cart;
