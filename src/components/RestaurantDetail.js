import { useParams } from "react-router-dom";
import { IMG_CDN, REST_MENU_DETAIL } from "./constant";
import { Shimmer } from "./Shimmer";
import useRestaurant from "../../utils/useRestauraMenu";
import { useEffect, useState } from "react";

const RestaurantDetail = () =>{
  
    const {resid} = useParams();
    const restraunt=useRestaurant(resid);
    const [menuitems,setMenuitems]= useState([]);

    useEffect(()=>{
        getMenuData();
    },[])
    
    const getMenuData = async () => {
        try {
          const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6525666&lng=77.408566&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`);
          const json = await data.json();
          const data2=json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards
          console.log(data2)
          setMenuitems(data2);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }     
      };

    return !restraunt ?(<Shimmer />):(
    <div className="flex">
        <div>
            <img src={IMG_CDN +restraunt.cloudinaryImageId} ></img>
            <h1>RestaurantID:{resid}</h1> 
            <h2>{restraunt.name}</h2>
            <h3>{restraunt.avgRating} stars</h3>
            <h3>{restraunt.cuisines?.join(", ")}</h3>
            <h3>{restraunt.costForTwoMessage}</h3>
        </div>
      
          <div className="ml-4">
            <h1>Menu</h1>
            {/* <ul className="list-disc text-left">
                {menuitems.map((item) => (
                <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name}
                    
                </li>
                ))}
            </ul> */}
        {menuitems && Array.isArray(menuitems) ? (
          <ul className="list-disc text-left">
            {menuitems.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No menu items available.</p>
        )}
        </div>


       
      </div>
)
};
export default RestaurantDetail;

          
  