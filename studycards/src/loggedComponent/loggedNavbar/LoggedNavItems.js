import React from "react"
import { Link } from "react-router-dom"
import fire from "../../component/Pages/config/Firebase"



class LoggedNavItems extends React.Component{

    logoutUser(){
        fire.auth().signOut()
    }
    getUserEmail(){
        fire.auth()
    }

    render(){
        

        return(
            <div className="gridWrapper">
                <div>
                    <ul className="CategoryItem">
                        <li id="categoryDropdown"><Link to="/user/">Category</Link>
                            <ul>
                                <li><Link>Programming</Link></li>                        
                                <li><Link>Geography</Link></li>
                                <li><Link>Languages</Link></li>

                            </ul>
                        </li>
                    </ul>
                        <input type="text" placeholder="Search" id="searchfield"></input><button id="searchbtn">Search</button>
                </div>
            <div className="NavitemWrapper">
                <ul className="LoggedNavItems" id="loggedNavItems">
                    <li id="decksDropdown"><Link to="/user/decks">Decks</Link>
                    
                        <ul>
                            <li><Link>Your Decks</Link></li>
                            <li><Link to="/user/create-decks">Create Decks</Link></li>
                        </ul>
                    </li>
                    <li id="userDropdown"><Link to="/user/">User.Name</Link>
                        <ul>
                            <li><Link >Profile</Link></li>
                            <li><Link onClick={this.logoutUser} >Logout</Link></li>
                        </ul>
                    </li>
                </ul>
                
            </div>
            </div>
             
            
        
        )
    }
}


export default LoggedNavItems