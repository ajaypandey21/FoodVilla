import { useContext } from "react";
import UserContext from "../../utils/userContext";

const Footer = ()=>{
    const { user } = useContext(UserContext);
    return(
    <div>
        <h1 className="m-2 p-2 font-bold text-center shadow-xl " >This webapp is Developed by {user.name} - {user.email} </h1>
    </div>
    );
};
export default Footer;