import { useState,useEffect } from "react"
import { FETCH_MENU_RES } from "../src/components/constant";

const useRestaurantMenu = (resid) =>{
    const [restaurant,setRestaurants]= useState([]);
    useEffect(()=>{
            getRestaurantsMenu();
    },[])

    const getRestaurantsMenu = async () => {
        try {
            const data2 = await fetch(FETCH_MENU_RES+resid+"&catalog_qa=undefined&submitAction=ENTER");
            const json2 = await data2.json();
            setRestaurants(json2?.data?.cards[0]?.card?.card?.info)  
        } catch (error) {
            console.error("Error fetching data: ", error);
        } 
        };
        return restaurant;
       
    };

    export default useRestaurantMenu;

