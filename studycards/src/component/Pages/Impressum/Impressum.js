import React from "react"
import "./Impressum.css"


class Impressum extends React.Component{
    render(){
        return(
            <div className="ImpressumWrapper">
            <div className="Impressum">
                <h1>Impressum</h1>
                <h2>Herausgeber</h2>
                <p>
                    StudyCards <br/>
                    CEO: Max Mustermann <br/><br/>

                    Musterstraße 3<br/>
                    10328 Berlin<br/>

                    Telefon: +49 30 33241<br/><br/>

                    USt-ID-Nr.: DE musterNummer<br/><br/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Sem nulla pharetra diam sit amet nisl. 
                    Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. 
                    Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Ac felis donec et odio pellentesque diam volutpat. 
                    Adipiscing elit pellentesque habitant morbi tristique senectus et. Posuere urna nec tincidunt praesent semper. 
                    Vel turpis nunc eget lorem dolor. Tempor id eu nisl nunc. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. 
                    Neque egestas congue quisque egestas diam.
                    <br/>
                    A condimentum vitae sapien pellentesque habitant. 
                    Pulvinar mattis nunc sed blandit libero volutpat sed. Eget duis at tellus at urna. 
                    Odio aenean sed adipiscing diam donec adipiscing. Elementum eu facilisis sed odio morbi quis. 
                    Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. 
                    Lectus magna fringilla urna porttitor rhoncus dolor. 
                    Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. 
                    Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. 
                    Volutpat diam ut venenatis tellus in.
                </p>
                <h2>Location:</h2>
                <p>
                <iframe id="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4858.443700978946!2d13.524395696337471!3d52.49322360918651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8492eece13641%3A0xa5a500f6ace6b241!2sTreskowallee%2FHTW+(Berlin)!5e0!3m2!1sen!2sde!4v1558872361627!5m2!1sen!2sde" width="600" height="550" frameborder="0" allowfullscreen></iframe>
                </p>

            </div>
            </div>
        )
    }
}


export default Impressum