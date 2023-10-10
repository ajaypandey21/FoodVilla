import { useState,useEffect } from "react";
import { IMG_CDN,restrauntlist } from "./constant";
import { Shimmer } from "./Shimmer";



const RestaurantCard = ({name,cuisines,cloudinaryImageId,areaName})=>{
    
    return(<div className="card">
        <img src={IMG_CDN +cloudinaryImageId} ></img>
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{areaName}</h3>

    </div>

    )
}
function filterData(searchInput,restraunts){
        
    const filterData =restraunts.filter((rest)=>rest.info.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    return filterData;

};
    
const Body = ()=>{
    
    const [searchInput,setSearchInput]=useState([]);
    const [allrestaurants,setallRestaurants]=useState([]);
    const [filteredrestaurants,setfilteredRestaurants]=useState([]);
   

  
    useEffect(()=>{
        getRestaurantsData();
    },[])
    
    const getRestaurantsData = async () => {
        try {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6525666&lng=77.408566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
    
          setallRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setfilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
          console.error("Error fetching data: ", error);
        } 
      };
    // if (!allrestraunts) return null;
    return allrestaurants?.length === 0 ? ( 
      <Shimmer />
      
    ) : (
      <>
      <div className="search-container">
          <input className="search-input" value={searchInput} type="text" placeholder="Search Restaurants"
          onChange={(e)=>
              setSearchInput(e.target.value)
          } > 
          
          </input>
          <button className="sear-but" onClick={()=>{
              const data =filterData(searchInput,allrestaurants);
              setfilteredRestaurants(data);
          }}>Search</button>
          <h1>{searchInput}</h1>
      </div>
      
    <div className="body-div">
          {filteredrestaurants.length===0?(<h1>No restraunt found</h1>):(
              filteredrestaurants.map((restraunt)=>{
                  console.log(filteredrestaurants)
                      return <RestaurantCard {...restraunt.info} key={restraunt.info.id} />
                  })
          )
          }  
    </div>
      </>

    )

  };
export default Body;


