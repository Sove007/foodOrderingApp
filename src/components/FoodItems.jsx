import { IMG_CON_URL } from "../../Contant";

const FoodItems = ({ name, price, defaultPrice, imageId, description }) => {
  return (
    <div className="w-[200px] p-3 m-5 shadow-lg bg-pink-50">
      <h1>{name}</h1>
       ₹ {price / 100 || defaultPrice / 100}
      <img className="items-end" src={IMG_CON_URL + imageId} />
      <p className="text-sm font-thin">{description.slice(0, 60)}</p>
    </div>
  );
};

export default FoodItems;
