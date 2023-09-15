import { IMG_CON_URL } from "../../Contant";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../utils/cartSlice";


const FoodItems = ({ name, price, defaultPrice, imageId, description }) => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleRemoveItem=()=>{
    dispatch(removeItem(cartItems))
  }

  return (
    <div className="w-[200px] p-3 m-5 shadow-lg bg-pink-50">
      <h1>{name}</h1>
       ₹ {price / 100 || defaultPrice / 100}
      <img className="items-end" src={IMG_CON_URL + imageId} />
      <p className="text-sm font-thin">{description.slice(0, 60)}</p>
      <button className="bg-red-200 p-2 m-2 font-semibold" onClick={handleRemoveItem}>remove</button>
    </div>
  );
};

export default FoodItems;
