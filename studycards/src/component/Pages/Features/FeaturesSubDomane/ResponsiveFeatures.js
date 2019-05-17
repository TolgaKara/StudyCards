import React from "react"
import { Link } from "react-router-dom"

import imgFeature from "../img/Gruppe94.png"
import CloudOff from "../img/cloud-img-off.png"
import CodingOff from "../img/coding-img-off.png"
import CommunityOff from "../img/community-img-off.png"
import ProgressOff from "../img/progress-img-off.png"
import EducationOff from "../img/education-img-off.png"
import ResponsiveOn from "../img/responsive-img-on.png"






class ResponsiveFeatures extends React.Component{
    render(){
        return(
            <div className="featuresWrapper" id="features">
            
                <div>
                    <h1>FEATURES</h1>
                    <p>Minim tempor sit sit ipsum do proident sint ea deserunt do voluptate id commodo consequat.<br/>
                        Lorem mollit amet in id ullamco ullamco culpa.<br/>
                        Proident proident id mollit nostrud minim et mollit amet in id ullamco.<br/>
                    </p>
                </div>
                <div>
                    <img className="featuresMainImg" src={imgFeature} alt="Companylogo with Directions"/>
                </div>
                <div className="imgWrapper">
                    <div id="educationImg">
                        <Link to="/home/"><img src={EducationOff} id="educationOff" alt="University Hat"/></Link>
                    </div>
                    <div id="cloudImg">
                       <Link to="/home/cloud"> <img src={CloudOff} alt="Cloud"/> </Link>
                    </div>
                    <div id="communityImg">
                        <Link to="/home/community"><img src={CommunityOff} alt="One Person stands behind the other, represents Community"/></Link>
                    </div>
                    <div id="responsiveImg">
                        <Link to="/home/responsive"><img src={ResponsiveOn} alt="Monitor, Phone, Smartwatch, represents Repsonsiv"/></Link>
                    </div>
                    <div id="progressImg">
                        <Link to="/home/progress"><img src={ProgressOff} alt="Progress"/></Link>
                    </div>
                    <div id="codingImg">
                        <Link to="/home/code"><img src={CodingOff} alt="Coding Symbol"/></Link>
                    </div>
                </div>
                <div className="featuresContent">
                    <div>
                        <h3 id="featuresTitle">Responsive</h3><br/>
                        <p>Non officia ex aute amet labore Lorem ut. 
                        Culpa occaecat culpa irure officia eiusmod sint ad magna ut laborum. Sunt adipisicing ullamco eiusmod elit cupidatat irure esse pariatur.
                        Laborum dolor esse velit eu incididunt laborum minim exercitation eu cillum deserunt dolore cupidatat amet. 
                        Cupidatat officia veniam eu sit. Duis commodo ut est voluptate occaecat cupidatat culpa.
                        Et tempor anim aute ex sint do ad aliquip consectetur labore ad in proident nisi. 
                        Laboris proident excepteur laboris est commodo amet sit sit quis quis. 
                        Voluptate elit adipisicing labore sit eu est in veniam tempor sint sunt anim dolore quis.
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

export default ResponsiveFeatures