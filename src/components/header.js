import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"
import useOnline from "../../utils/useOnline";
import sign from "../assets/img/sign.png"
import { useSelector } from "react-redux";
import cart from "../assets/img/shopping-cart.png"

const Logo =()=>{
    return( 
    <a href="/">
        <div></div>
    <img className="h-28 p-2 sm:h-20 md:h-24 lg:h-28 xl:h-28" alt="food villa"  src={logo} /> 
    </a>
    );
};
   


const Header = ()=>{
    const isOnline=useOnline();
    
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems)
    
    return(
        
    <div className="flex justify-evenly bg-white shadow-lg sm:flex-col md:flex-row lg:flex-row xl:flex-row ">
        <Logo />
    <div className="flex" >
        <ul className="flex py-10"  >
            <li className="px-6 hover:text-orange-500 "><Link  to="/">Home</Link></li>
            <li className="px-6 hover:text-orange-500"><Link to="/about">About</Link></li>
            <li className="px-6 hover:text-orange-500"><Link to="/contact">Contact</Link></li>
            <li className="px-6 hover:text-orange-500"><Link to="/instamart">Instamart</Link></li>
            <li className="px-6 hover:text-orange-500">{isOnline ? "✅" : "🔴"}</li>
            
            
            {/* <li>About</li>
            <li>Contact</li>
        <li>Cart</li> */}
        </ul>
        
    </div>  

    

    
    <div className=" py-8 flex">
    <Link to="/cart"><span><img src={cart} className="h-8 w-8 "></img></span > </Link>
    <span className="p-2">{cartItems.length}</span>
    </div>
    
    <div className="py-8 flex ">
    <Link to="/signupform"><button className=" flex" ><span ><img className="h-8 w-8 " src={sign}></img></span><span className="pl-2 hover:text-orange-500">Sign In</span></button>
    </Link>
    </div>
    </div>
    

);
};


export default Header;