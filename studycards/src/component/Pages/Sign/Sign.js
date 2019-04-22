import React from "react"
import { Link } from "react-router-dom"
import "./Sign.css"
import fire from "../config/Firebase"
import { error } from "util";

class Sign extends React.Component{
    constructor(){
        super()
        this.state = {
            email:"",
            password:"",
            name:"",
            vorname:""

        }
        this.onChange = this.onChange.bind(this)
        this.createUser = this.createUser.bind(this)

    }

    
    onChange (event, key) {
        
        this.setState({
            [key]: event.target.value
        })
    }

    

    createUser(){
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    }

    
    render(){
        return(
            <div className="Login">
                <div className="Lback">
                    <div className="Lbtn">
                        <Link to="/login" ><button id="Loginbtn">Login</button></Link>
                         <button className="active" id="Signbtn">Sign-Up</button>
                    </div>
                    <div className="Linput">
                        
                        <input type="email" placeholder="E-Mail" id="Lid" value={this.state.email} 
                        onChange={(event) => this.onChange(event, "email")} ></input><br/>
                        <input type="password" placeholder="Password" id="Pid"  value={this.state.password} 
                        onChange={(event) => this.onChange(event, "password")}></input><br/>
                        <input placeholder="Name" id="Kid" value={this.state.name}
                        onChange={(event) => this.onChange(event, "name")}></input><br/>
                        <input placeholder="Vorname" id="Kid" value={this.state.vorname}
                        onChange={(event) => this.onChange(event, "vorname")}></input><br/>
                        <button onClick={this.createUser}>Sign Up</button>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}




export default Sign