import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// const [restrauntMenu,setRestaurantsMenu] = useState();




const RestaurantDetail = () =>{
    const {resid} = useParams();
    useEffect(()=>{
        getRestaurantsMenu();
    },[])
    const getRestaurantsMenu = async () => {
        try {
          const data2 = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6525666&lng=77.408566&restaurantId=33861&catalog_qa=undefined&submitAction=ENTER");
          const json2 = await data2.json();
          console.log(json2)
    
        
        } catch (error) {
          console.error("Error fetching data: ", error);
        } 
      };
   
    return(
      <h1>
          RestaurantID:{resid}
      </h1>
    )
  
  }
  export default RestaurantDetail;