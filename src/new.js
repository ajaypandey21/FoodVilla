import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/body";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Error from "./components/Error";
import Contact from "./components/contact"
import Cart from "./components/cart"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurantDetail from "./components/RestaurantDetail";

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
                element:<About />
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
        
        ]
    },


]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 