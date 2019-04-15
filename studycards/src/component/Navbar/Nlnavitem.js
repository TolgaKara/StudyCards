import React from "react"
import { Link } from "react-router-dom"

import "./Navbar.css"

function Nlnavitem(){
    return(
        <div>
            <ul className="Nlnavitem">
                <li><Link to={"/About"}>About Us</Link></li>
                <li><Link to={"/Features"}>Features</Link></li>
                <li><Link to={"/Decks"}id="decks">Decks</Link></li>
                <li><Link to={"/Contact"}>Contact Us</Link></li>
                <li><Link to={"/Login"} id="login">Login</Link></li>
            </ul>
        </div>
    )
}


export default Nlnavitem