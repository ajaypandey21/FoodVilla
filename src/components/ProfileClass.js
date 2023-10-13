import React from "react";  
class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            count2:0,
        };

    }
    componentDidMount(){

        // API CALLS here like USEeffect in Functional Component        
    }

    render(){
        const{count}=this.state
        const{count2}=this.state
      
        return(
            <div>
            <h1>This is Class profile component{this.props.name}</h1>
            count:{count}
            count2:{count2}
            <button 
            onClick={()=>{
                count===1?
                this.setState({
                    count:0
                }):
                this.setState({
                    count:1
                });
                count2===1?
                this.setState({
                    count2:0
                }):
                this.setState({
                    count2:1
                });
            }}>
            CountToggle

            </button>
            </div>

        )

    }
    
}

export default ProfileClass;