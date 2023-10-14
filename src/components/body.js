import { useState,useEffect } from "react";
import { IMG_CDN,restrauntlist } from "./constant";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useRestaurantCard, { SearchContainer } from "../../utils/useRestaurantCard";
import { REST_MENU_LIST } from "./constant";
import useOnline from "../../utils/useOnline";
import star from "../assets/img/star.jpg"


  const RestaurantCard = ({name,cuisines,cloudinaryImageId,areaName,avgRating})=>{
      
      // return(<div className="m-2 p-2 w-56 rounded-xl  shadow-xl bg-blue-200 hover:w-48">
      return(<div className="m-2 p-2 w-56  rounded-2xl shadow-xl bg-blue-200 hover:scale-105 transition-transform overflow-hidden">
          {/* <div className="p-1 w-48 h-48 " >
          </div> */}
          <img className="w-64 h-44 object-contain"src={IMG_CDN +cloudinaryImageId} ></img>
          <div className="py-2"><h3 className="font-bold truncate ...">{name}</h3></div>
          <div className="truncate ..."><h3>{cuisines.join(", ")}</h3></div>
          <div className="flex"><img className="h-4 w-4 my-1"src={star}></img> <span className="ml-2">{avgRating}</span></div>
          <h3>{areaName}</h3>
  
      </div>

    ) 
}

const Body = ()=>{
    const [searchInput,setSearchInput]=useState([]);
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
 
  const searcFilter =()=>{
    const data =filterData(searchInput,allrestaurants);
    setfilteredRestaurants(data);    
      
    };

   const isOnline = useOnline();
  
  
   if(!isOnline){
    return <h1>Your are Offline,Please check your Connection.  </h1>;
   }
    // if (!allrestraunts) return null;
    return allrestaurants?.length === 0 ? ( 
      <Shimmer />
      
    ) : (
      <>
    <div className="search-container m-2 justify-center flex">
      <input
        className="border-black"
        value={searchInput}
        type="text"
        placeholder="Search Restaurants"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {/* <button className="" >
        
      </button> */}
       <button type="submit" onClick={searcFilter} className="p-2 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
      
    </div>
    <div className="body-div flex flex-wrap justify-evenly pl-36 pr-36  " >
          {filteredrestaurants.length===0?(<h1>No restraunt found</h1>):(
              filteredrestaurants.map((restraunt)=>{
                      return <Link to={"/restaurants/"+ restraunt.info.id} key={restraunt.info.id}>
                      <RestaurantCard {...restraunt.info}  /></Link>
                  })
          )
          }  
    </div>
      </>
    )
  };
  export default Body;




