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
    <div className="w-[250px] p-3 m-5     hover:shadow-lg">
      <img
        className="rounded-lg w-full "
        src={IMG_CON_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl">{name}</h3>
      <h4 className="font-semibold">⭐{avgRating}</h4>
      <span className="from-neutral-300 text-sm">
        <p>{cuisines.join(", ")}</p>
        <p>
          {locality}, {areaName}
        </p>
      </span>
    </div>
  );
};

export default RestaurantCard;
