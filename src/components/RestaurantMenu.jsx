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
  
  const addFooditem =(item)=>{
    dispatch(addItem(item))
  }

  
  return (!restaurant) ? (
    <Shimmerr />
  ) : (
    <div className="flex p-2 m-2">
      <div>
        <h1>{restaurant?.cards[0]?.card?.card.info.name}</h1>
        <img
          src={
            IMG_CON_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        ></img>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating}⭐</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div>
      </div>
      <div>
      <h1>Menu</h1>
        {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
          (value) => (
            <li key={value?.card?.info?.id}>{value?.card?.info?.name}- <button className="p-1 bg-green-100" onClick={()=>addFooditem(value)}>Add</button></li>
          )
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
