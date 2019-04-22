import React from "react"
import "./Contact.css"

class Contact extends React.Component{
    render(){
        return(
      
        <form action="mailto:s0560885@htw-berlin.de">
        <div className="contactWrapper">
                <div className="contactTitle">
                    <h1>CONTACT <br/>US</h1><br/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla condimentum velit a erat consequat scelerisque. 
                    Etiam ut semper urna, nec aliquam mi. Sed ullamcorper.
                    </p>
                </div>
                <div className="contactInput">
                    <div>
                        <input placeholder="Subject" id="subjectBox"></input><br/>
                    </div>
                    <div>
                        <input placeholder="Name" id="personalBox"></input>
                        <input placeholder="Firstname" id="personalBox"></input><br/>
                        <input placeholder="E-Mail" type="email" id="personalBox"></input>
                        <input placeholder="Phone Number" id="personalBox"></input><br/>
                    </div>
                    <div>
                        <textarea placeholder="Message" id="messageBox"></textarea>
                    </div>
                </div>
                <div className="sendButton">
                <button id="sendBtn" formAction="mailto:s0560885@htw-berlin.de">SEND</button>
                
                </div>
            
        </div>
        </form>
        
        )
    }
}

export default Contact