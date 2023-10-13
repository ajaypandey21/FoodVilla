import { useParams } from "react-router-dom";
import { IMG_CDN } from "./constant";
import { Shimmer } from "./Shimmer";
import useRestaurant from "../../utils/useRestauraMenu";

const RestaurantDetail = () =>{
  
    const {resid} = useParams();
    const restraunt=useRestaurant(resid);

    
    return !restraunt ?(<Shimmer />):(
      <div className="menu">
          <img src={IMG_CDN +restraunt.cloudinaryImageId} ></img>
          <h1>RestaurantID:{resid}</h1> 
          <h2>{restraunt.name}</h2>
          <h3>{restraunt.avgRating} stars</h3>
          <h3>{restraunt.cuisines?.join(", ")}</h3>
          <h3>{restraunt.costForTwoMessage}</h3>
      </div>
)
};
export default RestaurantDetail;

          
  