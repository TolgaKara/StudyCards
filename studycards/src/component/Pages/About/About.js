import React from "react"
import "./About.css"
import rocketImage from "./Img/Gruppe13.png"
import penImage from "./Img/Gruppe17.png"
import lampImage from "./Img/Gruppe26.png"



class About extends React.Component{
render(){
    return(
        <div>
            <div>
                <div className="header" id="about">
                    <div className="title" ><h1>About <br/> Us</h1></div>
                    <p className="titleContent">Minim sit in sit in cillum est tempor. Ad voluptate consequat duis elit ad eiusmod cupidatat non irure sunt. 
                        Mollit tempor culpa sit cupidatat. Dolor cillum do mollit irure eiusmod aliqua. Velit fugiat ut ipsum ex eiusmod amet proident esse. 
                        Elit voluptate irure id quis ad fugiat magna aliquip eiusmod Lorem. Qui ullamco id sunt cupidatat quis ad amet aliqua quis velit irure eiusmod.</p>
                </div>
                <div className="contentWrapper" >
                <div className="content">
                    <img className="images" src={rocketImage} />
                    <h3 id="imgTitle">BE FAST</h3>
                    <p id="imgContent">
                        Non officia ex aute amet labore Lorem ut. 
                        Culpa occaecat culpa irure officia eiusmod sint ad magna ut laborum. Sunt adipisicing ullamco eiusmod elit cupidatat irure esse pariatur. 
                        Cupidatat officia veniam eu sit. Duis commodo ut est voluptate occaecat cupidatat culpa.
                        Et tempor anim aute ex sint do ad aliquip consectetur labore ad in proident nisi. 
                        Laboris proident excepteur laboris est commodo amet sit sit quis quis. 
                        Laborum dolor esse velit eu incididunt laborum minim exercitation eu cillum deserunt dolore cupidatat amet.
                        Voluptate elit adipisicing labore sit eu est in veniam tempor sint sunt anim dolore quis. 
                        Mollit minim aliquip deserunt esse incididunt qui dolore magna veniam aute. Eu fugiat consequat incididunt ad minim fugiat adipisicing ad. 
                        Exercitation adipisicing aute exercitation ut voluptate enim. Non sunt ullamco reprehenderit elit mollit excepteur enim sint nostrud sint et ea qui ut. 
                        Commodo est velit reprehenderit id enim laborum laboris labore labore.
                        Ex ut elit id cillum et officia reprehenderit Lorem ut reprehenderit. 
                        Ex nulla esse occaecat sint ea aliqua aliqua culpa. Culpa et velit cupidatat id officia aliqua incididunt nulla voluptate exercitation quis excepteur.
                        Fugiat Lorem anim enim amet amet cillum quis aute. 
                        Ipsum sint eu laboris incididunt non eiusmod adipisicing labore. 
                        Nulla reprehenderit aliquip voluptate exercitation consectetur ex reprehenderit sint.
                    </p>
                </div>
                <div className="content">
                    <img className="images" src={penImage} />
                    <h3 id="imgTitle">BE CREATIVE</h3>
                    <p id="imgContent">
                        Non officia ex aute amet labore Lorem ut. 
                        Culpa occaecat culpa irure officia eiusmod sint ad magna ut laborum. Sunt adipisicing ullamco eiusmod elit cupidatat irure esse pariatur. 
                        Cupidatat officia veniam eu sit. Duis commodo ut est voluptate occaecat cupidatat culpa.
                        Et tempor anim aute ex sint do ad aliquip consectetur labore ad in proident nisi. 
                        Laboris proident excepteur laboris est commodo amet sit sit quis quis. 
                        Laborum dolor esse velit eu incididunt laborum minim exercitation eu cillum deserunt dolore cupidatat amet.
                        Voluptate elit adipisicing labore sit eu est in veniam tempor sint sunt anim dolore quis. 
                        Mollit minim aliquip deserunt esse incididunt qui dolore magna veniam aute. Eu fugiat consequat incididunt ad minim fugiat adipisicing ad. 
                        Exercitation adipisicing aute exercitation ut voluptate enim. Non sunt ullamco reprehenderit elit mollit excepteur enim sint nostrud sint et ea qui ut. 
                        Commodo est velit reprehenderit id enim laborum laboris labore labore.
                        Ex ut elit id cillum et officia reprehenderit Lorem ut reprehenderit. 
                        Ex nulla esse occaecat sint ea aliqua aliqua culpa. Culpa et velit cupidatat id officia aliqua incididunt nulla voluptate exercitation quis excepteur.
                        Fugiat Lorem anim enim amet amet cillum quis aute. 
                        Ipsum sint eu laboris incididunt non eiusmod adipisicing labore. 
                        Nulla reprehenderit aliquip voluptate exercitation consectetur ex reprehenderit sint.
                    </p>
                </div>
                <div className="content">
                    <img className="images" src={lampImage} />
                    <h3 id="imgTitle">BE INNOVATIVE</h3>
                    <p id="imgContent"> 
                        Non officia ex aute amet labore Lorem ut. 
                        Culpa occaecat culpa irure officia eiusmod sint ad magna ut laborum. Sunt adipisicing ullamco eiusmod elit cupidatat irure esse pariatur. 
                        Cupidatat officia veniam eu sit. Duis commodo ut est voluptate occaecat cupidatat culpa.
                        Et tempor anim aute ex sint do ad aliquip consectetur labore ad in proident nisi. 
                        Laboris proident excepteur laboris est commodo amet sit sit quis quis. 
                        Laborum dolor esse velit eu incididunt laborum minim exercitation eu cillum deserunt dolore cupidatat amet.
                        Voluptate elit adipisicing labore sit eu est in veniam tempor sint sunt anim dolore quis. 
                        Mollit minim aliquip deserunt esse incididunt qui dolore magna veniam aute. Eu fugiat consequat incididunt ad minim fugiat adipisicing ad. 
                        Exercitation adipisicing aute exercitation ut voluptate enim. Non sunt ullamco reprehenderit elit mollit excepteur enim sint nostrud sint et ea qui ut. 
                        Commodo est velit reprehenderit id enim laborum laboris labore labore.
                        Ex ut elit id cillum et officia reprehenderit Lorem ut reprehenderit. 
                        Ex nulla esse occaecat sint ea aliqua aliqua culpa. Culpa et velit cupidatat id officia aliqua incididunt nulla voluptate exercitation quis excepteur.
                        Fugiat Lorem anim enim amet amet cillum quis aute. 
                        Ipsum sint eu laboris incididunt non eiusmod adipisicing labore. 
                        Nulla reprehenderit aliquip voluptate exercitation consectetur ex reprehenderit sint. 
                        
                    </p>
                </div>
                </div>
            </div>
        </div>
            
    )
}
}

export default About