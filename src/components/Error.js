import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err =useRouteError(); 
    const {status,statusText} = err
   
    return(
        <div>
            <h1>OOPS!...</h1>
            <h2>Something went Wrong!!</h2>
            <h1>{status}: {statusText}</h1>
        </div>
    );
};
export default Error;