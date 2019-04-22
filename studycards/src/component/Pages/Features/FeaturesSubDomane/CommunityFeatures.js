import React from "react"
import { Link } from "react-router-dom"

import imgFeature from "../img/Gruppe94.png"
import CloudOff from "../img/cloud-img-off.png"
import CodingOff from "../img/coding-img-off.png"
import CommunityOff from "../img/community-img-off.png"
import ProgressOff from "../img/progress-img-off.png"
import ResponsiveOff from "../img/responsive-img-off.png"
import EducationOff from "../img/education-img-off.png"
import CloudOn from "../img/cloud-img-on.png"
import CodingOn from "../img/coding-img-on.png"
import CommunityOn from "../img/community-img-on.png"
import ProgressOn from "../img/progress-img-on.png"
import ResponsiveOn from "../img/responsive-img-on.png"
import EducationOn from "../img/education-img-on.png"

class CommunityFeatures extends React.Component{
    render(){
        return(
            <div className="featuresWrapper">
                <div>
                    <h1>FEATURES</h1>
                    <p>Minim tempor sit sit ipsum do proident sint ea deserunt do voluptate id commodo consequat.<br/>
                        Lorem mollit amet in id ullamco ullamco culpa.<br/>
                        Proident proident id mollit nostrud minim et mollit amet in id ullamco.<br/>
                    </p>
                </div>
                <div>
                    <img className="featuresMainImg" src={imgFeature}/>
                </div>
                <div className="imgWrapper">
                    <div id="educationImg">
                        <Link to="/features"><img src={EducationOff} id="educationOff"/></Link>
                    </div>
                    <div id="cloudImg">
                       <Link to="/features/cloud"> <img src={CloudOff}/> </Link>
                    </div>
                    <div id="communityImg">
                        <Link to="/features/community"><img src={CommunityOn}/></Link>
                    </div>
                    <div id="responsiveImg">
                        <Link to="/features/responsive"><img src={ResponsiveOff}/></Link>
                    </div>
                    <div id="progressImg">
                        <Link to="/features/progress"><img src={ProgressOff}/></Link>
                    </div>
                    <div id="codingImg">
                        <Link to="/features/code"><img src={CodingOff}/></Link>
                    </div>
                </div>
                <div className="featuresContent">
                    <div>
                        <h3 id="featuresTitle">Community</h3><br/>
                        <p>Non officia ex aute amet labore Lorem ut. 
                        Culpa occaecat culpa irure officia eiusmod sint ad magna ut laborum. Sunt adipisicing ullamco eiusmod elit cupidatat irure esse pariatur. 
                        Cupidatat officia veniam eu sit. Duis commodo ut est voluptate occaecat cupidatat culpa.
                        Et tempor anim aute ex sint do ad aliquip consectetur labore ad in proident nisi. 
                        Laboris proident excepteur laboris est commodo amet sit sit quis quis. 
                        Voluptate elit adipisicing labore sit eu est in veniam tempor sint sunt anim dolore quis.
                        Laborum dolor esse velit eu incididunt laborum minim exercitation eu cillum deserunt dolore cupidatat amet.
                        </p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommunityFeatures