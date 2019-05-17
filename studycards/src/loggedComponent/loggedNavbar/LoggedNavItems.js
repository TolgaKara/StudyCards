import React from "react"
import { Link } from "react-router-dom"
import fire from "../../component/Pages/config/Firebase"




class LoggedNavItems extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "",
            firstname: ""
        }
        // this.getUserFullName = this.getUserFullName.bind(this)
    }
    
    logoutUser(){
        fire.auth().signOut()
    }

    //  getUserFullName(){
    //     fire.firestore().collection('user').where(fire.auth().currentUser.email, "==", "fire.firestore().collection(user).get(email)").get().then(snapshot =>{
    //         snapshot.docs.forEach(doc =>{
    //             this.setState({
    //             firstname: doc.data().firstname,
    //             name: doc.data().name
    //             })
                
    //         })
    //     })
         
    
    // }

    // // getUserEmail(){
    // //     fire.database().ref("user").once
    // // }

    // componentDidMount(){
    //     this.getUserFullName()
    // }


    render(){
        
        console.log(fire.name)
        console.log(fire.auth().currentUser.email)
        console.log(fire.auth().currentUser.uid)
        console.log(fire.auth().currentUser.displayName)
        console.log(fire.database().ref("user"))
        
        console.log("___________________")
       
        


           
        

        return(
            <div className="gridWrapper">
                <div>
                    <ul className="CategoryItem">
                        <li id="categoryDropdown">
                        <Link to="/category/">Category</Link>
        
                        </li>
                    </ul>
                        <input type="text" placeholder="Search" id="searchfield"></input><button id="searchbtn">Search</button>
                </div>
            <div className="NavitemWrapper">
                <ul className="LoggedNavItems" id="loggedNavItems">
                    <li id="decksDropdown"><Link to = "#" id="decks">Decks</Link><i id="dropIcon"className="fas fa-angle-down"/>
                    
                        <ul>
                            <li><Link to="/user/your-decks">Your Decks</Link></li>
                            <li><Link to="/user/create-decks">Create Decks</Link></li>
                            <li><Link to="/change-deck">Change Decks</Link></li>
                        </ul>
                    </li>
                    <li id="userDropdown"><Link to="#" id="userName">{fire.auth().currentUser.email}</Link><i id="dropIcon" className="fas fa-angle-down"/>
                        <ul>
                            <li><Link to="/home/" onClick={this.logoutUser} >Logout</Link></li>
                        </ul>
                    </li>
                </ul>
                
            </div>
            </div>
             
            
        
        )
    }
}


export default LoggedNavItems