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
          const json = await data.json();
        
          (json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)? (
           setMenuitems( json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)):
          json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card?.card?.carousel?(
           setMenuitems(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card?.card?.carousel)):
           console.error("Invalid data structure.");
           console.log(menuitems)
        } catch (error) {
          console.error("Error fetching data: ", error);
        }     
      };


      
      return !restraunt ?(<Shimmer />):(
          <div className="m-2 flex">
            <div className=" p-4">
              <img src={IMG_CDN + restraunt.cloudinaryImageId} alt={restraunt.name} className="w-64 h-52 rounded-2xl" /><img></img>
              <h1 className="text-xl mt-4 font-bold">RestaurantID: {resid}</h1>
              <h2 className="text-2xl font-bold">{restraunt.name}</h2>
              <div className="flex items-center mt-2">
                <span className="text-lg text-yellow-500">★</span>
                <span className="text-lg ml-1">{restraunt.avgRating} stars</span>
              </div>
              <h3 className="text-sm mt-2">{restraunt.cuisines?.join(", ")}</h3>
              <h3 className="text-lg mt-2">{restraunt.costForTwoMessage}</h3>
            </div>

            <div className="w-1/2 p-4">
              <h1 className="text-2xl font-bold my-2">Menu</h1>
              {menuitems && Array.isArray(menuitems) ? (
                <ul className="list-disc">
                  {menuitems.map((item) => (
                    <li key={item.card?.info?.id || item.dish?.info?.id} className="flex justify-between items-center border-b border-gray-300 py-2">
                      {/* <span className="text-lg">{item?.card?.info?.name}</span> */}
                      <span className="text-lg">{item.card?.info?.name || item.dish?.info?.name}</span>
                      <button
                        className="bg-green-500 text-white rounded-lg px-4 py-1 hover:bg-green-600"
                        onClick={() => addItems(item)}
                      >
                        Add
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg mt-4">No menu items .</p>
              )}
            </div>
          </div>
          )
}


//     return !restraunt ?(<Shimmer />):(
//     <div className=" m-2 flex">
//         <div>
//             <img className="" src={IMG_CDN +restraunt.cloudinaryImageId} ></img>
//             <h1>RestaurantID:{resid}</h1> 
//             <h2>{restraunt.name}</h2>
//             <h3>{restraunt.avgRating} stars</h3>
//             <h3>{restraunt.cuisines?.join(", ")}</h3>
//             <h3>{restraunt.costForTwoMessage}</h3>
           
//         </div>

//           <div className="p-5">
//             <h1 className="font-bold my-2">Menu</h1>
          
//         {menuitems && Array.isArray(menuitems) ? (
//           <ul className="list-disc ">
//             {menuitems.map((item) => (
//               <li key={item?.card?.info?.id}>
//                 {item?.card?.info?.name} <button className="m-1 p-1 bg-green-400" onClick={()=>addItems(item)}>Add</button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No menu items available.</p>
//         )}
//         </div>


       
//       </div>
// )
// };
export default RestaurantDetail;