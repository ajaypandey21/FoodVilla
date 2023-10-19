import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"
import useOnline from "../../utils/useOnline";
import sign from "../assets/img/sign.png"
import { useSelector } from "react-redux";
import cart from "../assets/img/shopping-cart.png"


const Logo = () => {
    return (
      <a href="/">
        <img
          className="h-28 p-2 sm:h-20 md:h-24 lg:h-28 xl:h-28"
          alt="food villa"
          src={logo}
        />
      </a>
    );
  };
  
  const Header = () => {
    const isOnline = useOnline();
    const cartItems = useSelector((store) => store.cart.items);
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
      };
    
  
    return (
      <div className="bg-white shadow-2xl">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-around">
            <div className="flex items-center">
                <div className="block sm:hidden">
                    <button className="text-3xl" onClick={toggleMobileMenu}>
                    ☰
                    </button>
                </div>
              <Logo />
            </div>
            <div className="">
              <ul className="  hidden sm:flex space-x-6">
                <li className="hover:text-orange-500">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-orange-500">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:text-orange-500">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="hover:text-orange-500">
                  <Link to="/instamart">Instamart</Link>
                </li>
                <li className="hover:text-orange-500">
                {isOnline ? "✅" : "🔴"}
                </li>
              </ul>

              </div>
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative">
                <span>
                  <img src={cart} className="h-8 w-8" alt="Cart" />
                </span>
                <span className="absolute -top-2 -right-2 rounded-full bg-orange-500 text-white w-6 h-6 text-xs flex items-center justify-center">
                  {cartItems.length}
                </span>
              </Link>
              <Link to="/signupform">
                <button className="flex items-center hover:text-orange-500">
                  <img className="h-8 w-8" src={sign} alt="Sign In" />
                  <span className="pl-2">Sign In</span>
                </button>
              </Link>
            
            </div>
          </div>
          <div
            id="mobile-menu"
            className="hidden sm:hidden mt-4  bg-white border border-gray-300 shadow-lg">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/instamart">Instamart</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  


export default Header;