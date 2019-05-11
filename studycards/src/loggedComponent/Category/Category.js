import React from "react"
import "./Category.css"

import fire from "../../component/Pages/config/Firebase";

class Category extends React.Component{
    constructor(){
        super()
        this.state = {
            decksProgramming: [],
            decksGeography:[],
            decksLanguages:[],
        }

        this.changeHandler = this.changeHandler.bind(this)

    }
    

changeHandler(){
    fire.database().ref("decks/" + "Programming/" + fire.auth().currentUser.uid).on("child_added", snapshot => {
        let deck = {
            id: snapshot.val().key,
            deckname: snapshot.val().deckname,
            description: snapshot.val().description
        }
        let decks = this.state.decksProgramming
        decks.push(deck)

        this.setState({
            decksProgramming: decks
        })

    })
    fire.database().ref("decks/" + "Geography/" + fire.auth().currentUser.uid).on("child_added", snapshot => {
        let deck = {
            id: snapshot.val().key,
            deckname: snapshot.val().deckname,
            description: snapshot.val().description
        }
        let decks = this.state.decksGeography
        decks.push(deck)

        this.setState({
            decksGeography:decks
        })
        
    })
    fire.database().ref("decks/" + "Languages/" + fire.auth().currentUser.uid).on("child_added", snapshot => {
        let deck = {
            id: snapshot.val().key,
            deckname: snapshot.val().deckname,
            description: snapshot.val().description
        }
        let decks = this.state.decksLanguages
        decks.push(deck)

        this.setState({
            decksLanguages:decks
        })
    })

}
   





    componentDidMount(){
        this.changeHandler()
    }






    render(){
        return(
            <div>
                <h1>Category</h1>
                <div>
                    <h2>Programming - {this.state.decksProgramming.length}</h2>
                    <div className="ShownDecksWrapper">
                    {this.state.decksProgramming.map(decks => (
                    <div className="ShownDecks">
                        <h4>Name: <br/> {decks.deckname}</h4>
                        <p>Description: <br/> {decks.description}</p>
                    </div>
                    ))}
                    </div>
                    
                </div>
                <div>
                    <h2>Geography - {this.state.decksGeography.length}</h2>
                    <div className ="ShownDecksWrapper">
                    {this.state.decksGeography.map(decks => (
                    <div className="ShownDecks">
                        
                        <h4>Name: <br/> {decks.deckname}</h4>
                        <h4>Description: <br/> {decks.description}</h4>
        
                    </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2>Languages - {this.state.decksLanguages.length}</h2>
                    <div className="ShownDecksWrapper">
                        {this.state.decksLanguages.map(decks => (
                            <div className="ShownDecks">
                                <h4>Name: <br/> {decks.deckname}</h4>
                                <h4>Description: <br/> {decks.description}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Category