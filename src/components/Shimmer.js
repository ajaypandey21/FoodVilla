export const Shimmer = ()=>{
    return(
        <div className="body-div">
            {Array(10).fill("").map((e,index)=><div key={index} className="shimmer-card"></div>)}
        </div>

       
    )
   
    

}
// we use () to return a functional component without return method
