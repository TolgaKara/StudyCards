import React from 'react'
import { Link } from "react-router-dom"
import "./Login.css"
import fire from '../config/Firebase'
import App from "../../../App"
import About from "../About/About"
import Test from "../test"




class Login extends React.Component{
    constructor(){
        super()
        this.state= {
            email:"",
            password:""

        }
        this.onChange = this.onChange.bind(this)
        this.loginUser = this.loginUser.bind(this)

       

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

