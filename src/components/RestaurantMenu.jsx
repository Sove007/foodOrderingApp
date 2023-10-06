import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../../Contant";
// import Shimmer from './Shimmer';
import Shimmerr from "./Shimmerr";
import useResturant from "../../utils/useResturant";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useResturant(id);

  const dispatch = useDispatch();

  const addFooditem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmerr />
  ) : (
    <div className="flex items-center justify-center">
      <div className="w-1/3 m-4">
        <h1>{restaurant?.cards[0]?.card?.card.info.name}</h1>
        <img
          src={
            IMG_CON_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt={restaurant?.cards[0]?.card?.card.info.name}
          className=""
        />
        <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating}⭐</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
            (value) => (
              <li key={value?.card?.info?.id} className="mb-2">
                <span className="font-bold">{value?.card?.info?.name}</span> -{" "}
                <button
                  className="px-4 py-2  bg-gray-50 shadow-transparent  text-green-400  font-mono  text-center rounded-lg"
                  onClick={() => addFooditem(value)}
                >
                  ADD
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
