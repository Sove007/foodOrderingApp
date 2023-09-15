import { useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmerr from "./Shimmerr";
import { Link } from "react-router-dom";
import { handleSearch } from "../../utils/helper.js";
import useOnline from "../../utils/useOnline";
import { SlMagnifier } from "react-icons/sl";

const Body = ({}) => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filterdRestaurant, setFilteredRestaurant] = useState([]);
  const [searchtext, setSearchText] = useState("");

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6295061&lng=77.030152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴Offline! please check your internet connection</h1>;
  }


  if (!allRestaurant === 0) return null;

  // if (filterdRestaurant?.length === 0) return <h3>No Items Found!!!</h3>;

  return allRestaurant?.length === 0 ? (
    <Shimmerr />
  ) : (
    <>
      <div className="p-4 bg-white my-5">
      <div className="rounded-full border-gray-200 ">
        <input
          type="text"
          className="focus:"
          value={searchtext}
          placeholder="Search for the restaurants and food"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-2 m-3 hover:text-orange-300 rounded-md"
          onClick={() => {
            const data = handleSearch(searchtext, allRestaurant);
            setFilteredRestaurant(data);
          }}
        >
        <SlMagnifier/>
        </button>
        </div>
     
      </div>

      <div>
        <div className="flex flex-wrap container mx-auto">
        
          {filterdRestaurant.map((val) => {
            return (
              <Link to={"/resturent/" + val?.info?.id} key={val?.info?.id}>
                <RestaurantCard {...val?.info}  />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
