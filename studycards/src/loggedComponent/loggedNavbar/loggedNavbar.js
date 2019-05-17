import React from "react"
import LoggedNavItems from "./LoggedNavItems"
import Slogo from "../../component/img/Gruppe24.png"


class LoggedNavbar extends React.Component{
    render(){
        
        
        return(
            <div className="Navbar">
                <img className="Slogo" src={Slogo} alt="Logo of Studydrive" />

            <LoggedNavItems user={this.props.user}/>
            </div>


        )
    }
}

export default LoggedNavbar