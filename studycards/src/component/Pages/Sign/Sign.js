import React from "react"
import { Link } from "react-router-dom"
import "./Sign.css"
import fire from "../config/Firebase"


class Sign extends React.Component{
    constructor(){
        super()
        this.state = {
            email:"",
            password:"",
            name:"",
            firstname:"",

        }
        this.onChange = this.onChange.bind(this)
        this.createUser = this.createUser.bind(this)
        // this.newUser = this.newUser.bind(this)
        

    }

    
    onChange (event, key) {
        
        this.setState({
            [key]: event.target.value
        })
    }

    

    createUser(){
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
            fire.firestore().collection("user").doc("userDetails").collection("singleUserDetails").add({
                email: this.state.email,
                name: this.state.name,
                firstname: this.state.firstname
            })
        )
    
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
                        <input placeholder="Firstname" id="Kid" value={this.state.vorname}
                        onChange={(event) => this.onChange(event, "firstname")}></input><br/>
                        <button onClick={this.createUser}>Sign Up</button>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}




export default Sign