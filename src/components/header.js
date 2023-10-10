import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"
const Logo =()=>{
    return( 
    <a href="/">
    <img alt="food villa" className="img" src={logo} /> 
    </a>);
   };

const Title =()=>{
    return( <div className="title">
     <h1>AJAY DI HATTI</h1>
    </div>
   );
   };

const Header = ()=>{
    return(
        
    <div className="head-div">
        <Logo />
        <Title/>
        <div className="nav-items">
        <ul >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            {/* <li>About</li>
            <li>Contact</li>
            <li>Cart</li> */}
        </ul>

        </div>
    </div>
);
};
export default Header;