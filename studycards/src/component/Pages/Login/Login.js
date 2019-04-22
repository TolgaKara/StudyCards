import React from 'react'
import { withRouter, Link, Redirect } from "react-router-dom"
import "./Login.css"
import * as firebase from "firebase"
import fire from '../config/Firebase'
import Home from "../Home/Home"
import About from "../About/About"
import Test from "../test"
import authorizedRouter from "../../../loggedComponent/authorizedRouter"



class Login extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            email:"",
            password:"",
            user: null
        }
        this.onChange = this.onChange.bind(this)
        this.loginUser = this.loginUser.bind(this)
        this.logoutUser = this.logoutUser.bind(this)
       

    }


    onChange(event, key){
        this.setState({
            [key]: event.target.value
        })
    }



    loginUser() {
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() =>
        this.props.history.push("/user/")
        
        )}


    logoutUser(){
        fire.auth().signOut()
    }

    authUser() {
        fire.auth().onAuthStateChanged((user) => {
            this.setState({user})
            })
    }
    

    componentDidMount(){
        this.authUser()
    }
    

    render(){

        return(
            <div className="Login">
            <div>
        {(this.state.user) ? <h1>Logged in {this.state.user.uid}</h1> : <h1>Logged out!</h1>}
            </div>
                <div className="Lback">
                    <div className="Lbtn">
                        <button className="active" id="Lobtn">Login</button>
                        <Link to="/sign-up" ><button id="Sbtn">Sign-Up</button></Link>
                    </div>
                    <div className="Linput">
                        <input placeholder="E-Mail" id="Lid" value={this.state.email} 
                        onChange={(event) => this.onChange(event, "email")}></input><br/>


                        <input type="password" placeholder="Password" id="Pid" value={this.state.password}
                        onChange={(event) => this.onChange(event, "password")}></input><br/>
                        
                        {(this.state.user) ? <button onClick={this.logoutUser}>Logout</button> : <button onClick={this.loginUser}>Login</button>}
                    </div>
            </div>
            </div>
        )
    }
}


export default Login