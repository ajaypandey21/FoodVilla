
import { IMG_CDN } from "./constant";



  const Fooditems = ({name,price,imageId,description,})=>{
      

      return(<div className="m-2 p-2 w-56  rounded-2xl shadow-2xl bg-white  overflow-hidden">
          
          <img className="w-full h-44 object-contain"src={IMG_CDN +imageId} ></img>
          <div className="py-2"><h3 className="font-bold truncate ...">{name}</h3></div>
          <div className="truncate ..."><h3>{description}</h3></div>
          <div > {price/100} Rupees</div>
         
  
      </div>

    ) 
}


 
  export default Fooditems;




