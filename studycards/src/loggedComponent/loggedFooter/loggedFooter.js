import React from "react"
import "../../component/Footer/Footer.css"
import { Link } from "react-router-dom"


class LoggedFooter extends React.Component{
    render(){
        return(
            <div className ="Fgrid">
            <div className ="Flinks">
                <h2>Links</h2>
                <hr className="hr1"/>
                
                
                <Link to ="/decks"><p>Decks</p></Link>    
                <Link to ="/contact"><p>Contact Us</p></Link>
                <hr/>
                <Link to ="/impressum"><p>Impressum</p></Link>
                <Link to ="/privacy-policy"><p>Privacy Policy</p></Link>
                <Link to ="/term-and-condition"><p>Term and Condition</p></Link>
            </div>
            <div>
                <h2>About the Company</h2>
                <hr className="hr1"/>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br/>
                sed diam nonumy eirmod tempor invidunt ut labore et dolore <br/>
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam <br/>
                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea <br/>
                takimata sanctus est Lorem ipsum dolo.
                </p>
            <div className="Ficons">
                <pre><i class="fas fa-landmark">    StudyCard</i></pre>
                <pre><i class="fas fa-map-marker-alt">     Fugger Strasse 99, 71111 Waldenbuch</i></pre>
                <pre><i class="fas fa-mobile-alt">      07157 79 26 56</i></pre>
                <pre><i class="fas fa-envelope">    home@study-card.com</i></pre>

            </div>

            </div>
            <div>
                <h2>Social Media</h2>
                <hr className="hr1"/>
                <div className="Fbrands">
                <a href="https://www.youtube.com"><i class="fab fa-youtube"></i></a>
                <a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
                <a href="https://www.reddit.com"><i class="fab fa-reddit-alien"></i></a>
                <a href="https://www.twitter.com"><i class="fab fa-twitter"></i></a>
                </div>

            </div>
        </div>
        )
    }
}


export default LoggedFooter