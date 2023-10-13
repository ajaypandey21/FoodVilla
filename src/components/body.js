import { useState,useEffect } from "react";
import { IMG_CDN,restrauntlist } from "./constant";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useRestaurantCard, { SearchContainer } from "../../utils/useRestaurantCard";
import { REST_MENU_LIST } from "./constant";
import useOnline from "../../utils/useOnline";


const RestaurantCard = ({name,cuisines,cloudinaryImageId,areaName})=>{
    
    return(<div className="card">
        <img src={IMG_CDN +cloudinaryImageId} ></img>
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
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
      <div className="search-container">
      <input
        className="search-input"
        value={searchInput}
        type="text"
        placeholder="Search Restaurants"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="sear-but" onClick={searcFilter}>
        Search
      </button>
      <h1>{searchInput}</h1>
    </div>
    <div className="body-div">
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




