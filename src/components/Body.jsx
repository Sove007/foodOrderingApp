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
    try {
      const data = await fetch(
        // "https://proxy.cors.sh/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6295061&lng=77.030152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.629636&lng=77.030748&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        // "https://corsproxy.org/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.629636&lng=77.030748&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.629584&lng=77.030271&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      setAllRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      
    } catch (error) {
      console.log("Error fetching data:" , error);
      
    }
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
      <div className="p-2 ml-18 mt-3 flex  ">
        <input
          type="text"
          className="border border-gray-400 rounded-l-full p-2 "
          value={searchtext}
          placeholder="Search for the restaurants and food"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="border border-gray-400 rounded-r-full p-2 hover:text-orange-300"
          onClick={() => {
            const data = handleSearch(searchtext, allRestaurant);
            setFilteredRestaurant(data);
          }}
        >
        <SlMagnifier/>
        </button>
        </div>

      <div>
        <h1 className=" font-bold text-2xl text-gray-600 text-center">Restaurants with online food delivery in West Delhi</h1>
        <div className="flex flex-wrap container mx-auto ml-28">
        
          {filterdRestaurant?.map((val) => {
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
