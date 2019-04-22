import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import Login from "../component/Pages/Login/Login"
import Decks from "../component/Pages/Decks/Decks"
import Contact from "../component/Pages/Contact/Contact"




function privateRoute(){
  return( 
    <div>

        <loggedNavbar/>
        <loggedFooter/>
    </div>  
  
    )
}

export default privateRoute