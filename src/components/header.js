const Logo =()=>{
    return( 
    <a href="/">
    <img alt="food villa" className="img" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4" /> 
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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>

        </div>
    </div>
);
};
export default Header;