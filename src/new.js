import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/body";
import Header from "./components/header";
import Footer from "./components/footer";
import Error from "./components/Error";
import Contact from "./components/contact"
import Cart from "./components/cart"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurantDetail from "./components/RestaurantDetail";
import SignupForm from "./components/Signupform";
import ProfileClass from "./components/ProfileClass";
import Profile from "./components/Profile"
const About = lazy(()=>import("./components/about"))

const Applayout = ()=>{
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    );
};
const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<Applayout />,
        errorElement: <Error />,
        children:[
            {
                path:"/about",
                element:<Suspense fallback={<h1>loadingggg.........</h1>}><About />
                </Suspense>,
                children:[
                    {
                      path:"profile",
                      element:<Profile />
                    },
                    {
                      path:"profileClass",
                      element:<ProfileClass />
                    //   element:<ProfileClass name={"ajay"} />
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/cart",
                element:<Cart />
            },
            {
                path:"/",
                element:<Body />
            },
            {
                path:"restaurants/:resid",
                element:<RestaurantDetail />
            },
            {
                path:"/signupform",
                element:<SignupForm />
            },
        
        ]
    },


]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 