import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Test from "./Tests/Test"
import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Features from "./Pages/Features/Features"


class App extends React.Component{
    render(){

        return(

            <div>
                <Navbar />
                <Footer />
            </div>
    )
}
}


export default App