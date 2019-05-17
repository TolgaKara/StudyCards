import React from "react"
import { Link } from "react-router-dom"


import "./Navbar.css"


class Nlnavitem extends React.Component{



  
    render(){
        

        return(
            <div className="NavitemWrapper">
            
                <ul className="NavItems">
                    <li><a href="/home#about">About Us</a></li>
                    <li><a href="/home#features">Features</a></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/login" id="login">Login</Link></li>
                </ul>
            </div>
    )
    }
    }




export default Nlnavitem