import { IMG_CON_URL } from "../../Contant";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  areaName,
  avgRating,
  locality,
  sla
}) => {
  return (
    <div className="w-[250px] p-3 m-5     hover:scale-95 transition-transform duration-300 ease-in-out" >
      <img
        className="rounded-lg w-full "
        src={IMG_CON_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl">{name}</h3>

      <h4 className="font-semibold "><span className="mr-2">⭐{avgRating   }</span>{ sla.slaString}</h4>
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
