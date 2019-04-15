import React, { Component } from "react"
import Slogo from "../img/Gruppe24.png"
import Nlnavitem from "./Nlnavitem"
import "./Navbar.css"


class Navbar extends Component {
    render(){
        return(
            <div className="Navbar">
            <img className="Slogo" src={Slogo} alt="Logo of Studydrive"/>
            <Nlnavitem />

        



         </div>
        )
    }
}





// function Navbar(){
//     return(
//         <div className="Navbar">
//             <img className="Slogo" src={Slogo} alt="Logo of Studydrive"/>
//             <Nlnavitem />
//             <Mobile />
        



//         </div>

//     )
// }


export default Navbar