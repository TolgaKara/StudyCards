import React from "react"
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import fire from "./component/Pages/config/Firebase"

import About from "./component/Pages/About/About"
import Features from "./component/Pages/Features/Features"
import Decks from "./component/Pages/Decks/Decks"
import Contact from "./component/Pages/Contact/Contact"
import Login from "./component/Pages/Login/Login"
import Home from "./component/Pages/Home/Home"


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
import YourDecks from "./component/Pages/Decks/YourDecks"
import Impressum from "./component/Pages/Impressum/Impressum"
import Category from "./LoggedComponent/Category/Category"
import ChangeDeck from "./component/Pages/Decks/ChangeDeck"
import Programming from "./LoggedComponent/Category/subCategory/Programming" 
import Geography from "./LoggedComponent/Category/subCategory/Geography" 
import Languages from "./LoggedComponent/Category/subCategory/Languages" 
import Null from "./LoggedComponent/Category/subCategory/Null"   


class App extends React.Component{
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
        
        if(this.state.user !== null){
            return(
                <Router>
                    <LoggedNavbar/>
                    <Route exact path="/category/" component={Category}/> 
                    <Route exact path="/category/programming" component={Programming}/> 
                    <Route exact path="/category/geography" component={Geography}/> 
                    <Route exact path="/category/languages" component={Languages}/>
                    <Route exact path="/category/null" component={Null}/>   
                    <Route exact path="/user/decks" component={Decks}/> 
                    <Route exact path="/user/create-decks" component={CreateDecks}/>
                    <Route exact path="/user/your-decks" component={YourDecks}/>
                    <Route exact path="/impressum" component={Impressum}/>
                    <Route exact path="/change-deck" component={ChangeDeck}/>
                    <LoggedFooter />
                </Router>
                
                
            )


        } else{
            return(

                <Router>
                    <Navbar />
                        <Route path="/home/" component={Home} />
                        <Route path="/about" component={About} />    
                        <Route exact path="/home/" component={Features} />
                            <Route  path="/home/cloud" component={CloudFeatures}/>
                            <Route  path="/home/community" component={CommunityFeatures}/>
                            <Route  path="/home/responsive" component={ResponsiveFeatures}/>
                            <Route  path="/home/progress" component={ProgressFeatures}/>
                            <Route  path="/home/code" component={CodeFeatures}/>     
                        <Route exact path="/decks" component={Decks} />
                        <Route exact path="/contact" component={Contact} />     
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/sign-up" component={Sign} />
                        <Route exact path="/impressum" component={Impressum}/>
                        
                        <Footer />
                </Router>
    
    )
}
    
    }
}




export default App