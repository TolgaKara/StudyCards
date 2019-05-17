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
                <form action="contactform.php" method="post"></form>
                <div className="contactInput">
                    <div>
                        <input placeholder="Subject" className="subject" id="subjectBox"></input><br/>
                    </div>
                    <div>
                        <input placeholder="Name" className="name" id="personalBox"></input>
                        <input placeholder="Firstname" className="firstname" id="personalBox"></input><br/>
                        <input placeholder="E-Mail" className="email" type="email" id="personalBox"></input>
                        <input placeholder="Phone Number" className="phoneNumber" id="personalBox"></input><br/>
                    </div>
                    <div>
                        <textarea placeholder="Message" className="message" id="messageBox" cols="38" rows="10"></textarea>
                    </div>
                </div>
                <div className="sendButton">
                <button className="sendBtn" id="sendBtn">SEND</button>
                
                </div>
            
        </div>
        </form>
        
        )
    }
}

export default Contact