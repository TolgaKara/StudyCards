import React from "react"
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import fire from "./component/Pages/config/Firebase"

import Home from "./component/Pages/Home/Home"
import About from "./component/Pages/About/About"
import Features from "./component/Pages/Features/Features"
import Decks from "./component/Pages/Decks/Decks"
import Contact from "./component/Pages/Contact/Contact"
import Login from "./component/Pages/Login/Login"


import Navbar from "./component/Navbar/Navbar"
import Footer from "./component/Footer/Footer"
import Sign from "./component/Pages/Sign/Sign"
import CloudFeatures from "./component/Pages/Features/FeaturesSubDomane/CloudFeatures"
import CommunityFeatures from "./component/Pages/Features/FeaturesSubDomane/CommunityFeatures"
import ResponsiveFeatures from "./component/Pages/Features/FeaturesSubDomane/ResponsiveFeatures"
import ProgressFeatures from "./component/Pages/Features/FeaturesSubDomane/ProgressFeatures"
import CodeFeatures from "./component/Pages/Features/FeaturesSubDomane/CodeFeatures"

import LoggedNavbar from "./LoggedComponent/LoggedNavbar/LoggedNavbar"
import LoggedFooter from "./LoggedComponent/LoggedFooter/LoggedFooter"
import CreateDecks from "./component/Pages/Decks/CreateDecks"


class App extends React.Component{
    constructor(){
        super()
        this.state={
            user: null,
            email:""
        }
    }
    
    componentDidMount(){
        fire.auth().onAuthStateChanged((user) => {
            this.setState({user})
        })
    }


    render(){
        
        if(this.state.user !== null){
            return(
                <Router>
                    <LoggedNavbar/>
                    <Route exact path="/user/decks" component={Decks}/> 
                    <Route exact path="/user/create-decks" component={CreateDecks}/>
                    <LoggedFooter />
                </Router>
                
                
            )


        } else{
            return(

                <Router>
                    <Navbar />  
                        <Route exact path="/about" component={About} />    
                        <Route exact path="/features" component={Features} />
                            <Route exact path="/features/cloud" component={CloudFeatures}/>
                            <Route exact path="/features/community" component={CommunityFeatures}/>
                            <Route exact path="/features/responsive" component={ResponsiveFeatures}/>
                            <Route exact path="/features/progress" component={ProgressFeatures}/>
                            <Route exact path="/features/code" component={CodeFeatures}/>     
                        <Route exact path="/decks" component={Decks} />
                        <Route exact path="/contact" component={Contact} />     
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/sign-up" component={Sign} />
                        
                        <Footer />
                </Router>
    
    )
}
    
    }
}




export default App