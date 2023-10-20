import { useSelector,useDispatch } from "react-redux";
import Fooditems from "./Fooditems";
import { clearCart } from "../../utils/cartSlice";
const Cart = () =>{
  const additems = useSelector(store=>store.cart.items)
  const dispatch = useDispatch();
  const handleclearCart= () =>{
    dispatch(clearCart());

  }
  const totalAmount=()=>{
    const total = additems.reduce((acc,curr)=>{
      const itemPrice=((curr.card?.info?.price)/100) || 0;
      
      return acc+itemPrice;

    },0)
    return total;
  }
    return(
            <div>
              <div className="flex justify-evenly">
              <h1 className="font-bold text-xl">Cart Items: {additems.length}</h1>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg ml-4" onClick={() => handleclearCart()}>Clear cart</button>
              {additems.length>0 && <h1 className="font-bold">Total Amount: <span className="text-red-500">{totalAmount()}</span> Rupees.</h1>}
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