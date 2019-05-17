import React from "react"
import fire from "../config/Firebase"



class YourDecks extends React.Component{
    constructor(){
        super()
        this.state = {
            decksProgramming: [],
            decksGeography:[],
            decksLanguages:[],
            decks: [],

        }
    }
    componentDidMount(){
        this.deckchangeHandler()

    }

    deckchangeHandler(){
        fire.database().ref("decks/" + "Programming" + "/" + fire.auth().currentUser.uid).on("child_added", snapshot =>{
            let deck = {
                id: snapshot.key,
                deckname: snapshot.val().deckname,
                description: snapshot.val().description,
                category: snapshot.val().category
            }
            let decks = this.state.decksProgramming
            decks.push(deck)
            this.setState({
                decksProgramming: decks
            })
        })
        fire.database().ref("decks/" + "Geography" + "/" + fire.auth().currentUser.uid).on("child_added", snapshot =>{
            let deck = {
                id: snapshot.key,
                deckname: snapshot.val().deckname,
                description: snapshot.val().description,
                category: snapshot.val().category
            }
            let decks = this.state.decksGeography
            decks.push(deck)

            this.setState({
                decksGeography: decks
            })
        })
        fire.database().ref("decks/" + "Languages" + "/" + fire.auth().currentUser.uid).on("child_added", snapshot =>{
            let deck = {
                id: snapshot.key,
                deckname: snapshot.val().deckname,
                description: snapshot.val().description,
                category: snapshot.val().category

            }
            let decks = this.state.decksLanguages
            decks.push(deck)

            this.setState({
                decksLanguages: decks
            })
        })

        fire.database().ref("decks/" + "Programming" + "/" + fire.auth().currentUser.uid)
        .on("child_removed", snapshot =>{
            let decks = this.state.decksProgramming
            decks = decks.filter((decks) => decks.id !== snapshot.key)
            this.setState({
                decksProgramming: decks
            })
        })
        fire.database().ref("decks/" + "Geography" + "/" + fire.auth().currentUser.uid)
        .on("child_removed", snapshot =>{
            let decks = this.state.decksGeography
            decks = decks.filter((decks) => decks.id !== snapshot.key)
            this.setState({
                decksGeography: decks
            })
        })
        fire.database().ref("decks/" + "Languages" + "/" + fire.auth().currentUser.uid)
        .on("child_removed", snapshot =>{
            let decks = this.state.decksLanguages
            decks = decks.filter((decks) => decks.id !== snapshot.key)
            this.setState({
                decksLanguages: decks
            })
        })
    }

    deleteDeckProgramming(id){
        fire.database().ref("decks/Programming/" + fire.auth().currentUser.uid).child(id).remove()
        
    }
    deleteDeckGeography(id){
        fire.database().ref("decks/Geography/" + fire.auth().currentUser.uid).child(id).remove()
    }
    deleteDeckLanguages(id){
        fire.database().ref("decks/Languages/" + fire.auth().currentUser.uid).child(id).remove()
    }



    render(){
         
        return(
            <div>
                <h1 id="yourDeckTitle">Your Decks</h1>
                <h2>Programming</h2>
                <div className="ShownDecksWrapper">
                    {this.state.decksProgramming.map(decks =>(
                        <div className="ShownDecks"><p id="deleteBtn" onClick= {() => this.deleteDeckProgramming(decks.id)}>x</p>
                            <h4>Name: <br/> {decks.deckname} </h4>
                            <h4>Description: <br/> {decks.description}</h4>                     
                            <h4>Category: <br/>{decks.category}</h4>
                            <div className="DecksBtn">
                            <button id="viewBtn"> View! </button>
                            </div>
                        </div>
                    ))}
                </div>
                <h2>Geography</h2>
                <div className="ShownDecksWrapper">
                    {this.state.decksGeography.map(decks =>(
                        <div className="ShownDecks"><p id="deleteBtn" onClick= {() => this.deleteDeckGeography(decks.id)}>x</p>

                            <h4>Name: <br/> {decks.deckname} </h4>
                            <h4>Description: <br/> {decks.description}</h4>                            
                            <h4>Category: <br/>{decks.category}</h4>
                            <div className="DecksBtn">
                           <button id="viewBtn"> View! </button>                          
                            </div>
                        </div>
                    ))}
                </div>
                <h2>Languages</h2>
                <div className="ShownDecksWrapper">
                    {this.state.decksLanguages.map(decks =>(
                        <div className="ShownDecks"><p id="deleteBtn" onClick= {() => this.deleteDeckLanguages(decks.id)}>x</p>
                            
                            <h4>Name: <br/> {decks.deckname} </h4>
                            <h4>Description: <br/> {decks.description}</h4>                           
                            <h4>Category: <br/>{decks.category}</h4>
                            <div className="DecksBtn">
                           <button id="viewBtn"> View! </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}


export default YourDecks