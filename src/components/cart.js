import { useSelector,useDispatch } from "react-redux";
import Fooditems from "./Fooditems";
import { clearCart } from "../../utils/cartSlice";
const Cart = () =>{
  const additems = useSelector(store=>store.cart.items)
  const dispatch = useDispatch();
  const handleclearCart= () =>{
    dispatch(clearCart());

  }
    return(
            <div>
              <div className="flex">
              <h1 className="font-bold text-2xl">Cart Items: {additems.length}</h1>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg ml-4" onClick={() => handleclearCart()}>Clear cart</button>
              </div>
              <div className="flex flex-wrap mt-4">
                {additems.map((item) => (
                  <Fooditems key={item?.card?.info?.id} {...item?.card?.info} />
                ))}
              </div>
            </div>
    )
  }
  export default Cart;
    
     

   // <div>
      // <h1 className="font-bold text-2xl">Cart Items:{additems.length}</h1>
      // <button className="bg-blue-600" onClick={()=>handleclearCart()}>Clear cart</button>
      // <div className="flex flex-wrap">  
      //     {additems.map((item)=>(<Fooditems key={item?.card?.info?.id} {...item?.card?.info} />))}
      // </div>

      // </div>