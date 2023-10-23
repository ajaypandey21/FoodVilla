
import { IMG_CDN } from "./constant";
import { useDispatch } from "react-redux";
import { removeItem } from "../../utils/cartSlice";

const Fooditems = ({name,price,imageId,description,defaultPrice,count,index})=>{
  const dispatch = useDispatch()
  const remItem=(index)=>{
    dispatch(removeItem(index));
  }
  return(  <div className="m-2 p-2 w-56 rounded-2xl shadow-lg bg-white overflow-hidden">
        {/* <span className="text-red-800">counter{count}</span> */}
        <div className="flex justify-end"><button  onClick={()=>remItem(index)} className="bg-gray-800 rounded-3xl p-1 text-white ">Remove</button></div>
        <img className="w-full h-44 object-cover  rounded-2xl mr-4 flex-shrink-0" src={IMG_CDN + imageId} alt={name} />
        <div className="py-2">
          <h3 className="font-bold text-lg truncate">{name}</h3>
        </div>
        <div className="text-sm ">
          <h3>{description}</h3>
        </div>
        <div className="text-lg font-bold mt-2">
          {(price||defaultPrice)/100} Rupees
        </div>
        
      </div>
    ) 

}
export default Fooditems;





  





