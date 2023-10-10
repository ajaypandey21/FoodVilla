import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/body";
import Header from "./components/header";
import Footer from "./components/footer";

const Applayout = ()=>{
    return(
        <>
            <Header />
            <Body />
            <Footer />
        </>

    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />)