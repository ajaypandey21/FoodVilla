import { useState } from "react";

const Profile = (props)=>{
    const [count,setCount]= useState(0);
    const [count2,setCount2]= useState(0);
   
   
return(
<div>
<h1>This is functional profile: {props.name}</h1>
count1: {count}
count2: {count2}
<button onClick={()=>{
    count===1?setCount(0):setCount(1)
    count2===1?setCount2(0):setCount2(1)

}}>CountToggle
</button>
</div>   
    )
};

export default Profile;