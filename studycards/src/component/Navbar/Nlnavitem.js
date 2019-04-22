import React from "react"
import { Link } from "react-router-dom"
import Login from "../Pages/Login/Login"
import fire from "../Pages/config/Firebase"

import "./Navbar.css"


class Nlnavitem extends React.Component{
    constructor(){
        super()
        this.state={
            user: null
        }
    }

    componentDidMount(){
        fire.auth().onAuthStateChanged((user) => {
            this.setState({user})
            })
    }


    
    
    render(){
        
    if(this.state.user === null){
        return(
            <div><h1>Hey there</h1></div>
        )
    }else {

        return(
            <div className="Navitem">
            
                <ul className="Nlnavitem">
                    <li><Link to ={"/about"}>About Us</Link></li>
                    <li><Link to={"/features"}>Features</Link></li>
                    <li><Link to={"/decks"}id="decks">Decks</Link></li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                    <li><Link to={"/login"} id="login">Login</Link></li>
                </ul>
            </div>
    )
    }
    }

}


export default Nlnavitem