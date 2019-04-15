import React from "react";
import ReactDOM from "react-dom"
import { Router, Route, browserHistory } from "react-router-dom"
import App from "./component/App"
import Home from "./component/Pages/Home/Home"
import About from "./component/Pages/About/About"
import Features from "./component/Pages/Features/Features"
import Decks from "./component/Pages/Decks/Decks"
import Contact from "./component/Pages/Contact/Contact"
import Login from "./component/Pages/Login/Login"


ReactDOM.render(
<Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="home" component={Home}/>
        <Route path="about" component={About} />    
        <Route path="features" component={Features} />     
        <Route path="decks" component={Decks} />
        <Route path="contact" component={Contact} />     
        <Route path="login" component={Login} />
    </Route>       
</Router>,
 document.getElementById("root"))