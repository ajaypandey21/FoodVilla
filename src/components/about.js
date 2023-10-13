import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
const About = () =>{
  return(
    <div>
      <h1>
          this is about us
      </h1>
      <Outlet />
      {/* We can also" pass Component like this */}
      {/* <Profile name={"ajay"}/>
      <ProfileClass name={"ajay"} /> */}

    </div>
  )

}
export default About;