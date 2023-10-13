import { REST_MENU_LIST } from "../src/components/constant";
import { useState,useEffect } from "react";




const useRestaurantCard = ()=>{
    const [allrestaurants,setallRestaurants]=useState([]);
    const [filteredrestaurants,setfilteredRestaurants]=useState([]);
    

useEffect(()=>{
    getRestaurantsData();
},[])

const getRestaurantsData = async () => {
    try {
      const data = await fetch(REST_MENU_LIST);
      const json = await data.json();

      setallRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
    } catch (error) {
      console.error("Error fetching data: ", error);
    } 
   
  };


  return [allrestaurants,filteredrestaurants];

};
export default useRestaurantCard;
