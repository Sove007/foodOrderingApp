import { IMG_CON_URL } from "../../Contant";


const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  areaName,
  avgRating,
  locality,
}) => {


  return (
    <div className="w-[200px] p-3 m-5 shadow-lg bg-pink-50">
      <img src={IMG_CON_URL + cloudinaryImageId} />
      <h3 className="font-bold text-xl">{name}</h3>
      <h4>{avgRating}⭐</h4>
      <span>
        <p>{cuisines.join(", ")}</p>
      </span>
      <p>
        {locality}, {areaName}
      </p>
    </div>
  );
};

export default RestaurantCard;
