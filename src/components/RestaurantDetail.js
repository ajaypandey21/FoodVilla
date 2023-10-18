import { useParams } from "react-router-dom";
import { IMG_CDN, REST_MENU_DETAIL } from "./constant";
import { Shimmer } from "./Shimmer";
import useRestaurant from "../../utils/useRestauraMenu";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const RestaurantDetail = () =>{
  
    const {resid} = useParams();
    const restraunt=useRestaurant(resid);
    const [menuitems,setMenuitems]= useState([]);
    const dispatch = useDispatch();
    
    const addItems = (item)=>{
      dispatch(addItem(item));
    };
  

    useEffect(()=>{
        getMenuData();
    },[])
    
    const getMenuData = async () => {
        try {
          const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6525666&lng=77.408566&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`);   
          // const data3 = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6525666&lng=77.408566&restaurantId=539151&catalog_qa=undefined&submitAction=ENTER");   
          const json = await data.json();
          // const json2 = await data3.json();
          // console.log(json2)
          const data2=json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards
          
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

          <div className="p-5">
            <h1 className="font-bold my-2">Menu</h1>
          
        {menuitems && Array.isArray(menuitems) ? (
          <ul className="list-disc ">
            {menuitems.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} <button className="m-1 p-1 bg-green-400" onClick={()=>addItems(item)}>Add</button>
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

          
  