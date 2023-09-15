import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearItem } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem(cartItems));
  };

  return (
    <>
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-2 font-semibold"
        onClick={() => handleClearCart()}
      >
        clearcart
      </button>
      <div className="flex">
        {cartItems.map((items) => (
          <FoodItems key={items?.card?.info.id} {...items?.card?.info} />
        ))}
      </div>
    </>
  );
};
export default Cart;
