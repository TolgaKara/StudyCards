import React, { Component } from "react"
import { Link } from "react-router-dom"
import Slogo from "../img/Gruppe24.png"
import Nlnavitem from "./Nlnavitem"
import "./Navbar.css"


class Navbar extends Component {
    render(){
        return(
            <div  className="Navbar">
          <Link to = {"/home"}>
            <img className="Slogo" src={Slogo} alt="Logo of Studydrive" />
          </Link>  
            
            <Nlnavitem />
         </div>
        )
    }
}

export default Navbar