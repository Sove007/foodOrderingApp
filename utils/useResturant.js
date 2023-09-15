import { useState, useEffect } from "react"
import { FETCH_URL_MENU } from "../Contant";

const useResturant =(id)=>{

    const [resturent, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        const data = await fetch(
            FETCH_URL_MENU+id)
        const json = await data.json();
        setRestaurant(json?.data);
      }
    return resturent;

}
export default useResturant