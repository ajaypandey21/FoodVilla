import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"
import useOnline from "../../utils/useOnline";
const Logo =()=>{
    return( 
    <a href="/">
    <img className="h-28 p-2" alt="food villa"  src={logo} /> 
    </a>
   
    );
   };


const Header = ()=>{
    const isOnline=useOnline();
    return(
        
    <div className="flex justify-evenly bg-white shadow-lg ">
        <Logo />
    <div className="flex" >
        <ul className="flex py-10"  >
            <li className="px-2"><Link to="/">Home</Link></li>
            <li className="px-2"><Link to="/about">About</Link></li>
            <li className="px-2"><Link to="/contact">Contact</Link></li>
            <li className="px-2"><Link to="/cart">Cart</Link></li>
            <li className="px-2">{isOnline ? "✅" : "🔴"}</li>
            
            {/* <li>About</li>
            <li>Contact</li>
        <li>Cart</li> */}
        </ul>
    </div>  
    <h1 className="py-8 " >
    <Link to="/signupform"><button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >login</button>
    </Link>
    
    </h1>
    </div>
    

);
};


export default Header;